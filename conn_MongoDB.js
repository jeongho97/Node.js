const express=require('express');
const app=express();
const MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb+srv://jeongho0304:jo73002745!@cluster0.4g5jy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',function(err,client){
    if(err) return console.log(err)
    app.listen(5000,function(){
        console.log("listening on 5000")
    });
    
});