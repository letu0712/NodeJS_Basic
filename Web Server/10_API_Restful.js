var express = require("express");
var cookieParser = require("cookie-parser");
var mysql = require("mysql");
// var bodyParser = require("body-parser"); //Đọc dữ liệu gửi lên 
var app = express();

var apiController = require("./controllers/apiController");
var homeController = require("./controllers/homeController")

// //Đọc thông tin người dùng gửi lên dưới dạng form data
// var urlencodedParser = bodyParser.urlencoded({ extended: false});

// //Đọc thông tin người dùng gửi lên dưới dạng json
// var jsonParser = bodyParser.json()

var PORT = 3000;

//url chứa các file public người dùng có thể truy cập đến và tải xuống
app.use("/assets", express.static(__dirname + "/7_PublicFile"));
app.use(cookieParser());
app.set("view engine","ejs");   //Khai báo template engine

//Custom middleware
app.use("/",function(req,res,next){
    console.log("Request URL: ", req.url);
    req.requestTime = new Date();
    
    var connnection = mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "test"
    });
    connnection.connect();
    connnection.query("SELECT * FROM student",function(err, rows){
        if(err){
            throw err;
        }
        console.log(rows);
    })
    connnection.end();
    next();

    
})

apiController(app);     //express
homeController(app);



// //Đọc dữ liệu người dùng với id 
// app.get("/api/user/:id", function(req,res){
//     //Lấy dữ liệu từ database
//     res.json({
//         name:"Tu",
//         age:22
//     })
//     res.json(result)
// })

// //Tạo người dùng mới
// app.post("/api/user", jsonParser, function(req, res){
//     //Tạo mới và lưu vào database
// })

// //Cập nhật
// app.put("/api/user", jsonParser, function(req, res){
//     //Cập nhật và lưu vào database
// })

// app.delete("/api/user/:id", function(req,res){
//     //Xóa user trong database
// })


// app.get("/", function(req,res){
//     res.render("index");
// })


// app.post("/login",urlencodedParser, function(req, res){
//     res.send("Welcome "+req.body.username);
//     console.log(req.body.username);
//     console.log(req.body.password);
// });

// //API đọc dữ liệu gửi lên dạng json
// app.post("/loginjson", jsonParser, function(req, res){
//     res.send("Đọc thành công");
//     console.log(req.body.name);
//     console.log(req.body.age);
// })

app.listen(PORT, function(){
    console.log("Server is listening on PORT: ", PORT)
})