var person = {
    name: "Tu",
    sayHello: function(month, year){
        console.log(`Month: ${month}, Year: ${year}`)
        console.log(`Hello ${this.name}`);
    }
}

person.sayHello(7, 2021);

//Thay đổi được giá trị trong object, truyền tham số vào hàm dưới dạng liệt kê
person.sayHello.call({name: "Nguyen Van A"}, 7, 2021);

//Truyền tham số vào hàm dưới dạng mảng
person.sayHello.apply({name:"Trần Thị B"}, [7, 2021])