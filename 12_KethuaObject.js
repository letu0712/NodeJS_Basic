var Person = {
    name: "",
    age: null,
    getInfo: function(){
        return this.name + " " + this.age;
    }
}

//ĐỐi tượng Student kế thường các thuộc tính và phương thức từ Person
var Student = Object.create(Person);
Student.name = "Tu";
Student.age = 22;

console.log(Student);
console.log(Student.getInfo());