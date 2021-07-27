var express = require("express");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser"); //Đọc dữ liệu gửi lên 
var app = express();

//Đọc thông tin người dùng gửi lên dưới dạng form data
var urlencodedParser = bodyParser.urlencoded({ extended: false});

//Đọc thông tin người dùng gửi lên dưới dạng json
var jsonParser = bodyParser.json()

var PORT = 3000;

//url chứa các file public người dùng có thể truy cập đến và tải xuống
app.use("/assets", express.static(__dirname + "/7_PublicFile"));
app.use(cookieParser());
app.set("view engine","ejs");   //Khai báo template engine

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

//http://localhost:3000/user/123?queryStr=5
app.get("/user/:id", function(req, res){
    //Render về file html với dữ liệu động
    //user: tên thư mục trong views
    res.render("user",{ ID: req.params.id, QueryString: req.query.queryStr});      

})

app.post("/login",urlencodedParser, function(req, res){
    res.send("Welcome "+req.body.username);
    console.log(req.body.username);
    console.log(req.body.password);
});

//API đọc dữ liệu gửi lên dạng json
app.post("/loginjson", jsonParser, function(req, res){
    res.send("Đọc thành công");
    console.log(req.body.name);
    console.log(req.body.age);
})

app.listen(PORT, function(){
    console.log("Server is listening on PORT: ", PORT)
})