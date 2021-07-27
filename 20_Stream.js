var fs = require("fs");

//Chia file thành cách mảnh nhỏ để đọc
var readable = fs.createReadStream(__dirname + "/20_stream.txt",{
    encoding: "utf8",
    highWaterMark: 4 * 1024   //Kích thước 1 chunk
});

var writeable = fs.createWriteStream(__dirname + "/20_Read2Copy.txt");

//Đọc và ghi từng mảnh dữ liệu
readable.on("data", function(chunk){    //readable là 1 EventEmitter
    console.log(chunk.length);
    writeable.write(chunk);
})

//Pipe là cơ chế kết nối 2 stream lại với nhau, đầu ra của stream này kết
//nối với đầu vào của stream khác
// Trong NodeJS thì chúng ta sẽ pipe từ một Readable stream sang một 
// writeable stream