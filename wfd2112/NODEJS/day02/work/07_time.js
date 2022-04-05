/*
//一次性定时器
//开启
var timer=setTimeout(function(){
  console.log('boom!');
},3000);
//清除
clearTimeout(timer);
*/

/*
//周期性定时器
//开启
var timer1=setInterval(function(){
  console.log('hello')
},3000);
//clearInterval(timer1);


console.log(2);
//立即执行定时器
setImmediate(function(){
  console.log(1);
});
console.log(3);
//运行结果为2，3，1，立即执行定时器为最后执行
*/

