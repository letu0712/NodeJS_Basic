var express = require("express");
var cookieParser = require("cookie-parser");
var mongoose = require("mongoose");
// var bodyParser = require("body-parser"); //Đọc dữ liệu gửi lên 
var app = express();

var apiController = require("./controllers/apiController");
var homeController = require("./controllers/homeController")


var PORT = 3000;

var Schema = mongoose.Schema

var personSchema = new Schema({
    name: String,
    address: String
});

var Person = mongoose.model("Person", personSchema);

//url chứa các file public người dùng có thể truy cập đến và tải xuống
app.use("/assets", express.static(__dirname + "/7_PublicFile"));
app.use(cookieParser());
app.set("view engine","ejs");   //Khai báo template engine

//Custom middleware
app.use("/", function(req,res,next){
    console.log("Request URL ", req.url);
    req.requestTime = new Date();
    //Tạo đối tượng
    next();
})


apiController(app);     //express
homeController(app);





app.listen(PORT, function(){
    console.log("Server is listening on PORT: ", PORT)
})