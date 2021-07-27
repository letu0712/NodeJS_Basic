function Person(name,age){
    this.name = name;
    this.age = age;
}

//Thêm các thuộc tính và phương thức cho đối tượng Person
Person.prototype.getName = function(){
    return this.name;
}

Person.prototype.address = "VietNam";

function Student(name){
    this.name = name;
}
//Kế thừa từ đối tượng PErson
Student.prototype = new Person();

var per = new Person("Tu",22);
console.log(per.getName(), per.address);

var stu = new Student("Nguyen Van A", 23);
console.log(stu.getName());


//VD
var date = new Date();
console.log(date.getFullYear());

//VD thêm thuộc tính vào đối tượng Date
Date.prototype.vnFormat = function(){
    var yyyy = this.getFullYear();
    var mm = this.getMonth() + 1;
    var dd = this.getDate();
    return dd+"/"+mm+"/"+yyyy
}

console.log(date.vnFormat());

var birthday = new Date(1999,11,07);
console.log(birthday.vnFormat());
