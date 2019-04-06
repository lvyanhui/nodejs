var EventEmitter = require("events").EventEmitter;
var domain = require("domain");

var emitter1 = new EventEmitter();

var domain1 = domain.create();

domain1.on('error', function(err){
	console.log("domain1 handle this error: " + err.message);
});

domain1.add(emitter1);
emitter1.on('error', function(err) {
	console.log("listener handle this error: " + err.message);
});

emitter1.emit('error', new Error("use listener handle "));
emitter1.removeAllListeners("error");

emitter1.emit('error', new Error("use domain1 handle"));


/***************/

var domain2 = domain.create();
domain2.on('error', function(err){
	console.log('domain2 handle this error: '+ err.message);
});

domain2.run(function(){
	var emitter2 = new EventEmitter();
	//emitter2.on('error', function(err) {
	//	console.log("listener2 handle this error: " + err.message);
	//});
	emitter2.emit('error', new Error('use domain2 handle'));
	
});

domain1.remove(emitter1);
emitter1.emit('error', new Error("exception, system crash."));

