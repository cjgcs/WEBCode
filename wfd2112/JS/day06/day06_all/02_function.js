/*
//全局函数
function fn(){
}
//var a=3;
function fun(){
  //var a=2;
  //局部函数
  function fun1(){
	//var a=1;
    console.log(a);
  }
  fun1();
}
fun();
//fun1();//报错：无法调用局部函数
*/
//提升
foo();
function foo(){
  console.log(1);
}

