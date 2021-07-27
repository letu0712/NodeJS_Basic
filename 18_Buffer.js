var buffer = new Buffer.alloc(10,"Xin chào","utf8")

console.log(buffer);      //Hệ hexa
console.log(buffer.toString());
console.log(buffer.toJSON());
console.log(buffer.toString("ascii"));
console.log(buffer[2])
