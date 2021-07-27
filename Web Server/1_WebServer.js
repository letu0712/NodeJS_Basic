var http = require("http");

//req: request đại diện cho kết nối đến 
//res: response trả về cho browser
http.createServer(function(req, res){      //Khởi tạo 1 đối tượng Server với hàm callback
    res.writeHead(200,{'Content-Type':"text/plain"})//(200:mã lỗi)
    res.end("Hello Web ")                       //trình duyệt hiển thị
}).listen(1337,"127.0.0.1")     //báo cho hđh biết đã tạo ra 1 server ở cổng 1337 và địa chỉ IP..