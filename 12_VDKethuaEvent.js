var Emitter = require("events");
var util = require("util");

function Dialog(){
    this.message = "Hello ";
    this.sayHello = function(name){
        this.emit("hello",name);
    }
}

util.inherits(Dialog, Emitter);

var dialog = new Dialog();

dialog.on("hello",function(name){
    console.log("Có 1 lời chào đến ",name);
})

dialog.sayHello("Tu");