//全局作用域
//var a='你好';//全局变量
//function shi(){
	//函数作用域
//	var b='是的';//局部变量
//}


/*

var n1=2;
function fn(){
	n2=4;//函数中不加var声明的变量是全局变量
	n1=3;//访问全局变量n1，并重新赋值为3
}
fn();
console.log(n2);
*/

//一下程序输出结果
function fun(){
	//m3=5  全局
	//m2=m3  全局
	//var m1=m2  局部
  var m1=m2=m3=5;
  console.log(m1);//5
}
fun();
console.log(m3);//5
console.log(m2);//5
console.log(m1);//undefined





