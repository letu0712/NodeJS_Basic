
var bodyParser = require("body-parser"); //Đọc dữ liệu gửi lên
//Đọc thông tin người dùng gửi lên dưới dạng form data
var urlencodedParser = bodyParser.urlencoded({ extended: false});

//Đọc thông tin người dùng gửi lên dưới dạng json
var jsonParser = bodyParser.json()

module.exports = function(app){
    app.get("/", function(req,res){
        res.render("index");
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
}