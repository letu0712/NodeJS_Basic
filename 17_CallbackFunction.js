function func1(){
    console.log("Function 1");
}

function func2(){
    setTimeout(func1,5000);
    console.log("Function 2");
}

func2();

//Một hàm callback là 1 function được truyền vào lời gọi một hàm khác
//Mà nó được thực thi vào một thời điểm tương lai sau khi hoàn tất công việc nào đó