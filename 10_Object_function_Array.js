//Object
var obj = {
    sayHello : "Hello"
}

console.log(obj.sayHello);
console.log(obj["sayHello"]);

var sayBai = "BaiBai";

obj.prototype = sayBai;
console.log(obj);


//Array function
var arr = [];

arr.push(function(){
    console.log("Canon");
});
arr.push(function(){
    console.log("Sony");
});

arr[0]();
//Duyện mảng các hàm
arr.forEach(function(item){
    item();
});