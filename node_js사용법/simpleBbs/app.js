var express=require('express');
var app=express();
var fs=require("fs");

var ejs=require("ejs");

const mysql = require('mysql');

//mysql 접속설정
const conn = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '1234',
    database: 'mydb'
};

var connection = mysql.createConnection(conn);
connection.connect();

// parameter를 받기 위한 설정
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

// html module을 사용할 설정
app.engine('html',require('ejs').renderFile);
app.set('view engine','ejs');

app.listen(8090, function(){
    console.log('웹서버 동작중....');
});

app.get("/",function(req,res){
    
    fs.readFile(__dirname+"/writeBbs.html",function(err,data){

        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end();
    })

});

//get은 query post는 body
app.post("/regist",function(req,res){

    console.log('regist 접속 성공!');
    console.log(req.body); 

    var writer=req.body.writer;
    var title=req.body.title;
    var content=req.body.content;

    var sql=" INSERT INTO NOTICE(WRITER, TITLE, CONTENT, REGDATE) "
            + " VALUES(?,?,?,NOW()) ";
    
    var params = [writer,title,content];

    connection.query(sql,params,function(err,results){
        if(err) console.log('query error');

        console.log("result:"+results);
        console.log("추가 success");

        res.redirect("/bbslist");
    });

});

app.get("/delete",function(req,res){
    var notice_id=req.query.notice_id
    var sql= " DELETE FROM NOTICE WHERE NOTICE_ID=? "
    params=[notice_id];
    connection.query(sql,params,function(err,results,fields){
        if(err) console.log(err);

        console.log("삭제완료");
        res.redirect("/bbslist?result=success");
        /* obj=JSON.parse('{"result":"success"}'); //JSON.parse() : String 을 JSON으로 변환 JSON.stringify() : JSON을 String으로 변환
        console.log(obj);
         fs.readFile(__dirname+"/list.ejs","utf-8",function(err,ejsdata){
            if(err) console.log(err);
            console.log(obj.result);
            res.end(ejs.render(ejsdata, { box : obj})  )
        }); */
    });
});
app.get("/detail",function(req,res){
    var notice_id=req.query.notice_id;
    var sql=" SELECT * FROM NOTICE WHERE NOTICE_ID=? ";
    params=[notice_id];

    connection.query(sql,params,function(err,results,fields){
        if(err) console.log(err);

        console.log(JSON.stringify(results));
        

        fs.readFile(__dirname+"/detail.ejs","utf-8",function(err,ejsdata){
            if(err) console.log(err);

            res.end(ejs.render(ejsdata, { data:results })  )

        });
    });

});
app.get("/bbslist",function(req,res){

    connection.query("SELECT * FROM NOTICE",function(err,results,fields){
        if(err) console.log(err);

        console.log(JSON.stringify(results));

        fs.readFile(__dirname+"/list.ejs","utf-8",function(err,ejsdata){
            if(err) console.log(err);

            res.end(ejs.render(ejsdata, { data:results })  )

        });
    });

});