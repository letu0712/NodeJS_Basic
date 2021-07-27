var person = {
    Name: "Tu",
    Age: 18,
    Address:{
        Country:"VietNam",
        Provincial:"BacNinh"
    },
    sayHello: function(){
        console.log("Hello "+this.Name);
    }
}
console.log(person.Name);
console.log(person.Address.Country);
console.log(person["Name"]);
person.sayHello();