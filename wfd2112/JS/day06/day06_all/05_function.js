//全局污染：全局变量的出现产生影响，任何作用域都可以访问全局变量
//轮播图1
var a=1;

;(function(){
  var i=2;
  console.log(i);
})();

//轮播图2
;(function(){
  var i=0;
  console.log(i);
})();
//轮播图3
(function fn(n){
  var i=4;
  console.log(i,n);
  //console.log(fn);//fn是局部变量
})(8);



