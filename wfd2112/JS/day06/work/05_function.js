//全局污染：全局变量的出现产生的影响，任何作用域都可以访问全局变量

//轮播图1
(function(){ //匿名函数的自调用
  var i=2;
  console.log(i);
})();
//轮播图2

(function(){
  var i=0;
  console.log(i);
})();
//轮播图3
(function(){
  var i=4;
  console.log(i);
})();































