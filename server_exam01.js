var http=require("http")
const hostname='127.0.0.1';
const port =8080;
var server=http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello Node.js');
});
server.listen(port,hostname,function(){
    console.log(`Server running at http://${hostname}:${port}`);
});