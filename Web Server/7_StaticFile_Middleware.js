var express = require("express");
var cookieParser = require("cookie-parser");
var app = express();

var port = 3000;

//url chứa các file public người dùng có thể truy cập đến và tải xuống
app.use("/assets", express.static(__dirname + "/7_PublicFile"));
app.use(cookieParser());

//Custom middleware
app.use("/",function(req,res,next){
    console.log("Request URL: ", req.url);
    req.requestTime = new Date();
    next();
})


app.get("/", function(req,res){
    console.log("Cookies: ",req.cookies);     //HIển thị thông tin client gửi lên server
    res.send(`
    <link href="/assets/style.css" rel="stylesheet" type="text/css"/>
    <h1>Hello Express</h1>
    <p>Request time: ${ req.requestTime }</p>
    `);
})

app.get("/api", function(req,res){
    res.json({
        name:"Tu",
        age:22
    })
})

//Định tuyến sử dụng parameter bằng cách đặt tên biến
app.get("/user/:id", function(req, res){
    res.cookie("Username: ",req.params.id);      //Đặt tên biến cookies là Username
    res.send(`<h1>User: ${ req.params.id }</h1>`)
})

app.listen(port, function(){
    console.log("Server is listening")
})