// Import modules in Node
var events  = require("events");

var eventEmitter   = new events.EventEmitter();

var  f1  = function()
{	
	console.log("Connection is established successfully.");
};

eventEmitter.on("onConnected", f1 );    //  Attaching event handler to event
eventEmitter.emit("onConnected");		// Fire event

