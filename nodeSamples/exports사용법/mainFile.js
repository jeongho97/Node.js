
const foo = require('./module/exportFile.js');

console.log(foo); //JSON으로 결과가 나온다
console.log(foo.a);

var calc=require('./calculator');

console.log(`calc.add 호출 ${calc.add(3,4)}`);

var calcM=require("./calcModule");

let v=calcM.multi(5,8);
console.log(v);