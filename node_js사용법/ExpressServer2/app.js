var express = require("express");

var app = express();

app.get("/", function (req, res) {
  console.log("/접속 성공");

  res.writeHead(200, { "content-Type": "text/html; charset=utf-8" });
  res.write("<!DOCTYPE html");
  res.write("<html>");
  res.write("<head>");
  res.write("<title>응답페이지</title>");
  res.write("</head>");

  res.write("<body>");
  res.write("<h1>Node.js로부터 응답 html 코드</h1>");
  res.write("</body>");

  res.write("</html>");
  res.end();

  //res.send("hi hello");   
  //res.send("hi helllo send"); //json //send -> 데이터를 보내준다
});

var listener = app.listen(8090, function () {
  console.log("server start port:" + listener.address().port);
});

// app.get("/test", (req, res) => res.send("Hello Express Server"));
// app.listen(8090, () => console.log("server start ..."));