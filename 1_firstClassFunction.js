//Dùng hàm như 1 tham số
function hello(){
    console.log("Hello World");
}
function callFunctionHello(fn){
    fn();
}

callFunctionHello(hello);


//Dùng hàm như 1 biến
var sayHello = function(){
    console.log("Hello");
}
sayHello();


//Truyền hàm trực tiếp
callFunctionHello(function(){
    console.log("ABCXYZ");
})