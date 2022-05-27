//url
var url = require('url'); //require == import / npm install url

var addr = 'http://localhost:8090/default.html?year=2022&month=feburary';

var q = url.parse(addr,true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

var qdata = q.query;
console.log(qdata); //JSON형태
console.log(qdata.month);

var parsedObject = url.parse('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=iphone')

console.log(parsedObject);

console.log(url.format(parsedObject));

//query만을 취득
var querystring = require('querystring');
var param=querystring.parse(parsedObject.query);

console.log(param);