var fs = require("fs");

//Đọc file đồng bộ => mất thời gian đọc, chỉ phù hợp với file nhỏ, hthong ít người dùng
var content = fs.readFileSync(__dirname + "/19_File.txt","utf8")
console.log(content);

//Đọc file không đồng bộ, phù hợp với hệ thống nhiều người dùng
fs.readFile(__dirname + "/19_File.txt","utf8", function(err,data){
    //Kết quả trả về là nội dung và mã hexa của nội dung
    console.log(data);
})
console.log("done");