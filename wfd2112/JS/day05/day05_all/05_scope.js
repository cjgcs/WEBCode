/*
//全局作用域
//全局变量
var a='北京市城管';
function shi(){
  //函数作用域
  //局部变量
  var b='石景山城管';
  //访问全局变量
  console.log(a);
}
shi();
//console.log(b);//无法访问局部变量
function hai(){
  //函数作用域
  //局部变量
  var c='海淀城管';
}


var n1=2;
function fn(){
  //函数中不加var声明的变量是全局变量
  n2=4;
  //访问全局变量n1，并重新赋值为3
  n1=3;
}
fn();
console.log(n2);
console.log(n1);
*/


//以下程序输出结果      
function fun(){
  //m3=5  //全局
  //m2=m3 //全局
  //var m1=m2 //局部
  var m1=m2=m3=5;
  console.log(m1);
}
fun();
console.log(m3);//5
console.log(m2);//5
console.log(m1);//报错


