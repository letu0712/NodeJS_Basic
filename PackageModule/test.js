var sayHello2 = require("./hello2").sayHello2
sayHello2();

var sayHello3 = require("./hello3")
sayHello3.sayhello();
sayHello3.mess = "Bai Bai";
sayHello3.sayhello();

var Person = require("./hello4");
var per = new Person();
per.sayHello();

var sayhello5 = require("./hello5").sayhello;
sayhello5();