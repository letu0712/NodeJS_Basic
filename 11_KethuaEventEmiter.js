var util = require("util")

function Person(){
    this.name = "TU";
    this.age = 22;
}
//Sử dụng prototype để các đối tượng khác có thể kế thừa
Person.prototype.sayHello = function(){
    console.log(`Hello ${this.name}, ${this.age} years old`)
}

function Student(){
    Person.call(this);   //Kế thừa các value trong Person
    this.id = 2886;
}

//Kế thừa lớp Student từ Person
util.inherits(Student, Person);

var student = new Student();
student.sayHello();

