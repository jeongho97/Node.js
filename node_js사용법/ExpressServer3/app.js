var express=require("express");
var app = express();

app.set("views",__dirname+'/views');

// html module을 사용할 설정
app.engine('html',require('ejs').renderFile);
app.set('view engine','ejs');

// parameter를 받기 위한 설정
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',function(req,res){
    res.render('index.html');
})

app.get('/main',function(req,res){
    console.log('/main 접속');  

    console.log(req.query.name);
    console.log(req.query.age);

    res.render('index.html');
});

app.listen(8090,function(){
    console.log("웹서버 스타트...");
});