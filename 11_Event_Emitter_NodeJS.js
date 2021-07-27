var Emitter = require("events");
var event = {
    TBAO: "tbao"
}
var emitter = new Emitter();

emitter.on(event.TBAO, function(){
    console.log("Tạch");
})

emitter.on(event.TBAO, function(){     //Tạo sự kiện có tên event và hành động
    console.log("Qua");
})


var scores = [2, 6];

for(var s of scores){
    if(s < 3){
        emitter.emit("tbao");        //Gọi sự kiện
    }
}