/*
//程序执行前，会将var声明的变量提升到所在作用域的最前，只是提升声明部分，赋值不提升
//var a
console.log(a);//undefined
var a=1;

function fn(){
  //var b
  console.log(b);//undefined
  var b=2;
  console.log(b);
}
fn();


var c=3;
function foo(){
  //提升
  //var c;//undefined
  //往上查找c，找到的是当前作用域的c
  console.log(c);//undefined
  var c=5;
  console.log(c);//5
}
foo();


var c=3;
function foo(){
  //当前作用域下没有找到c，往上一级找到的是全局变量c
  console.log(c);//3
  //找到全局变量c，并重新赋值为5
  c=5;
  console.log(c);//5
}
foo();
//在全局作用域下，访问全局变量c，全局变量c已经在函数内被重新赋值为5
console.log(c);//5
*/


/*
function boo(n){
  //参数相当于局部变量，外部无法访问到
  //var n=1;
}
boo(1);
console.log(n);
*/

var m=7;
function bar(m){
  //var m=5;
  //往上查找m，找到的当前作用域的m
  //让m在原来基础之上加3
  m=m+3;
}
bar(5);
//在全局作用域下，访问m，找全局变量m
console.log(m);//7




