const mysql=require('mysql');

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

//select
var sql = "SELECT * FROM TABLESAMPLE";

//QUERY 실행
connection.query(sql,function(err,results,fields){
    if(err) console.log(err);

    console.log("접속 성공!");

    let data=JSON.stringify(results)
    let result=JSON.parse(data.trim());
    console.log(result);

    console.log(result[0].name);

});

//ALTER USER '[계정]'@'[호스트]' IDENTIFIED WITH mysql_native_password BY '[비밀번호]'; //허가 해줘야함

// insert
/* var sql="INSERT INTO TABLESAMPLE(ID,NAME) VALUES('bcd','성춘향')";

connection.query(sql,function(err){
    if(err) console.log(err);

    console.log("추가 성공!");
}); */

/* var sql="INSERT INTO TABLESAMPLE(ID,NAME) VALUES(?,?)";

var param=['cde','정수동'];

connection.query(sql,param,function(err){
    if(err) console.log(err);

    console.log("추가 성공!");
}); */