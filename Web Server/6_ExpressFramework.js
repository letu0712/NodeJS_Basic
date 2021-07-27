var express = require("express");
var app = express();

var port = 3000;

app.get("/", function(req,res){
    res.send("<h1>Hello Express</h1>");
})

app.get("/api", function(req,res){
    res.json({
        name:"Tu",
        age:22
    })
})

//Định tuyến sử dụng parameter bằng cách đặt tên biến
app.get("/user/:id", function(req, res){
    res.send(`<h1>User: ${ req.params.id }</h1>`)
})

app.listen(port, function(){
    console.log("Server is listening")
})