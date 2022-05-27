
var http = require('http');
var fs=require('fs');

var server=http.createServer(function(req,res){

    fs.readFile(__dirname + '/index.html', function(err,data){
        if(err) console.log(err);

        console.log('readfile success');

        res.writeHead(200,{ 'Content-Type': 'text/html' });
        res.write(data);
        res.end();


    });


});
server.listen(8090,function(){
    console.log('server start...');
});