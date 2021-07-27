var http = require("http");
var fs = require("fs");

http.createServer(function(req, res){  

    if(req.url === "/" || req.url === "/5_Routing.html"){

        fs.createReadStream(__dirname + "/5_Routing.html").pipe(res);
    }
    else if(req.url === "/api"){
        res.writeHead(200,{'Content-Type':"application/json"})//(200:mã lỗi)

        var obj = {
            name: "Tu",
            age : 22
        }
        res.end(JSON.stringify(obj));      //Chuyển object sang json
    }
    else{
        res.writeHead(404);
        res.end("404 Not Found")
    }



 

}).listen(1337,"127.0.0.1",function(){  //khi server khởi động thành công thì thực thi hàm callback
    console.log("Server listening on: http://localhost:1337");
})     