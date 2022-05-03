// Node JS example to demonstrate event handling concept
var events = require('events');

var emitObj= new events.EventEmitter();

var sendMail = function () 
{
	console.log("Thanks for confirming order.");
	console.log("You will get email with detailed information about order.");
};

var sendSMS = function () 
{	
	console.log("Thanks for confirming order.");
	console.log("You will get SMS with detailed information about order.");
};

// attach event handler
emitObj.on("confimOrder", sendMail);
emitObj.emit("confimOrder");
console.log("----------------------------------------");

// attach one more event handler
emitObj.on("confimOrder", sendSMS);
emitObj.emit("confimOrder");
console.log("----------------------------------------");

// detatch the event handler
emitObj.removeListener("confimOrder", sendMail);
emitObj.emit("confimOrder");
