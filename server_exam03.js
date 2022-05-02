var express=require("express")
var app=express()
app.use(express.static('public'))
app.get('/',function(req,res){
    res.send('Hello Home Page')
})
app.get('/route',function(req,res){
    res.send('Hello happy!, <img src="/dog.jpg">')
})
app.get('/login',function(req,res){
    res.send('<h1>Login Please</h1>')
})
app.listen(8080,function(){
    console.log('Connected 8080 port!')
})