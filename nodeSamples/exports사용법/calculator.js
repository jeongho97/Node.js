
var calc={};

calc.add=function(arg1,arg2){ 
    console.log("계산기");
    return arg1+arg2;
}

module.exports=calc;






/*argument와 parameter의 차이점: argument는 실제 인수  parameter는 대입되는 인수
function func(a,b){//parameter,매개변수,인수,인자

}

func(1,2);//argument*/