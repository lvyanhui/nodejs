var express = require('express');
var app = express();

app.get('/index.html', function(req, res){
	res.send('Hello World.');
})

var server = app.listen(8081, function(){
	var host = server.address().address
	var port = server.address().port

	console.log("visit adderss is http://%s:%s", host, port)
})