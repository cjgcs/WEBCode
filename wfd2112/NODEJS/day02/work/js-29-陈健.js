//练习：周期性定时器每隔3秒钟打印‘hello’，打印3次后清除定时器。
var count=0;
var timex=setInterval(function(){
  console.log('hello');
  count++;
  if(count===3){
  clearInterval(timex);
  }
},3000);










