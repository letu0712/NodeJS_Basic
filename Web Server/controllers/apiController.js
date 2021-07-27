module.exports = function(app){
    //Đọc dữ liệu người dùng với id 
app.get("/api/user/:id", function(req,res){
    //Lấy dữ liệu từ database
    res.json({
        name:"Tu",
        age:22
    })
    res.json(result)
})

//Tạo người dùng mới
app.post("/api/user", function(req, res){
    //Tạo mới và lưu vào database
})

//Cập nhật
app.put("/api/user", function(req, res){
    //Cập nhật và lưu vào database
})

app.delete("/api/user/:id", function(req,res){
    //Xóa user trong database
})
}