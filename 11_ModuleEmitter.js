function Emitter(){
    this.events = {};
}
//Thêm các phương thức cho object Emitter
Emitter.prototype.on = function(type, listener){
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}

Emitter.prototype.emit = function(type){
    if (this.events[type]){
        this.events[type].forEach(function(listener){
            listener();   //Duyển mảng và gọi hàm
        })
    }
}

module.exports = Emitter;