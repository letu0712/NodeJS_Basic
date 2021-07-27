class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //Định nghĩa hàm
    sayHello(){
        console.log(`Hello ${this.name}, ${this.age} years old`)
    }
}

var per1 = new Person("Tu", 22)
per1.sayHello();

var per2 = new Person("ABX", 23)

console.log(per1.__proto__);  //Kiểm tra prototype
