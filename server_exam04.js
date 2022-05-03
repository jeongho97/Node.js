//npm install -g nodemon
//nodemon server_exam04.js
//보안오류가 뜬다면 set-executionpolicy -scope currentuser
//ExecutionPolicy: unrestricted 를 해주어 보안을 해제
//nodemon server_exam04.js를 해주면 서버를 돌리면서도 서버 코드를 변경하면 바로 적용된다
const express=require("express")
const app=express();
const port=3000;

app.use(express.static('public')) //express에서 정적파일 제공 (public 폴더 생성하자)

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index2.html")
})

app.listen(port,function(){
    console.log(`listening on port ${port}`)

})