/*
var count=0;
function say(){

    console.log('从前有座山。。。');
    count++;
    if(count===3){
	 return;
	}
  //递归
  say();
  
}
say();
*/

//使用递归计算n的阶乘
/*function getS(n){
  //边界条件：当n为1的时候，返回1
  if(n===1){
  return 1;
  }
  //递归
  return n*getS(n-1);
}
console.log(getS(5));
*/

//斐波那契数列：第1、2项固定是1，从第3项开始每项的值是前两项相加的和；使用递归的算法计算任意一项的值

function fib(n){
  if(n===1 || n===2){
    return 1; 
  } 
  return fib(n-1)+fib(n-2);
}
console.log(fib(6));


