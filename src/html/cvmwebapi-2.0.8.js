window.CVM={version:"2.0.8"};(function(s){var i="data:image/gif;base64,R0lGODlhIAAgALMAAGZmZnl5eczMzJ+fn////7Ozs4yMjGtra+Li4nFxcaampgAAAAAAAAAAAAAAAAAAACH5BAEHAAQALAAAAAAgACAAAASjkMhJq704681JKV04JYkYDgAwmBuSpgibGS9gyJdQpwJeBTtAwDcpBFMgYuJ1WKZKPlRqSACmVjLXK2l8xVi0raSbupl0Ne6uJ7K+zOEXtUOWS9zijrNGxT87UjtURyothAASh18YcUGJhGY5hzZ7R2wWfpNHcxR1lmiHSRSVQQoSCpNQE4GQEo1HWARamgcHmjCut7pvBKC7ugKZv4ecRMYsEQA7";var d="data:image/gif;base64,R0lGODlhIAAgAMQAAGZmZnt7e8TExK2treXl5dXV1Wtra4qKivj4+L29vd7e3pGRke/v78zMzLW1tYSEhHR0dJmZmQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEHAAgALAAAAAAgACAAAAXUICKOZGmeKMoUguMIBZPOY3IAeI4fCX0KEJ0wBxH4RouhMrfwEQLLKCBAmEGl0UAqmRUQBsumSYBtjG5KYykoVYwiS0gpgQUsZAVp71zHsaMHIwx9hAAyCHmACQoEDn9RBSJkSweMI5NSag51VSJ1DiKbWJ0In5JYBiOJmSKrYSNgWJEIg3ojV1KHCGhLnbVSgTVRciINdXsjjzpaxVjEJJhDbiIKCrhCaiVcQwEJBAoJD68o14VTM0/mOFQ+231iR0B1RUdzvEI89SosLjC6+gBnhAAAOw==";var l="data:image/gif;base64,R0lGODlhIAAgALMAAGZmZpOTk93d3Wtra8zMzLW1tXNzc3p6eu/v78XFxYODg9bW1qWlpejo6Pj4+IqKiiH5BAEHAA4ALAAAAAAgACAAAATr0MlJq7046827p4QBGMTHicBoVohApTAlIN4yjE1TwGmRH4DBooMa3XipQXFA0wiQ0ChguAHyFCUJQYE8dBqogY8BPDB0R0Pje0zYkMJEcs3ZAQKII7zx6GlCPAsMKQcuC1YMBDwkF0UpDih0DgspBghIBhdQDjcDEgEOl0EOmxaOAJApLlqVojCZFoeBgwAHQ4AAiTy2GnZ4p619AAUdeSlupwYLckFNG2BJBQgMIgYMCAVpkhpWMFg0CFuYHE9S5lMnr3o8SjBM5DcHDdhI0g1AQh+rEkgyziupKgHMsKAalYEIEypcyHBDBAA7";var u="data:image/gif;base64,R0lGODlhIAAgANUAAPX19fT09PLy8vDw8O7u7uzs7OLi4tnZ2c/Pz83NzczMzMXFxby8vLKysqmpqZ+fn5iYmJWVlZKSkoyMjICAgHx8fHl5eXZ2dnR0dHBwcG9vb21tbWtra2pqamhoaGdnZ2ZmZkxMTEpKSv///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEHACMALAAAAAAgACAAAAauwJFwSCwaj8ikcln5OJ/QqFRKnFqv0OpnyR05tV3mdvgNC87GslCtFbnf7/R4PTfLwfYjm41I+P+AgYB7cyAZG4iJiouIdHh5RYSQd2R1Sg0RDwwAkXV8R5iGoguPXpZGDKKqIAeVpXqrqq6zSbGyjrSgtqO4vbq7rL5Ylbumhm0eycoSQ6GxfYqQD8+TqNMTDgXV23nY0A3cyMHhdBqG4OSmBgvj5BEGQgvo6WFBADs=";var a=null,j=false,n=[];s.debugLogging=true;s.version="1.0";s.markPageLoaded=function(){j=true};s.launchRDP=function(G,D){var F=800,A=600,E=24;if(D!=undefined){var C=D.split("x");F=parseInt(C[0]);A=parseInt(C[1]);if(C.length>2){E=parseInt(C[2])}}var B=window.open("http://cernvm.cern.ch/releases/webapi/webrdp/webclient.html#"+G+","+F+","+A,"WebRDPClient","width="+F+",height="+(A+100));B.moveTo((screen.width-F)/2,(screen.height-(A+100))/2);setTimeout(function(){B.focus()},100);B.focus();return B};s.startCVMWebAPI=function(D,C,A){var B=function(){var E=new s.WebAPIPlugin();E.connect(function(F){if(F){D(E)}else{var G=document.createElement("iframe");G.src="http://labs.wavesoft.gr/webapi/install";G.width="100%";G.height=400;G.frameBorder=0;b.createFramedWindow({body:G,icon:l,disposable:false});var H=function(){E=new s.WebAPIPlugin();E.connect(function(I){if(I){D(E);b.hideInteraction()}else{setTimeout(function(){H()},1000)}},false)};H()}})};if(!j){n.push(B)}else{B()}};var k=0;var c=1;var p="ws://127.0.0.1:5624",h="cernvm-webapi://launch";var t=1,f=2,g=4,w=8,m=16;var e=1,y=2,z=256;var o=1;function x(B){var A=["missing","available","poweroff","saved","paused","running"];if((B<0)||(B>=A.length)){return"unknown"}return A[B]}s.EventDispatcher=function(A){this.events={}};s.EventDispatcher.prototype.__fire=function(B,A){if(s.debugLogging){console.log("Firing",B,"(",A,")")}if(this.events[B]==undefined){return}var D=this.events[B];for(var C=0;C<D.length;C++){D[C].apply(this,A)}};s.EventDispatcher.prototype.addEventListener=function(A,B){if(this.events[A]==undefined){this.events[A]=[]}this.events[A].push(B)};s.EventDispatcher.prototype.removeEventListener=function(A,C){if(this.events[A]==undefined){return}var B=this.events[A].indexOf(C);if(B<0){return}this.events.splice(B,1)};var r=function(B){var A=0;if(B.use64bit){A|=t}if(B.useBootDisk){A|=f}if(B.useGuestAdditions){A|=g}if(B.useFloppyIO){A|=w}if(B.headful){A|=m}return A};var q=function(C){var A=function(D){C.__config.flags=D;C.setAsync("flags",D)},B=function(){return C.__config.flags};Object.defineProperties(this,{value:{get:function(){return B()},set:function(D){A(D)}},use64bit:{get:function(){return((B()&t)!=0)},set:function(D){if(D){A(B()|t)}else{A(B()&~t)}}},useBootDisk:{get:function(){return((B()&f)!=0)},set:function(D){if(D){A(B()|f)}else{A(B()&~f)}}},useGuestAdditions:{get:function(){return((B()&g)!=0)},set:function(D){if(D){A(B()|g)}else{A(B()&~g)}}},useFloppyIO:{get:function(){return((B()&w)!=0)},set:function(D){if(D){A(B()|w)}else{A(B()&~w)}}},headful:{get:function(){return((B()&m)!=0)},set:function(D){if(D){A(B()|m)}else{A(B()&~m)}}}})};s.ProgressFeedback=function(){};s.Socket=function(){s.EventDispatcher.call(this);this.interaction=new b(this);this.connecting=false;this.connected=false;this.socket=null;this.lastID=0;this.responseCallbacks={};this.authToken="";if(window.location.hash){this.authToken=window.location.hash.substr(1)}};s.Socket.prototype=Object.create(s.EventDispatcher.prototype);s.Socket.prototype.__handleClose=function(){this.__fire("disconnected",[]);b.hideInteraction()};s.Socket.prototype.__handleOpen=function(A){this.__fire("connected",A.version)};s.Socket.prototype.__handleData=function(B){var C=JSON.parse(B);if(C.id){var A=this.responseCallbacks[C.id];if(A!=undefined){A(C)}}else{if(C.type=="event"){var B=C.data;if(C.name=="interact"){this.interaction.handleInteractionEvent(C.data)}else{this.__fire(C.name,C.data)}}}};s.Socket.prototype.send=function(C,D,F,E){var H=this;var I="a-"+(++this.lastID);var A={type:"action",name:C,id:I,data:D||{}};if(F){var G=null,B=function(J){if(!J){return""}return"on"+J[0].toUpperCase()+J.substr(1)};if(E!==0){G=setTimeout(function(){delete H.responseCallbacks[I];if(F.onError){F.onError("Response timeout")}},E||10000)}this.responseCallbacks[I]=function(K){if(G!=null){clearTimeout(G)}if((K.name=="succeed")||(K.name=="failed")){delete H.responseCallbacks[I]}var J=B(K.name);if(F[J]){F[J].apply(H,K.data||[])}}}this.socket.send(JSON.stringify(A))};s.Socket.prototype.close=function(){if(!this.connected){return}this.socket.close();this.connected=false;this.__handleClose()};s.Socket.prototype.connect=function(A,B){var I=this;if(this.connected){return}if(B==undefined){B=true}if(this.connecting){return}this.connecting=true;var H=function(J,M){try{if(!M){M=500}console.log("[socket] Probing socket, timeout=",M);var L=false,O=setTimeout(function(){console.log("[socket] Timeout occured");L=true;console.log("[socket] Firing callback(false)");J(false)},M);var K=new WebSocket(p);K.onerror=function(P){console.warn("[socket] Socket error occured (timedOut="+L+")",P);if(L){return}clearTimeout(O);if(!I.connecting){return}console.log("[socket] Closing socket");K.close();console.log("[socket] Firing callback(false)");J(false)};K.onopen=function(P){console.warn("[socket] Socket is now open (timedOut="+L+")");if(L){return}clearTimeout(O);if(!I.connecting){return}console.log("[socket] Firing callback(true,",K,")");J(true,K)}}catch(N){console.warn("[socket] Error setting up socket! ",N);if(L){return}clearTimeout(O);if(!I.connecting){return}console.log("[socket] Closing socket");K.close();console.log("[socket] Firing callback(false)");J(false)}};var D=function(N,P,S,K){var L=new Date().getTime();if(!K){K=L}if(!S){S=500}var J=P-(L-K);console.log("[socket] Checking socket status (_startTime=",K,", _retryDelay=",S,", time=",L,", msLeft=",J,")");var M=false,Q=setTimeout(function(){console.log("[socket] Check loop timed out");M=true;N(false)},J);var R=function(U,T){console.log("[socket] Got probe callback: ",U);if(M){return}if(U){clearTimeout(Q);N(true,T)}else{if(J<S){return}clearTimeout(Q);console.log("[socket] Scheduling re-probe in ",S);setTimeout(function(){D(N,P,S,K)},S)}};var O=500;if(J<O){O=J}console.log("[socket] Probing socket (timeout=",O,")");H(R,O)};var C=function(J){I.connecting=false;I.connected=true;I.socket=J;I.socket.onclose=function(){console.warn("Remotely disconnected from CernVM WebAPI");I.__handleClose()};I.socket.onmessage=function(K){I.__handleData(K.data)};I.send("handshake",{version:s.version,auth:I.authToken},function(M,L,K){console.info("Successfuly contacted with CernVM WebAPI v"+M.version);I.__handleOpen(M)});if(A){A(true)}};var F=function(J){console.error("Unable to contact CernVM WebAPI");if(!I.connecting){return}I.connecting=false;I.connected=false;if(A){A(false)}};var E=function(K,J){if(!K){F()}else{C(J)}};var G=function(L,J,N){var M=0,K=function(){console.log("[socket] Probe try");if(++M>J){console.log("[socket] Ran out of retries");N(false);return}H(function(P,O){if(P){N(P,O);return}else{console.log("[socket] Scheduling retry in 100ms");setTimeout(K,100)}},L)};console.log("[socket] Trying socket probe with ",J," retries");K()};console.log("[socket] Starting probe with 4 retries");G(500,4,function(K,J){if(K){console.log("[socket] Got socket");C(J)}else{if(B){console.log("[socket] Auto-launching");var L=document.createElement("iframe");L.src=h;L.style.visibility="hidden";L.style.width="0";L.style.height="0";L.style.position="absolute";L.style.left="-1000px";document.body.appendChild(L);D(E,5000)}else{F()}}})};var v=null;var b=s.UserInteraction=function(A){var B=this;this.socket=A;this.onResize=null;window.addEventListener("resize",function(){if(B.onResize){B.onResize()}})};b.hideScreen=function(B){try{document.body.removeChild(B)}catch(A){}};b.hideInteraction=function(){if(b.activeScreen!=null){try{document.body.removeChild(b.activeScreen)}catch(A){}b.activeScreen=null}};b.createButton=function(D,E){var B=document.createElement("button");B.innerHTML=D;B.style.display="inline-block";B.style.marginBottom="0";B.style.textAlign="center";B.style.verticalAlign="middle";B.style.borderStyle="solid";B.style.borderWidth="1px";B.style.borderRadius=B.style.webkitBorderRadius=B.style.mozBorderRadius="4px";B.style.userSelect=B.style.webkitUserSelect=B.style.mozUserSelect=B.style.msUserSelect="none";B.style.margin="5px";B.style.padding="6px 12px";B.style.cursor="pointer";var A=function(F,K){var H=parseInt(F.slice(1),16),M=Math.round(2.55*K),J=(H>>16)+M,I=(H>>8&255)+M,L=(H&255)+M;return"#"+(16777216+(J<255?J<1?0:J:255)*65536+(I<255?I<1?0:I:255)*256+(L<255?L<1?0:L:255)).toString(16).slice(1)},C=function(J){var G=parseInt(J.slice(1),16),I=(G>>16),H=(G>>8&255),F=(G&255),K=(I*299+H*587+F*114)/1000;return(K>=128)?"black":"white"};B.style.backgroundColor=E;B.style.borderColor=A(E,-20);B.onmouseover=function(){B.style.backgroundColor=A(E,-10)};B.onmouseout=function(){B.style.backgroundColor=E};B.style.color=C(E);return B};b.createFramedWindow=function(C){if(!C){C={}}var F=C.body||"",E=C.header||false,O=C.footer||false,M=C.icon||false,H=C.onClose||false,L=(C.disposable!=undefined)?C.disposable:true;var K=document.createElement("div"),J=document.createElement("div"),B=document.createElement("div"),G=document.createElement("div"),D=document.createElement("div");K.style.position="absolute";K.style.left="0";K.style.top="0";K.style.right="0";K.style.bottom="0";K.style.zIndex=60000;K.style.backgroundColor="rgba(255,255,255,0.5)";K.appendChild(J);J.style.marginLeft="auto";J.style.marginRight="auto";J.style.marginBottom=0;J.style.marginTop=0;J.style.backgroundColor="#FCFCFC";J.style.border="solid 1px #E6E6E6";J.style.borderRadius=J.style.webkitBorderRadius=J.style.mozBorderRadius="5px";J.style.boxShadow=J.style.webkitBoxShadow=J.style.mozBoxShadow="1px 2px 4px 1px rgba(0,0,0,0.2)";J.style.padding="10px";J.style.fontFamily="Verdana, Geneva, sans-serif";J.style.fontSize="14px";J.style.color="#666;";J.style.width="70%";B.style.color="#333";B.style.marginBottom="8px";G.style.textAlign="center";G.style.color="#333";G.style.marginTop="8px";J.appendChild(B);if(E){if(typeof(E)=="string"){var I;if(M){I=document.createElement("img");I.src=M;I.style.verticalAlign="-8px";I.style.marginRight="6px"}else{I=document.createElement("span")}var A=document.createElement("span");A.innerHTML=E;A.style.fontSize="1.6em";A.style.marginBottom="8px";B.appendChild(I);B.appendChild(A)}else{B.appendChild(E)}}if(F){D.style.overflow="auto";D.appendChild(F)}J.appendChild(D);J.appendChild(G);if(O){if(typeof(O)=="string"){G.innerHTML=O}else{G.appendChild(O)}}var N=function(){var P=B.offsetHeight+G.offsetHeight+50;var R=window.innerHeight-P;D.style.maxHeight=R+"px";var Q=(window.innerHeight-J.offsetHeight)/2;if(Q<0){Q=0}J.style.marginTop=Q+"px"};K.onclick=function(){if(!L){return}if(H){H()}else{b.hideInteraction()}};J.onclick=function(P){P.stopPropagation()};b.hideInteraction();document.body.appendChild(K);b.activeScreen=K;N();this.onResize=N;return K};b.displayLicenseWindow=function(I,F,D,H,C){var E=document.createElement("div"),J=document.createElement("span"),B;J.innerHTML="&nbsp;";if(D){B=document.createElement("iframe"),B.src=F;B.width="100%";B.height=450;B.frameBorder=0}else{B=document.createElement("div");B.width="100%";B.style.height="450px";B.style.display="block";B.innerHTML=F.replace(/\n/g,"<br/>\n")}var A=b.createButton("Accept License","#E1E1E1");lnkCancel=b.createButton("Decline License","#FAFAFA");E.style.padding="6px";E.appendChild(A);E.appendChild(J);E.appendChild(lnkCancel);var G;G=b.createFramedWindow({body:B,header:I,footer:E,icon:u,onClose:function(){document.body.removeChild(G);if(C){C()}}});A.onclick=function(){document.body.removeChild(G);if(H){H()}};lnkCancel.onclick=function(){document.body.removeChild(G);if(C){C()}};return win};b.confirm=function(F,A,H){var E=document.createElement("div"),G=document.createElement("div");E.innerHTML=A;E.style.width="100%";var D,C=b.createButton("Ok","#E1E1E1"),B=b.createButton("Cancel","#FAFAFA");C.onclick=function(){document.body.removeChild(D);H(true)};B.onclick=function(){document.body.removeChild(D);H(false)};G.appendChild(C);G.appendChild(B);D=b.createFramedWindow({body:E,header:F,footer:G,icon:d,onClose:function(){document.body.removeChild(D);H(false)}});return D};b.alert=function(E,A,G){var D=document.createElement("div"),F=document.createElement("div");D.innerHTML=A;D.style.width="100%";var C,B=b.createButton("Ok","#FAFAFA");B.onclick=function(){document.body.removeChild(C)};F.appendChild(B);C=b.createFramedWindow({body:D,header:E,footer:F,icon:i});return C};b.occupied=function(D,A){var C=document.createElement("div");C.innerHTML=A;C.style.width="100%";var B=b.createFramedWindow({body:C,header:D,icon:l,disposable:false});return B};b.confirmLicense=function(B,A,C){b.displayLicenseWindow(B,A,false,function(){C(true)},function(){C(false)})};b.confirmLicenseURL=function(B,A,C){b.displayLicenseWindow(B,A,true,function(){C(true)},function(){C(false)})};b.controlOccupied=function(A,B){if(A){if(!v){v=b.occupied("Installation in progress","<p>Pay attention on the the pop-up windows and follow the on-screen instructions.</p><p>When completed, please close any open installation window in order to continue.</p>")}}else{if(v){b.hideScreen(v);v=null}}};b.prototype.handleInteractionEvent=function(B){var A=this.socket;if(B[0]=="confirm"){b.confirm(B[1],B[2],function(C,D){if(C){A.send("interactionCallback",{result:e|(D?z:0)})}else{A.send("interactionCallback",{result:y|(D?z:0)})}})}else{if(B[0]=="alert"){b.alert(B[1],B[2],function(C){})}else{if(B[0]=="confirmLicense"){b.confirmLicense(B[1],B[2],function(C,D){if(C){A.send("interactionCallback",{result:e|(D?z:0)})}else{A.send("interactionCallback",{result:y|(D?z:0)})}})}else{if(B[0]=="confirmLicenseURL"){b.confirmLicenseURL(B[1],B[2],function(C,D){if(C){A.send("interactionCallback",{result:e|(D?z:0)})}else{A.send("interactionCallback",{result:y|(D?z:0)})}})}}}}};s.WebAPIPlugin=function(){s.Socket.call(this)};s.WebAPIPlugin.prototype=Object.create(s.Socket.prototype);s.WebAPIPlugin.prototype.stopService=function(){this.send("stopService")};s.WebAPIPlugin.prototype.requestSession=function(D,C,B){var A=this;this.send("requestSession",{vmcp:D},{onSucceed:function(G,E){var F=new s.WebAPISession(A,E,function(){if(C){C(F)}});A.responseCallbacks[E]=function(H){F.handleEvent(H)}},onFailed:function(F,E){console.error("Failed to request session! "+F);A.__fire("failed",[F]);if(B){B(F,E)}},onLengthyTask:function(F,E){s.UserInteraction.controlOccupied(E,F)},onProgress:function(F,E){A.__fire("progress",[F,E])},onStarted:function(E){A.__fire("started",[E])},onCompleted:function(E){A.__fire("completed",[E])}})};s.WebAPIPlugin.prototype.enumSessions=function(B){var A=this;if(!B){return}this.send("enumSessions",{},{onSucceed:function(C){B(C)},onFailed:function(D,C){B(null,D,C)}})};s.WebAPIPlugin.prototype.controlSession=function(B,C,D){var A=this;if(!D){return}this.send("controlSession",{session_id:B,action:C},{onSucceed:function(E){D(E)},onFailed:function(F,E){D(null,F,E)}})};s.WebAPISession=function(A,C,D){s.EventDispatcher.call(this);this.socket=A;this.session_id=C;this.__state=0;this.__apiState=false;this.__properties={};this.__config={};this.__valid=true;this.__lastRDPWindow=null;this.__initCallback=D;var B=undefined;Object.defineProperties(this,{state:{get:function(){if(!this.__valid){return B}return this.__state}},stateName:{get:function(){if(!this.__valid){return B}return x(this.__state)}},ip:{get:function(){if(!this.__valid){return B}return this.__config.ip}},memory:{get:function(){if(!this.__valid){return B}return this.__config.memory}},cpus:{get:function(){if(!this.__valid){return B}return this.__config.cpus}},disk:{get:function(){if(!this.__valid){return B}return this.__config.disk}},apiURL:{get:function(){if(!this.__valid){return B}return this.__config.apiURL}},apiAvailable:{get:function(){if(!this.__valid){return B}return this.__apiState}},rdpURL:{get:function(){if(!this.__valid){return B}return this.__config.rdpURL}},executionCap:{get:function(){if(!this.__valid){return B}return this.__config.executionCap},set:function(E){this.__config.executionCap=E;this.setAsync("executionCap",E)}},version:{get:function(){if(!this.__valid){return B}return this.__config.cernvmVersion},set:function(E){if(!this.__valid){return}this.__config.cernvmVersion=E;this.setAsync("cernvmVersion",E)}},"flavor ":{get:function(){if(!this.__valid){return B}return this.__config.cernvmFlavor},set:function(E){if(!this.__valid){return}this.__config.cernvmFlavor=E;this.setAsync("cernvmFlavor",E)}},diskURL:{get:function(){if(!this.__valid){return B}return this.__config.diskURL},set:function(E){if(!this.__valid){return}this.__config.diskURL=E;this.setAsync("diskURL",E)}},diskChecksum:{get:function(){if(!this.__valid){return B}return this.__config.diskChecksum},set:function(E){if(!this.__valid){return}this.__config.diskChecksum=E;this.setAsync("diskChecksum",E)}},flags:{get:function(){if(!this.__valid){return B}return new q(this)},set:function(E){if(typeof(E)=="number"){this.__config.flags=E}else{if(typeof(E)=="object"){this.__config.flags=r(E)}}}}})};s.WebAPISession.prototype=Object.create(s.EventDispatcher.prototype);s.WebAPISession.prototype.handleEvent=function(B){if(B.name=="stateVariables"){B=B.data;if(!B){return}else{if(B.length>=1){this.__config=B[0]||{}}if(B.length>=2){this.__properties=B[1]||{}}}if(this.__initCallback){this.__initCallback();this.__initCallback=null}return}else{if(B.name=="failure"){var A=B.data[0];if(A&o!=0){s.UserInteraction.alert("Virtualization Failure",'<p>The hypervisor was unable to use your hardware\'s virtualization capabilities. This happens either if you have an old hardware (more than 4 years old) or if the <strong>Virtualization Technology</strong> features is disabled from your <strong>BIOS</strong>.</p><p>There are various articles on the internet on how to enable this option from your BIOS. <a target="_blank" href="http://www.sysprobs.com/disable-enable-virtualization-technology-bios">You can read this article for example.</a></p>')}}else{if(B.name=="stateChanged"){this.__state=B.data[0]}else{if(B.name=="lengthyTask"){s.UserInteraction.controlOccupied(B.data[1],B.data[0])}else{if(B.name=="apiStateChanged"){this.__apiState=(B.data[0]==1)}else{if(B.name=="resolutionChanged"){if(this.__config.rdpURL!=undefined){var D=this.__config.rdpURL.split("@");this.__config.rdpURL=D[0]+"@"+B.data[0]+"x"+B.data[1]+"x"+B.data[2];if(this.__lastRDPWindow){try{this.__lastRDPWindow.resizeTo(parseInt(B.data[0]),parseInt(B.data[1]))}catch(C){}}}}}}}}}this.__fire(B.name,B.data)};s.WebAPISession.prototype.start=function(A){this.socket.send("start",{session_id:this.session_id,parameters:A||{}})};s.WebAPISession.prototype.stop=function(){this.socket.send("stop",{session_id:this.session_id})};s.WebAPISession.prototype.pause=function(){this.socket.send("pause",{session_id:this.session_id})};s.WebAPISession.prototype.resume=function(){this.socket.send("resume",{session_id:this.session_id})};s.WebAPISession.prototype.reset=function(){this.socket.send("reset",{session_id:this.session_id})};s.WebAPISession.prototype.hibernate=function(){this.socket.send("hibernate",{session_id:this.session_id})};s.WebAPISession.prototype.close=function(){this.socket.send("close",{session_id:this.session_id})};s.WebAPISession.prototype.getAsync=function(B,A){this.socket.send("get",{session_id:this.session_id,key:B},{onSucceed:function(C){if(A){A(C)}}})};s.WebAPISession.prototype.setAsync=function(C,B,A){this.socket.send("set",{session_id:this.session_id,key:C,value:B},{onSucceed:function(){if(A){A()}}})};s.WebAPISession.prototype.getProperty=function(A){if(!A){return""}if(this.__properties[A]==undefined){return""}return this.__properties[A]};s.WebAPISession.prototype.setProperty=function(A,B){if(!A){return""}this.__properties[A]=B;this.socket.send("setProperty",{session_id:this.session_id,key:A,value:B})};s.WebAPISession.prototype.openRDPWindow=function(D,A){var B=this;if(this.__config.rdpURL){var C=this.__config.rdpURL.split("@");this.__lastRDPWindow=s.launchRDP(C[0],C[1])}else{this.getAsync("rdpURL",function(F){var E=F.split("@");B.__lastRDPWindow=s.launchRDP(E[0],E[1])})}};if(window.jQuery==undefined){if(j){return}window.addEventListener("load",function(B){j=true;for(var A=0;A<n.length;A++){n[A]()}})}else{jQuery(function(){if(j){return}j=true;for(var A=0;A<n.length;A++){n[A]()}})}})(window.CVM);