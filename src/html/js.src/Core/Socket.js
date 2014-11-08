
/**
 * WebAPI Socket handler
 */
_NS_.Socket = function() {

	// Superclass constructor
	_NS_.EventDispatcher.call(this);

	// The user interaction handler
	this.interaction = new UserInteraction(this);

	// Status flags
	this.connecting = false;
	this.connected = false;
	this.socket = null;

	// Event ID and callback tracking
	this.lastID = 0;
	this.responseCallbacks = {};

	// Parse authentication token from URL hash
	this.authToken = "";
	if (window.location.hash)
		this.authToken = window.location.hash.substr(1);

}

/**
 * Subclass event dispatcher
 */
_NS_.Socket.prototype = Object.create( _NS_.EventDispatcher.prototype );

/**
 * Cleanup after shutdown/close
 */
_NS_.Socket.prototype.__handleClose = function() {

	// Fire the disconnected event
	this.__fire("disconnected", []);

	// Hide any active user interaction - it's now useless
	UserInteraction.hideInteraction();

}

/**
 * Handle connection acknowlegement
 */
_NS_.Socket.prototype.__handleOpen = function(data) {
	this.__fire("connected", data['version']);
}

/**
 * Handle raw incoming data
 */
_NS_.Socket.prototype.__handleData = function(data) {
	var o = JSON.parse(data);

	// Forward all the frames of the given ID to the
	// frame-handling callback.
	if (o['id']) {
		var cb = this.responseCallbacks[o['id']];
		if (cb != undefined) cb(o);
	}

	// Fire event if we got an event response
	else if (o['type'] == "event") {
		var data = o['data'];

		// [Event] User Interaction
		if (o['name'] == "interact") {
			// Forward to user interaction controller
			this.interaction.handleInteractionEvent(o['data']);

		} else {
			this.__fire(o['name'], o['data']);

		}

	}

}

/**
 * Send a JSON frame
 */
_NS_.Socket.prototype.send = function(action, data, responseEvents, responseTimeout) {
	var self = this;

	// Calculate next frame's ID
	var frameID = "a-" + (++this.lastID);
	var frame = {
		'type': 'action',
		'name': action,
		'id': frameID,
		'data': data || { }
	};

	// Register response callback
	if (responseEvents) {
		var timeoutTimer = null,
			eventify = function(name) {
				if (!name) return "";
				return "on" + name[0].toUpperCase() + name.substr(1);
			}

		// Register a timeout timer
		// unless the responseTimeout is set to 0
		if (responseTimeout !== 0) {
			timeoutTimer = setTimeout(function() {

				// Remove slot
				delete self.responseCallbacks[frameID];

				// Send error event
				if (responseEvents['onError'])
					responseEvents['onError']("Response timeout");

			}, responseTimeout || 10000);
		}

		// Register a callback that will be fired when we receive
		// a frame with the specified ID.
		this.responseCallbacks[frameID] = function(data) {

			// We got a response, reset timeout timer
			if (timeoutTimer!=null) clearTimeout(timeoutTimer);

			// Cleanup when we received a 'succeed' or 'failed' event
			if ((data['name'] == 'succeed') || (data['name'] == 'failed')) {
				delete self.responseCallbacks[frameID];
			}

			// Pick and fire the appropriate event response
			var evName = eventify(data['name']);
			if (responseEvents[evName]) {

				// Fire the function with the array list as arguments
				responseEvents[evName].apply(
						self, data['data'] || []
					);

			}

		};
	}

	// Send JSON Frame
	this.socket.send(JSON.stringify(frame));
}

/**
 * Close connection
 */
_NS_.Socket.prototype.close = function() {
	if (!this.connected) return;

	// Disconnect
	this.socket.close();
	this.connected = false;

	// Handle disconnection
	this.__handleClose();

}

/**
 * Establish connection
 */
_NS_.Socket.prototype.connect = function( cbAPIState, autoLaunch ) {
	var self = this;
	if (this.connected) return;

	// Defaults
	if (autoLaunch == undefined)
		autoLaunch = true;

	// Concurrency-check
	if (this.connecting) return;
	this.connecting = true;

	/**
	 * Socket probing function
	 *
	 * This function tries to open a websocket and fires the callback
	 * when a status is known. The first parameter to the callback is a boolean
	 * value, wich defines if the socket could be oppened or not.
	 *
	 * The second parameter is the websocket instance.
	 */
	var probe_socket = function(cb, timeout) {
		try {

			// Calculate timeout
			if (!timeout) timeout=500;
			console.log("[socket] Probing socket, timeout=", timeout);

			// Safari bugfix: When everything else fails
			var timedOut = false,
				timeoutCb = setTimeout(function() {
					console.log("[socket] Timeout occured");
					timedOut = true;
					console.log("[socket] Firing callback(false)");
					cb(false);
				}, timeout);

			// Setup websocket & callbacks
			var socket = new WebSocket(WS_ENDPOINT);
			socket.onerror = function(e) {
				console.warn("[socket] Socket error occured (timedOut="+timedOut+")", e);
				if (timedOut) return;
				clearTimeout(timeoutCb);
				if (!self.connecting) return;
				console.log("[socket] Closing socket");
				socket.close();
				console.log("[socket] Firing callback(false)");
				cb(false);
			};
			socket.onopen = function(e) {
				console.warn("[socket] Socket is now open (timedOut="+timedOut+")");
				if (timedOut) return;
				clearTimeout(timeoutCb);
				if (!self.connecting) return;
				console.log("[socket] Firing callback(true,",socket,")");
				cb(true, socket);
			};

		} catch(e) {
			console.warn("[socket] Error setting up socket! ",e);
			if (timedOut) return;
			clearTimeout(timeoutCb);
			if (!self.connecting) return;
			console.log("[socket] Closing socket");
			socket.close();
			console.log("[socket] Firing callback(false)");
			cb(false);
		}
	};

	/**
	 * Socket check loop
	 */
	var check_loop = function( cb, timeout, _retryDelay, _startTime) {

		// Get current time
		var time = new Date().getTime();
		if (!_startTime) _startTime=time;
		if (!_retryDelay) _retryDelay=500;

		// Calculate how many milliseconds are left until we 
		// reach the timeout.
		var msLeft = timeout - (time - _startTime);

		console.log("[socket] Checking socket status (_startTime=",_startTime,", _retryDelay=",_retryDelay,", time=",time,", msLeft=",msLeft,")");

		// Register a callback that will be fired when we reach
		// the timeout defined
		var timedOut = false,
			timeoutTimer = setTimeout(function() {
				console.log("[socket] Check loop timed out");
				timedOut = true;
				cb(false);
			}, msLeft);

		// Setup probe callback
		var probe_cb = function( state, socket ) {
			console.log("[socket] Got probe callback: ",state);
			if (timedOut) return;
			// Don't fire timeout callback
			if (state) {
				clearTimeout(timeoutTimer);
				cb(true, socket); // We found an open socket
			} else {
				// If we don't have enough time to retry,
				// just wait for the timeoutTimer to kick-in
				if (msLeft < _retryDelay) return;
				// Otherwise clear timeout timer
				clearTimeout(timeoutTimer);
				// And re-schedule websocket poll
				console.log("[socket] Scheduling re-probe in ",_retryDelay);
				setTimeout(function() {
					check_loop( cb, timeout, _retryDelay, _startTime );
				}, _retryDelay);
			}
		};

		// Calculate timeout allowance for the probe socket
		var probeTimeout = 500;
		if (msLeft < probeTimeout)
			probeTimeout = msLeft;

		// And send probe
		console.log("[socket] Probing socket (timeout=",probeTimeout,")");
		probe_socket( probe_cb, probeTimeout );

	};

	/**
	 * Callback to handle a successful pick of socket
	 */
	var socket_success = function( socket ) {
		self.connecting = false;
		self.connected = true;

		// Bind extra handlers
		self.socket = socket;
		self.socket.onclose = function() {
			console.warn("Remotely disconnected from CernVM WebAPI");
			self.__handleClose();
		};
		self.socket.onmessage = function(e) {
			self.__handleData(e.data);
		};

		// Send handshake and wait for response
		// to finalize the connection
		self.send("handshake", {
			"version": _NS_.version,
			"auth": self.authToken
		}, function(data, type, raw) {
			console.info("Successfuly contacted with CernVM WebAPI v" + data['version']);
			self.__handleOpen(data);
		});

		// We managed to connect, we do have an API installed
		if (cbAPIState) cbAPIState(true);

	};

	/**
	 * Callback to handle a failure to open a socket
	 */
	var socket_failure = function( socket ) {
		console.error("Unable to contact CernVM WebAPI");
		if (!self.connecting) return;
		self.connecting = false;
		self.connected = false;

		// We could not connect nor launch the plug-in, therefore
		// we are missing API components.
		if (cbAPIState) cbAPIState(false);

	};

	/**
	 * Callback function from check_loop to initialize
	 * the websocket and to bind it with the rest of the
	 * class instance.
	 */
	var checkloop_cb = function( state, socket ) {

		// Check state
		if (!state) {
			socket_failure();

		} else {
			// We got a socket!
			socket_success(socket);
		}

	};

	/**
	 * Prope a socket with retries if failed
	 */
	var probe_socket_with_retries = function( probe_timeout, retries, callback ) {
		var tries = 0,
			do_try = function() {
			console.log("[socket] Probe try");

			// Check if we ran out of retries
			if (++tries > retries) {
				console.log("[socket] Ran out of retries");
				callback(false);
				return;
			}

			// Probe for connection
			probe_socket(function(state, socket) {
				if (state) {
					// If we got a socket, we are done
					callback(state, socket);
					return;
				} else {
					// Otherwise schedule another try
					console.log("[socket] Scheduling retry in 100ms");
					setTimeout(do_try, 100);
				}
			}, probe_timeout);
		}

		console.log("[socket] Trying socket probe with ",retries," retries");
		do_try();
	}

	// First, check if we can directly contact a socket
	// (Probe a socket with 4 retries before reaching a decision of launching
	//  the plug-in via URL)
	console.log("[socket] Starting probe with 4 retries");
	probe_socket_with_retries( 500, 4, function(state, socket) {
		if (state) {
			// A socket is directly available
			console.log("[socket] Got socket");
			socket_success(socket);
		} else {

			// We ned to do a URL launch
			if (autoLaunch) {
				console.log("[socket] Auto-launching");

				// Create a tiny iframe for triggering the launch
				var e = document.createElement('iframe'); 
				e.src = WS_URI;
				e.style.visibility="hidden";
				e.style.width = "0";
				e.style.height = "0";
				e.style.position = "absolute";
				e.style.left = "-1000px"; 
				document.body.appendChild(e);

				// And start loop for 5 sec
				check_loop(checkloop_cb, 5000);

			} else {

				// Otherwise just fail
				socket_failure();

			}

		}
	});	

}