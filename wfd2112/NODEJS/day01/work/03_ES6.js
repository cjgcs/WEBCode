/*
//var a  声明提升，赋值不提升，且可以重复声明
console.log(a);
var a=1;
var a=2;
*/

/*
//提升声明，但是不允许访问，之后赋值后才可以访问
console.log(b);
let b=1;
*/

/*
//不允许重复声明
let b=1;
let b=2;
console.log(b);
*/

/*
//块级作用域
{
  //语句块：块级作用域
  var a=1;
  let b=2;//局部变量不会污染全局
  const c=3;//局部常量不会污染全局，常量声明后必须赋值，且不允许重复赋值
}
console.log(a);
console.log(b);
console.log(c);
*/

/*
//练习：计算1~100之间所有整数的和，使用let声明变量
let sum=0;
for(let i=1;i<=100;i++){
  sum+=i;
}
console.log(sum);
*/

/*
//参数增强
function add(a,b,c=0){//给c设置默认值
 
  b=b||0;
  console.log(a+b+c);
}
add(8000,500,100);
add(8000,500);
*/


//箭头函数
var arr=[23,63,67,1,45];
//arr.sort(function(a,b){
//  return a-b;
//});
//arr.sort((a,b)=>{
//  return a-b;
//});
//如果函数内只有return一行语句则可以继续简化
arr.sort((a,b)=>a-b);
console.log(arr);



//练习：使用之前的匿名函数创建函数getAvg，传递任意3个数字，返回平均值。改用箭头函数

//var getAvg=function(a,b,c){
//  return (a+b+c)/3;
//}
//var getAvg=(a,b,c)=>{
//  return (a+b+c)/3;
//}
//var getAvg=(a,b,c)=>(a+b+c)/3;

//console.log(getAvg(1,2,3));



/*
//模板字符串
var ename='涛哥';
var sex=1;
var salary=1000;
//打印拼接
console.log(`姓名:${ename}  性别: ${sex? '男' : '女'} 工资:${salary} `);
*/

/**/
//练习：假设从后端获取到了一条商品数据，格式为对象，包含的属性有标题、价格、是否在售（1/0），打印出以下格式
//标题：xx
//价格：xx.00元
//是否在售：是/否

var goods={
  title:'小米',
  price:5000,
  isonline:0
}
console.log(`
标题:${goods.title}
价格:${goods.price.toFixed(2)}元
是否在售:${goods.isonline ? '是' : '否'}
`
);
















