//Khai báo thư viện có sẵn trong node.js
var util = require("util");
var name = "Tu";
var mess = util.format("Hello %s",name);
util.log(mess);

var url = require("url");
//Xem thông tin của url
var urlInfo = url.parse("https://nodejs.org/dist/latest-v14.x/docs/api/util.html");
console.log(urlInfo);