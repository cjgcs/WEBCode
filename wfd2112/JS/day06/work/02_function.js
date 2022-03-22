//全局函数
/*function fn(){
  
}*/
function fn(){
  function fun1(){
    console.log('fun1');
  }
  fun1();
}
fn();
//fun1(); //报错：无法调用局部函数


foo();//函数提升
function foo(){
 console.log(1);
}




var fn1=function(){
 console.log(1);
}
fn1();
console.log(typeof fn1);











