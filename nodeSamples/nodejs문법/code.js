//변수
let a = 10;
var str="타이거즈";

console.log("%%d",a);
console.log("%s",str);
console.log("hello"+str+" node js");

//object
var Person = {}

Person['age']=25;
Person['name']="홍길동";
Person.mobile='010-1234-5678';

console.log("나이: %d",Person.age);
console.log("나이: %d",Person['age']);
console.log("이름: %s",Person.name);
console.log("핸드폰: %s",Person['mobile']);

//function
function mul(a,b){
    return a * b;
}

var c=mul(3,7);
console.log("%d*%d=%d",3,7,c)

//object(=class)
var Human={
    age:16,
    name: '성춘향',
    add: function(a,b){
        return a+b;
    }
}

console.log("더하기: %d",Human.add(7,3))
console.log('이름: %s',Human.name);

//class==object
class Member{
    //var age; 변수선언 이렇게 못해준다!!
    constructor(age,name){
        this.age=age; //변수 선언은 이렇게 해준다
    }
    multi(a,b){
        return a*b;
    }
    print(){
        console.log(`${this.age}살 ${this.name}입니다`);// '' x `` o 
    }
}

var mem = new Member(16,"성춘향");

console.log("나이: %d",mem.age);
console.log(`나이:${mem.age}`);

console.log("이름: %s",mem.name);
console.log("%d",mem.multi(3,7));

var Users=[
    {'name':'홍길동','age':24},
    {'name':'성춘향','age':16},
];

console.log('첫번째사람: %s, %d', Users[0].name,Users[0].age);
console.log('두번째사람: %s, %d', Users[1].name,Users[1].age);

// 데이터를 추가
Users.push({'name':"일지매",'age':22});
console.log('세번째사람: %s, %d', Users[2].name,Users[2].age);

console.log(Users.length);

//함수 추가
var func=function(a,b){ //변수에 함수 담는것 => 람다식
    return a+b;
}

Users.push(func);

console.log("함수: %d",Users[3](3,4));