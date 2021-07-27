var greeting = require("./greeting.json");
var hello = function(){
    console.log(greeting["sayhello"]);
    console.log(greeting.sayhello);
}

module.exports = hello;