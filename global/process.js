process.on('init', function(code) {
	setTimeout(function(){
		console.log("code will never run.");
	}, 1000);

	console.log("exit code:", code);
});

process.stdout.write("Hello world!" + "\n");

process.argv.forEach(function(val, index, array) {
	console.log(index + ":" + val);
})

console.log(process.execPath);
console.log(process.platform);

console.log("program exit");
