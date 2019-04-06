console.log(__filename);
console.log(__dirname);


function printHello(){
	console.log("Hello, world!");
}

//var t=setTimeout(printHello, 2000);
//clearTimeout(t);

var t=setInterval(printHello, 2000);
clearInterval(t);

console.log("params:%d",1991);
console.trace();

console.info("program init");

console.time("get data");
console.timeEnd("get data");

