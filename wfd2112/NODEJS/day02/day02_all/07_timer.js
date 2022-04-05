/*
//一次性定时器
//开启
var timer=setTimeout(function(){
  console.log('boom！靖国神社被炸');
},3000);


//清除
clearTimeout(timer);
*/
//周期性定时器
var timer=setInterval(function(){
  console.log('hello');
},3000);
console.log(4);
//clearInterval(timer);



/*
console.log(2);
//立即执行定时器
setImmediate(function(){
  console.log(1);
});
console.log(3);
*/
