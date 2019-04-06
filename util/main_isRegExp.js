var util = require('util');

console.log(util.isRegExp("[.]+$"));
console.log(util.isRegExp(new RegExp('[.,]')));
console.log(util.isRegExp({

}));



