function Person(){
    this.mess = "Hello 3";
    this.sayhello = function(){
        console.log(this.mess);
    }
}

module.exports = new Person();