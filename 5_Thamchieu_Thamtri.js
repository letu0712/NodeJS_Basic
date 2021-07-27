function swap(a,b){
    var temp;
    temp = a;
    a = b;
    b = temp;
}

var a = 1;
var b = 2;
swap(a,b);
console.log(a,b);