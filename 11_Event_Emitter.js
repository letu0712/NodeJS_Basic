var Emitter = require("./11_ModuleEmitter")

var emitter = new Emitter();

emitter.on("tbao", function(){           //type = "tbao", listener = function
   - console.log("Báo về cho gia đình");
})

emitter.on("tbao", function(){
    console.log("Đã qua môn");
})

var scores = [6, 2];

for(var score of scores){
    if(score < 3){
        emitter.emit("tbao");
    }
}