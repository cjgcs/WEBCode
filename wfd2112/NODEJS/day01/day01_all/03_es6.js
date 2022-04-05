/*
//var存在声明提升，允许重复声明
//var a
console.log(a);
var a=1;
var a=2;

//暂时性的死区：提升，不允许访问
let b=1;
//不允许重复声明
//let b=2;
console.log(b);


//1.块级作用域
{
  //语句块：块级作用域
  var a=1;
  let b=2;//局部变量
  const c=3;//局部常量
}
console.log(c);

//练习：计算1~100之间所有整数的和，使用let声明变量
let sum=0;
for(let i=1;i<=100;i++){
  sum+=i;
}
console.log(sum);
*/


//2.参数增强
//给参数设置默认值
function add(a,b,c=0){
  //给b设置默认值
  /*
  if(b===undefined){
    b=0;
  }
  */
  b=b||0;//ES6之前的用法
  console.log(a+b+c);
}
//add(8000,5000,1000);
//add(8000,5000);
//add(8000);

//3.箭头函数
var arr=[23,9,78,6,45];
//arr.sort(function(a,b){
//  return a-b;
//});
//arr.sort((a,b)=>{
//  return a-b;
//});
arr.sort((a,b)=>a-b);
//console.log(arr);

//练习：使用之前的匿名函数创建函数getAvg，传递任意3个数字，返回平均值。改用箭头函数
//var getAvg=function(a,b,c){
//  return (a+b+c)/3;
//}
//var getAvg=(a,b,c)=>(a+b+c)/3;
//console.log( getAvg(80,75,65) );
/*
//4.模板字符串
var ename='涛哥';
var sex=0;
var salary=50000;
//打印  姓名：xxx  性别：男/女  工资：50000.00元
console.log(`
  姓名：${ename}
  性别：${sex ? '男' : '女'}
  工资：${salary.toFixed(2)}元
`); 
*/
//练习：假设从后端获取到了一条商品数据，格式为对象，包含的属性有标题、价格、是否在售（1/0），打印出以下格式
//标题：xx
//价格：xx.00元
//是否在售：是/否
var laptop={
  title:'小米Air',
  price:4199,
  isOnsale:1
}
console.log(`
  标题：${laptop.title}
  价格：${laptop.price.toFixed(2)}元
  是否在售：${laptop.isOnsale ? '是' : '否'}
`);






