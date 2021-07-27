var EventEmitter = require('events');

class Dialog extends EventEmitter{   //Kế thừa
    constructor(){
        super();    //kế thừa nên phải có hàm super để sử dụng biến this
        this.mess = "Hello World";
    }

    sayHello(name){
        console.log(`${this.mess} ${name}`)
        this.emit("hello",name);
    }
}

var dialog = new Dialog();

dialog.on('hello',function(data){
    console.log("Có lời chào đến ",data);
});

dialog.sayHello("TU")

