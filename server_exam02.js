const express=require("express");//서버를 express로 설정
const app=express();//객체 생성
app.listen(8080,function(){
    console.log("listening on 8080")
}) //연결포트 설정
