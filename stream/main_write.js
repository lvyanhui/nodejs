var fs=require("fs");
var data= 'this is a write demo';

var writerStream = fs.createWriteStream('output.txt');

writerStream.write(data, 'UTF8');

writerStream.end();

writerStream.on('finish', function(){
	console.log("write finish");
});

writerStream.on('error', function(){
	console.log(err.stack);
});

console.log("program exit");
