var http = require("http");
var fs = require("fs");

//req: request đại diện cho kết nối đến 
//res: response trả về cho browser
http.createServer(function(req, res){      //Khởi tạo 1 đối tượng Server với hàm callback
    res.writeHead(200,{'Content-Type':"text/html"})//(200:mã lỗi)

    //Cơ chế đọc đồng bộ: đọc xong mới trả về client
    var html = fs.readFileSync(__dirname + "/2_Responsehtml.html","utf8")  //ĐỌc nội dung file html

    var user = "Tu";

    html = html.replace("{user}", user)

    res.end(html);
}).listen(1337,"127.0.0.1")     //báo cho hđh biết đã tạo ra 1 server ở cổng 1337 và địa chỉ IP..

//Content-type: quyết định cách hiển thị nội dung trên trình duyệt web
//text/plain: chỉ văn bản
//text/html: trang html