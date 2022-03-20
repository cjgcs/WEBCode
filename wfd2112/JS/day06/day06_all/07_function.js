/*
//检测字符串中是否含有非数字
var str='6';
//会隐式转换为数值
console.log( Number(str) );
console.log( isNaN(str) );


//练习：声明变量保存用户输入的值，如果输入的值含有非数字，打印‘非法的数量’
var num='2';
if( isNaN(num) ){
  console.log('非法的数量');
}
*/
var str='parseInt(3.14)';
console.log(str);
//执行字符串表达式
console.log( eval(str) );



