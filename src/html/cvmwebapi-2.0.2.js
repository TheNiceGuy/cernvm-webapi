window.CVM={version:"2.0.2"};(function(aa){var ab="data:image/gif;base64,R0lGODlhIAAgALMAAGZmZnl5eczMzJ+fn////7Ozs4yMjGtra+Li4nFxcaampgAAAAAAAAAAAAAAAAAAACH5BAEHAAQALAAAAAAgACAAAASjkMhJq704681JKV04JYkYDgAwmBuSpgibGS9gyJdQpwJeBTtAwDcpBFMgYuJ1WKZKPlRqSACmVjLXK2l8xVi0raSbupl0Ne6uJ7K+zOEXtUOWS9zijrNGxT87UjtURyothAASh18YcUGJhGY5hzZ7R2wWfpNHcxR1lmiHSRSVQQoSCpNQE4GQEo1HWARamgcHmjCut7pvBKC7ugKZv4ecRMYsEQA7";var af="data:image/gif;base64,R0lGODlhIAAgAMQAAGZmZnt7e8TExK2treXl5dXV1Wtra4qKivj4+L29vd7e3pGRke/v78zMzLW1tYSEhHR0dJmZmQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEHAAgALAAAAAAgACAAAAXUICKOZGmeKMoUguMIBZPOY3IAeI4fCX0KEJ0wBxH4RouhMrfwEQLLKCBAmEGl0UAqmRUQBsumSYBtjG5KYykoVYwiS0gpgQUsZAVp71zHsaMHIwx9hAAyCHmACQoEDn9RBSJkSweMI5NSag51VSJ1DiKbWJ0In5JYBiOJmSKrYSNgWJEIg3ojV1KHCGhLnbVSgTVRciINdXsjjzpaxVjEJJhDbiIKCrhCaiVcQwEJBAoJD68o14VTM0/mOFQ+231iR0B1RUdzvEI89SosLjC6+gBnhAAAOw==";var N="data:image/gif;base64,R0lGODlhIAAgALMAAGZmZpOTk93d3Wtra8zMzLW1tXNzc3p6eu/v78XFxYODg9bW1qWlpejo6Pj4+IqKiiH5BAEHAA4ALAAAAAAgACAAAATr0MlJq7046827p4QBGMTHicBoVohApTAlIN4yjE1TwGmRH4DBooMa3XipQXFA0wiQ0ChguAHyFCUJQYE8dBqogY8BPDB0R0Pje0zYkMJEcs3ZAQKII7zx6GlCPAsMKQcuC1YMBDwkF0UpDih0DgspBghIBhdQDjcDEgEOl0EOmxaOAJApLlqVojCZFoeBgwAHQ4AAiTy2GnZ4p619AAUdeSlupwYLckFNG2BJBQgMIgYMCAVpkhpWMFg0CFuYHE9S5lMnr3o8SjBM5DcHDdhI0g1AQh+rEkgyziupKgHMsKAalYEIEypcyHBDBAA7";var J="data:image/gif;base64,R0lGODlhIAAgANUAAPX19fT09PLy8vDw8O7u7uzs7OLi4tnZ2c/Pz83NzczMzMXFxby8vLKysqmpqZ+fn5iYmJWVlZKSkoyMjICAgHx8fHl5eXZ2dnR0dHBwcG9vb21tbWtra2pqamhoaGdnZ2ZmZkxMTEpKSv///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEHACMALAAAAAAgACAAAAauwJFwSCwaj8ikcln5OJ/QqFRKnFqv0OpnyR05tV3mdvgNC87GslCtFbnf7/R4PTfLwfYjm41I+P+AgYB7cyAZG4iJiouIdHh5RYSQd2R1Sg0RDwwAkXV8R5iGoguPXpZGDKKqIAeVpXqrqq6zSbGyjrSgtqO4vbq7rL5Ylbumhm0eycoSQ6GxfYqQD8+TqNMTDgXV23nY0A3cyMHhdBqG4OSmBgvj5BEGQgvo6WFBADs=";var P=null,H=false,K=[];aa.debugLogging=true;aa.version="1.0";aa.markPageLoaded=function(){H=true};aa.launchRDP=function(ao,al){var an=800,ai=600,am=24;if(al!=undefined){var ak=al.split("x");an=parseInt(ak[0]);ai=parseInt(ak[1]);if(ak.length>2){am=parseInt(ak[2])}}var aj=window.open("http://cernvm.cern.ch/releases/webapi/webrdp/webclient.html#"+ao+","+an+","+ai,"WebRDPClient","width="+an+",height="+(ai+60));aj.moveTo((screen.width-an)/2,(screen.height-(ai+60))/2);setTimeout(function(){aj.focus()},100);aj.focus();return aj};aa.startCVMWebAPI=function(al,ak,ai){var aj=function(){var am=new aa.WebAPIPlugin();am.connect(function(an){if(an){al(am)}else{var ao=document.createElement("iframe");ao.src="http://labs.wavesoft.gr/webapi/install";ao.width="100%";ao.height=400;ao.frameBorder=0;v.createFramedWindow({body:ao,icon:N,disposable:false});var ap=function(){am=new aa.WebAPIPlugin();am.connect(function(aq){if(aq){al(am);v.hideInteraction()}else{setTimeout(function(){ap()},1000)}},false)};ap()}})};if(!H){K.push(aj)}else{aj()}};var l=0;var S=1;var ag=2;var o=1;var s=0;var c=-1;var n=-2;var ad=-3;var e=-4;var b=-5;var O=-6;var q=-7;var y=-8;var A=-9;var M=-10;var h=-11;var k=-12;var t=-13;var Q=-99;var m=-100;var L=0;var d=1;var R=2;var z=3;var B=4;var T=5;var Y=6;var ac=1;var x=2;var ae=4;var p=8;var V=16;var W=1;var F=0,I=1,r=2,w=3,G=4,a=function(ai){return["missing","available","poweroff","saved","paused"][ai]};var u=1;var X=2;function E(ai){if(ai==L){return"Closed"}if(ai==d){return"Oppening"}if(ai==R){return"Open"}if(ai==z){return"Starting"}if(ai==B){return"Started"}if(ai==T){return"Error"}if(ai==Y){return"Paused"}return"Unknown state "+ai}function D(ai){if(ai==ag){return"Already exists"}if(ai==o){return"Scheduled"}if(ai==s){return"No error"}if(ai==c){return"Creation Error"}if(ai==n){return"Modification Error"}if(ai==ad){return"Control Error"}if(ai==e){return"Deletion Error"}if(ai==b){return"Query Error"}if(ai==O){return"I/O Error"}if(ai==q){return"Server/Library Error"}if(ai==y){return"Invalid state for such action"}if(ai==A){return"The requested resource was not found"}if(ai==M){return"Access denied"}if(ai==h){return"The requested action is not supported"}if(ai==k){return"Unable to validate the resource"}if(ai==t){return"The domain is not trusted"}if(ai==Q){return"Usage error"}if(ai==m){return"The requested functionality is not implemented"}return"Unknown error #"+ai}aa.EventDispatcher=function(ai){this.events={}};aa.EventDispatcher.prototype.__fire=function(aj,ai){if(aa.debugLogging){console.log("Firing",aj,"(",ai,")")}if(this.events[aj]==undefined){return}var al=this.events[aj];for(var ak=0;ak<al.length;ak++){al[ak].apply(this,ai)}};aa.EventDispatcher.prototype.addEventListener=function(ai,aj){if(this.events[ai]==undefined){this.events[ai]=[]}this.events[ai].push(aj)};aa.EventDispatcher.prototype.removeEventListener=function(ai,ak){if(this.events[ai]==undefined){return}var aj=this.events[ai].indexOf(ak);if(aj<0){return}this.events.splice(aj,1)};var ac=1;var x=2;var ae=4;var p=8;var ah=function(aj){var ai=0;if(aj.use64bit){ai|=ac}if(aj.useBootDisk){ai|=x}if(aj.useGuestAdditions){ai|=ae}if(aj.useFloppyIO){ai|=p}if(aj.HVF_HEADFUL){ai|=V}return ai};var f=function(ak){var ai=function(al){ak.__config.flags=al;ak.setAsync("flags",al)},aj=function(){return ak.__config.flags};Object.defineProperties(this,{value:{get:function(){return aj()},set:function(al){ai(al)}},use64bit:{get:function(){return((aj()&ac)!=0)},set:function(al){if(al){ai(aj()|ac)}else{ai(aj()&~ac)}}},useBootDisk:{get:function(){return((aj()&x)!=0)},set:function(al){if(al){ai(aj()|x)}else{ai(aj()&~x)}}},useGuestAdditions:{get:function(){return((aj()&ae)!=0)},set:function(al){if(al){ai(aj()|ae)}else{ai(aj()&~ae)}}},useFloppyIO:{get:function(){return((aj()&p)!=0)},set:function(al){if(al){ai(aj()|p)}else{ai(aj()&~p)}}},headful:{get:function(){return((aj()&V)!=0)},set:function(al){if(al){ai(aj()|V)}else{ai(aj()&~V)}}}})};aa.ProgressFeedback=function(){};var g="ws://127.0.0.1:5624",U="cernvm-webapi:";aa.Socket=function(){aa.EventDispatcher.call(this);this.interaction=new v(this);this.connecting=false;this.connected=false;this.socket=null;this.lastID=0;this.responseCallbacks={};this.authToken="";if(window.location.hash){this.authToken=window.location.hash.substr(1)}};aa.Socket.prototype=Object.create(aa.EventDispatcher.prototype);aa.Socket.prototype.__handleClose=function(){this.__fire("disconnected",[]);v.hideInteraction()};aa.Socket.prototype.__handleOpen=function(ai){this.__fire("connected",ai.version)};aa.Socket.prototype.__handleData=function(aj){var ak=JSON.parse(aj);if(ak.id){var ai=this.responseCallbacks[ak.id];if(ai!=undefined){ai(ak)}}else{if(ak.type=="event"){var aj=ak.data;if(ak.name=="interact"){this.interaction.handleInteractionEvent(ak.data)}else{this.__fire(ak.name,ak.data)}}}};aa.Socket.prototype.send=function(ak,al,an,am){var ap=this;var aq="a-"+(++this.lastID);var ai={type:"action",name:ak,id:aq,data:al||{}};if(an){var ao=null,aj=function(ar){if(!ar){return""}return"on"+ar[0].toUpperCase()+ar.substr(1)};if(am!==0){ao=setTimeout(function(){delete ap.responseCallbacks[aq];if(an.onError){an.onError("Response timeout")}},am||10000)}this.responseCallbacks[aq]=function(at){if(ao!=null){clearTimeout(ao)}if((at.name=="succeed")||(at.name=="failed")){delete ap.responseCallbacks[aq]}var ar=aj(at.name);if(an[ar]){an[ar].apply(ap,at.data||[])}}}this.socket.send(JSON.stringify(ai))};aa.Socket.prototype.close=function(){if(!this.connected){return}this.socket.close();this.connected=false;this.__handleClose()};aa.Socket.prototype.connect=function(am,ai){var al=this;if(this.connected){return}if(ai==undefined){ai=true}if(this.connecting){return}this.connecting=true;var ap=function(aq,au){try{if(!au){au=100}var at=false,aw=setTimeout(function(){at=true;aq(false)},au);var ar=new WebSocket(g);ar.onerror=function(ax){if(at){return}clearTimeout(aw);if(!al.connecting){return}aq(false)};ar.onopen=function(ax){if(at){return}clearTimeout(aw);if(!al.connecting){return}aq(true,ar)}}catch(av){console.warn("[socket] Error setting up socket! ",av);if(at){return}aq(false)}};var ak=function(av,ax,aA,ar){var at=new Date().getTime();if(!ar){ar=at}if(!aA){aA=500}var aq=ax-(at-ar);var au=false,ay=setTimeout(function(){au=true;av(false)},aq);var az=function(aC,aB){if(au){return}if(aC){clearTimeout(ay);av(true,aB)}else{if(aq<aA){return}clearTimeout(ay);setTimeout(function(){ak(av,ax,aA,ar)},aA)}};var aw=100;if(aq<aw){aw=aq}ap(az,aw)};var aj=function(aq){al.connecting=false;al.connected=true;al.socket=aq;al.socket.onclose=function(){console.warn("Remotely disconnected from CernVM WebAPI");al.__handleClose()};al.socket.onmessage=function(ar){al.__handleData(ar.data)};al.send("handshake",{version:aa.version,auth:al.authToken},function(au,at,ar){console.info("Successfuly contacted with CernVM WebAPI v"+au.version);al.__handleOpen(au)});if(am){am(true)}};var ao=function(aq){console.error("Unable to contact CernVM WebAPI");if(!al.connecting){return}al.connecting=false;al.connected=false;if(am){am(false)}};var an=function(ar,aq){if(!ar){ao()}else{aj(aq)}};ap(function(ar,aq){if(ar){aj(aq)}else{if(ai){var at=document.createElement("iframe");at.src=U+"//launch";at.style.display="none";document.body.appendChild(at);ak(an,5000)}else{ao()}}})};var i=1,Z=2,C=256;var j=null;var v=aa.UserInteraction=function(ai){var aj=this;this.socket=ai;this.onResize=null;window.addEventListener("resize",function(){if(aj.onResize){aj.onResize()}})};v.hideScreen=function(aj){try{document.body.removeChild(aj)}catch(ai){}};v.hideInteraction=function(){if(v.activeScreen!=null){try{document.body.removeChild(v.activeScreen)}catch(ai){}v.activeScreen=null}};v.createButton=function(al,am){var aj=document.createElement("button");aj.innerHTML=al;aj.style.display="inline-block";aj.style.marginBottom="0";aj.style.textAlign="center";aj.style.verticalAlign="middle";aj.style.borderStyle="solid";aj.style.borderWidth="1px";aj.style.borderRadius=aj.style.webkitBorderRadius=aj.style.mozBorderRadius="4px";aj.style.userSelect=aj.style.webkitUserSelect=aj.style.mozUserSelect=aj.style.msUserSelect="none";aj.style.margin="5px";aj.style.padding="6px 12px";aj.style.cursor="pointer";var ai=function(an,ar){var ao=parseInt(an.slice(1),16),au=Math.round(2.55*ar),aq=(ao>>16)+au,ap=(ao>>8&255)+au,at=(ao&255)+au;return"#"+(16777216+(aq<255?aq<1?0:aq:255)*65536+(ap<255?ap<1?0:ap:255)*256+(at<255?at<1?0:at:255)).toString(16).slice(1)},ak=function(ar){var ao=parseInt(ar.slice(1),16),aq=(ao>>16),ap=(ao>>8&255),an=(ao&255),at=(aq*299+ap*587+an*114)/1000;return(at>=128)?"black":"white"};aj.style.backgroundColor=am;aj.style.borderColor=ai(am,-20);aj.onmouseover=function(){aj.style.backgroundColor=ai(am,-10)};aj.onmouseout=function(){aj.style.backgroundColor=am};aj.style.color=ak(am);return aj};v.createFramedWindow=function(ak){if(!ak){ak={}}var an=ak.body||"",am=ak.header||false,ax=ak.footer||false,av=ak.icon||false,ap=ak.onClose||false,au=(ak.disposable!=undefined)?ak.disposable:true;var at=document.createElement("div"),ar=document.createElement("div"),aj=document.createElement("div"),ao=document.createElement("div"),al=document.createElement("div");at.style.position="absolute";at.style.left="0";at.style.top="0";at.style.right="0";at.style.bottom="0";at.style.zIndex=60000;at.style.backgroundColor="rgba(255,255,255,0.5)";at.appendChild(ar);ar.style.marginLeft="auto";ar.style.marginRight="auto";ar.style.marginBottom=0;ar.style.marginTop=0;ar.style.backgroundColor="#FCFCFC";ar.style.border="solid 1px #E6E6E6";ar.style.borderRadius=ar.style.webkitBorderRadius=ar.style.mozBorderRadius="5px";ar.style.boxShadow=ar.style.webkitBoxShadow=ar.style.mozBoxShadow="1px 2px 4px 1px rgba(0,0,0,0.2)";ar.style.padding="10px";ar.style.fontFamily="Verdana, Geneva, sans-serif";ar.style.fontSize="14px";ar.style.color="#666;";ar.style.width="70%";aj.style.color="#333";aj.style.marginBottom="8px";ao.style.textAlign="center";ao.style.color="#333";ao.style.marginTop="8px";ar.appendChild(aj);if(am){if(typeof(am)=="string"){var aq;if(av){aq=document.createElement("img");aq.src=av;aq.style.verticalAlign="-8px";aq.style.marginRight="6px"}else{aq=document.createElement("span")}var ai=document.createElement("span");ai.innerHTML=am;ai.style.fontSize="1.6em";ai.style.marginBottom="8px";aj.appendChild(aq);aj.appendChild(ai)}else{aj.appendChild(am)}}if(an){al.style.overflow="auto";al.appendChild(an)}ar.appendChild(al);ar.appendChild(ao);if(ax){if(typeof(ax)=="string"){ao.innerHTML=ax}else{ao.appendChild(ax)}}var aw=function(){var ay=aj.offsetHeight+ao.offsetHeight+50;var aA=window.innerHeight-ay;al.style.maxHeight=aA+"px";var az=(window.innerHeight-ar.offsetHeight)/2;if(az<0){az=0}ar.style.marginTop=az+"px"};at.onclick=function(){if(!au){return}if(ap){ap()}else{v.hideInteraction()}};ar.onclick=function(ay){ay.stopPropagation()};v.hideInteraction();document.body.appendChild(at);v.activeScreen=at;aw();this.onResize=aw;return at};v.displayLicenseWindow=function(aq,an,al,ap,ak){var am=document.createElement("div"),ar=document.createElement("span"),aj;ar.innerHTML="&nbsp;";if(al){aj=document.createElement("iframe"),aj.src=an;aj.width="100%";aj.height=450;aj.frameBorder=0}else{an=an.replace(/\n/g,"<br />\n");aj=document.createElement("div");aj.width="100%";aj.style.height="450px";aj.style.display="block";aj.innerHTML=an}var ai=v.createButton("Accept License","#E1E1E1");lnkCancel=v.createButton("Decline License","#FAFAFA");am.style.padding="6px";am.appendChild(ai);am.appendChild(ar);am.appendChild(lnkCancel);var ao;ao=v.createFramedWindow({body:aj,header:aq,footer:am,icon:J,onClose:function(){document.body.removeChild(ao);if(ak){ak()}}});ai.onclick=function(){document.body.removeChild(ao);if(ap){ap()}};lnkCancel.onclick=function(){document.body.removeChild(ao);if(ak){ak()}};return win};v.confirm=function(an,ai,ap){var am=document.createElement("div"),ao=document.createElement("div");am.innerHTML=ai;am.style.width="100%";var al,ak=v.createButton("Ok","#E1E1E1"),aj=v.createButton("Cancel","#FAFAFA");ak.onclick=function(){document.body.removeChild(al);ap(true)};aj.onclick=function(){document.body.removeChild(al);ap(false)};ao.appendChild(ak);ao.appendChild(aj);al=v.createFramedWindow({body:am,header:an,footer:ao,icon:af,onClose:function(){document.body.removeChild(al);ap(false)}});return al};v.alert=function(am,ai,ao){var al=document.createElement("div"),an=document.createElement("div");al.innerHTML=ai;al.style.width="100%";var ak,aj=v.createButton("Ok","#FAFAFA");aj.onclick=function(){document.body.removeChild(ak)};an.appendChild(aj);ak=v.createFramedWindow({body:al,header:am,footer:an,icon:ab});return ak};v.occupied=function(al,ai){var ak=document.createElement("div");ak.innerHTML=ai;ak.style.width="100%";var aj=v.createFramedWindow({body:ak,header:al,icon:N,disposable:false});return aj};v.confirmLicense=function(aj,ai,ak){v.displayLicenseWindow(aj,ai,false,function(){ak(true)},function(){ak(false)})};v.confirmLicenseURL=function(aj,ai,ak){v.displayLicenseWindow(aj,ai,true,function(){ak(true)},function(){ak(false)})};v.controlOccupied=function(ai,aj){if(ai){if(!j){j=v.occupied("Installation in progress","<p>Pay attention on the the pop-up windows and follow the on-screen instructions.</p><p>When completed, please close any open installation window in order to continue.</p>")}}else{if(j){v.hideScreen(j);j=null}}};v.prototype.handleInteractionEvent=function(aj){var ai=this.socket;if(aj[0]=="confirm"){v.confirm(aj[1],aj[2],function(ak,al){if(ak){ai.send("interactionCallback",{result:i|(al?C:0)})}else{ai.send("interactionCallback",{result:Z|(al?C:0)})}})}else{if(aj[0]=="alert"){v.alert(aj[1],aj[2],function(ak){})}else{if(aj[0]=="confirmLicense"){v.confirmLicense(aj[1],aj[2],function(ak,al){if(ak){ai.send("interactionCallback",{result:i|(al?C:0)})}else{ai.send("interactionCallback",{result:Z|(al?C:0)})}})}else{if(aj[0]=="confirmLicenseURL"){v.confirmLicenseURL(aj[1],aj[2],function(ak,al){if(ak){ai.send("interactionCallback",{result:i|(al?C:0)})}else{ai.send("interactionCallback",{result:Z|(al?C:0)})}})}}}}};aa.WebAPIPlugin=function(){aa.Socket.call(this)};aa.WebAPIPlugin.prototype=Object.create(aa.Socket.prototype);aa.WebAPIPlugin.prototype.stopService=function(){this.send("stopService")};aa.WebAPIPlugin.prototype.requestSession=function(al,ak,aj){var ai=this;this.send("requestSession",{vmcp:al},{onSucceed:function(ao,am){var an=new aa.WebAPISession(ai,am,function(){if(ak){ak(an)}});ai.responseCallbacks[am]=function(ap){an.handleEvent(ap)}},onFailed:function(an,am){console.error("Failed to request session! "+an);ai.__fire("failed",[an]);if(aj){aj(an,am)}},onLengthyTask:function(an,am){aa.UserInteraction.controlOccupied(am,an)},onProgress:function(an,am){ai.__fire("progress",[an,am])},onStarted:function(am){ai.__fire("started",[am])},onCompleted:function(am){ai.__fire("completed",[am])}})};function a(aj){var ai=["missing","available","poweroff","saved","paused","running"];if((aj<0)||(aj>=ai.length)){return"unknown"}return ai[aj]}aa.WebAPISession=function(ai,ak,al){aa.EventDispatcher.call(this);this.socket=ai;this.session_id=ak;this.__state=0;this.__apiState=false;this.__properties={};this.__config={};this.__valid=true;this.__lastRDPWindow=null;this.__initCallback=al;var aj=undefined;Object.defineProperties(this,{state:{get:function(){if(!this.__valid){return aj}return this.__state}},stateName:{get:function(){if(!this.__valid){return aj}return a(this.__state)}},ip:{get:function(){if(!this.__valid){return aj}return this.__config.ip}},memory:{get:function(){if(!this.__valid){return aj}return this.__config.memory}},cpus:{get:function(){if(!this.__valid){return aj}return this.__config.cpus}},disk:{get:function(){if(!this.__valid){return aj}return this.__config.disk}},apiURL:{get:function(){if(!this.__valid){return aj}return this.__config.apiURL}},apiAvailable:{get:function(){if(!this.__valid){return aj}return this.__apiState}},rdpURL:{get:function(){if(!this.__valid){return aj}return this.__config.rdpURL}},executionCap:{get:function(){if(!this.__valid){return aj}return this.__config.executionCap},set:function(am){this.__config.executionCap=am;this.setAsync("executionCap",am)}},version:{get:function(){if(!this.__valid){return aj}return this.__config.cernvmVersion},set:function(am){if(!this.__valid){return}this.__config.cernvmVersion=am;this.setAsync("cernvmVersion",am)}},"flavor ":{get:function(){if(!this.__valid){return aj}return this.__config.cernvmFlavor},set:function(am){if(!this.__valid){return}this.__config.cernvmFlavor=am;this.setAsync("cernvmFlavor",am)}},diskURL:{get:function(){if(!this.__valid){return aj}return this.__config.diskURL},set:function(am){if(!this.__valid){return}this.__config.diskURL=am;this.setAsync("diskURL",am)}},diskChecksum:{get:function(){if(!this.__valid){return aj}return this.__config.diskChecksum},set:function(am){if(!this.__valid){return}this.__config.diskChecksum=am;this.setAsync("diskChecksum",am)}},flags:{get:function(){if(!this.__valid){return aj}return new f(this)},set:function(am){if(typeof(am)=="number"){this.__config.flags=am}else{if(typeof(am)=="object"){this.__config.flags=ah(am)}}}}})};aa.WebAPISession.prototype=Object.create(aa.EventDispatcher.prototype);aa.WebAPISession.prototype.handleEvent=function(aj){if(aj.name=="stateVariables"){aj=aj.data;if(!aj){return}else{if(aj.length>=1){this.__config=aj[0]||{}}if(aj.length>=2){this.__properties=aj[1]||{}}}if(this.__initCallback){this.__initCallback();this.__initCallback=null}return}else{if(aj.name=="failure"){var ai=aj.data[0];if(ai&W!=0){aa.UserInteraction.alert("Virtualization Failure",'<p>The hypervisor was unable to use your hardware\'s virtualization capabilities. This happens either if you have an old hardware (more than 4 years old) or if the <strong>Virtualization Technology</strong> features is disabled from your <strong>BIOS</strong>.</p><p>There are various articles on the internet on how to enable this option from your BIOS. <a target="_blank" href="http://www.sysprobs.com/disable-enable-virtualization-technology-bios">You can read this article for example.</a></p>')}}else{if(aj.name=="stateChanged"){this.__state=aj.data[0]}else{if(aj.name=="lengthyTask"){aa.UserInteraction.controlOccupied(aj.data[1],aj.data[0])}else{if(aj.name=="apiStateChanged"){this.__apiState=(aj.data[0]==1)}else{if(aj.name=="resolutionChanged"){if(this.__config.rdpURL!=undefined){var al=this.__config.rdpURL.split("@");this.__config.rdpURL=al[0]+"@"+aj.data[0]+"x"+aj.data[1]+"x"+aj.data[2];if(this.__lastRDPWindow){try{this.__lastRDPWindow.resizeTo(parseInt(aj.data[0]),parseInt(aj.data[1]))}catch(ak){}}}}}}}}}this.__fire(aj.name,aj.data)};aa.WebAPISession.prototype.start=function(ai){this.socket.send("start",{session_id:this.session_id,parameters:ai||{}})};aa.WebAPISession.prototype.stop=function(){this.socket.send("stop",{session_id:this.session_id})};aa.WebAPISession.prototype.pause=function(){this.socket.send("pause",{session_id:this.session_id})};aa.WebAPISession.prototype.resume=function(){this.socket.send("resume",{session_id:this.session_id})};aa.WebAPISession.prototype.reset=function(){this.socket.send("reset",{session_id:this.session_id})};aa.WebAPISession.prototype.hibernate=function(){this.socket.send("hibernate",{session_id:this.session_id})};aa.WebAPISession.prototype.close=function(){this.socket.send("close",{session_id:this.session_id})};aa.WebAPISession.prototype.getAsync=function(aj,ai){this.socket.send("get",{session_id:this.session_id,key:aj},{onSucceed:function(ak){if(ai){ai(ak)}}})};aa.WebAPISession.prototype.setAsync=function(ak,aj,ai){this.socket.send("set",{session_id:this.session_id,key:ak,value:aj},{onSucceed:function(){if(ai){ai()}}})};aa.WebAPISession.prototype.getProperty=function(ai){if(!ai){return""}if(this.__properties[ai]==undefined){return""}return this.__properties[ai]};aa.WebAPISession.prototype.setProperty=function(ai,aj){if(!ai){return""}this.__properties[ai]=aj;this.socket.send("setProperty",{session_id:this.session_id,key:ai,value:aj})};aa.WebAPISession.prototype.openRDPWindow=function(al,ai){var aj=this;if(this.__config.rdpURL){var ak=this.__config.rdpURL.split("@");this.__lastRDPWindow=aa.launchRDP(ak[0],ak[1])}else{this.getAsync("rdpURL",function(an){var am=an.split("@");aj.__lastRDPWindow=aa.launchRDP(am[0],am[1])})}};if(window.jQuery==undefined){if(H){return}window.addEventListener("load",function(aj){H=true;for(var ai=0;ai<K.length;ai++){K[ai]()}})}else{jQuery(function(){if(H){return}H=true;for(var ai=0;ai<K.length;ai++){K[ai]()}})}})(window.CVM);