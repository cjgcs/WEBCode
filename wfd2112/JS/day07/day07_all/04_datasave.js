/*
//原始类型  
var a=1;
//把a的值拷贝一份赋给了b，a和b没有关系
var b=a;
a=2;
console.log(b);
*/


//引用类型
var tao={
  color:'绿色',
  size:'XXXL'
}
//把tao保存的地址赋给了xin，两者指向同一个对象
var xin=tao;
tao.size='XXXXL';
xin.color='红色';
//console.log(xin.size);
//console.log(tao.color);
//console.log(tao,xin);
console.log(tao===xin);//true
//销毁引用类型数据
tao=null;
xin=null;



var o1={a:1}
var o2={a:1}
//console.log(o1===o2);//false





var a=3;
function fn(n){
  n=n+3;
}
//拷贝一份a的值，作为参数传递
//传递的是值3
fn(a);
console.log(a);//3

var obj={num:5}
function fun(p){
  //p=obj
  p.num=10;
}
//拷贝一份对象的地址，传递的是地址
fun(obj);
console.log(obj.num);//10

