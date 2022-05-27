//event(= 사건)
//event -> listener(함수) callback

var events = require('events');

var eventEmitter=new events.EventEmitter();

/* //event handler 생성
var myEventHandler=function(){
    console.log('event 실행');
}

//event handler 할당
eventEmitter.on("scream",myEventHandler);

//event 발생
//eventEmitter.emit('scream'); //이 시점에서 위에 함수가 실행됨

setTimeout(function(){{
    console.log('2초후에 이벤트 전달 시도');

    eventEmitter.emit('scream');
}},2000); */

var connectHandler = function connected(){
   console.log('Connection 성공!');  //3

   eventEmitter.emit("data receive"); //4
}

eventEmitter.on('connection',connectHandler); //2

eventEmitter.on('data_received',function(){ //5
    console.log('data receive 성공!'); //6
});

eventEmitter.emit('connection');    //1
