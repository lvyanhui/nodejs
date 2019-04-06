//express_demo.js 文件
var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
    console.log("home page Get request");
	res.send('Hello Get');
})

app.post('/', function (req, res) {
    console.log("home page Post request");
	res.send('Hello Post');
})

app.get('/del_user', function (req, res) {
    console.log("/del_user response DELETE request");
	res.send('Delete page.');
})

app.get('/list_user', function (req, res) {
    console.log("list user get request");
	res.send('user list page.');
})

app.get('/ab*cd', function (req, res) {
    console.log("/ab*cd get request");
	res.send('reg compair.');
})

 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})
