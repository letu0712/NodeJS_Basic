var http = require("http");
var fs = require("fs");

http.createServer(function(req, res){   
    

    res.writeHead(200,{'Content-Type':"application/json"})//(200:mã lỗi)

    var obj = {
        name: "Tu",
        age : 22
    }

    res.end(JSON.stringify(obj));      //Chuyển object sang json

}).listen(1337,"127.0.0.1")     