var express = require("express");
var cookieParser = require("cookie-parser");
var app = express();

var port = 3000;

//url chứa các file public người dùng có thể truy cập đến và tải xuống
app.use("/assets", express.static(__dirname + "/7_PublicFile"));
app.use(cookieParser());
app.set("view engine","ejs");

//Custom middleware
app.use("/",function(req,res,next){
    console.log("Request URL: ", req.url);
    req.requestTime = new Date();
    next();
})

app.get("/", function(req,res){
    res.render("index");
})




app.get("/api", function(req,res){
    res.json({
        name:"Tu",
        age:22
    })
})


app.get("/user/:id", function(req, res){
    //Render về file html với dữ liệu động
    //user: tên thư mục trong views
    res.render("user",{ ID: req.params.id });      
})

app.listen(port, function(){
    console.log("Server is listening")
})