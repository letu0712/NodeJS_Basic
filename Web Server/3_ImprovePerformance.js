var http = require("http");
var fs = require("fs");

http.createServer(function(req, res){     
    res.writeHead(200,{'Content-Type':"text/html"})//(200:mã lỗi)

    //Đọc được phần nào trả về client phần đó => xử lý nhanh, tiết kiệm bộ nhớ
    //Giống như streaming qua internet
    var html = fs.createReadStream(__dirname + "/2_Responsehtml.html").pipe(res);


}).listen(1337,"127.0.0.1")     