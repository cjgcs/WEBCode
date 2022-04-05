/*
//练习：周期性定时器每隔3秒钟打印‘hello’，打印3次后清除定时器。
var n=0;//用来计数
var timer=setInterval(function(){
  console.log('hello');
  n++;//打印一次，记录一次
  //每次加1，判断一次
  //如果次数为3清除
  if(n===3){
    clearInterval(timer);
  }
},1000);
*/

console.log(2);
//立即执行定时器
setImmediate(function(){
  console.log(1);
});
//立即执行定时器
process.nextTick(function(){
  console.log(4);
});

console.log(3);


