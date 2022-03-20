/*
//练习：创建函数getS，传递任意一个数字，计算1~这个数字之间所有整数的乘积并返回结果
function getS(n){
  //计算n的阶乘（n~1之间所有整数乘积）
  //声明变量用于保存乘积，初始值为1
  for(var i=n,s=1;i>=1;i--){
    //将每个整数乘以到s中
	s*=i;
  }
  //返回计算的乘积
  return s;
}
console.log( getS(6) );
*/
//练习：创建函数isPrime，传递任意一个数字，查看是否为素数，返回布尔型的值
function isPrime(n){
  //1以下的数字不是素数
  if(n<=1){
    return false;
  }
  //循环产生2~n-1之间所有的整数
  for(var i=2;i<n;i++){
    //i代表所有整数，判断是否有能被n整除的数字
	if(n%i===0){
	  //一旦有能被整除的数字，说明不是素数
	  return false;
	}
  }
  //循环结束后，还没有结束，说明中间没有遇到能被整除的数字，说明是素数
  return true;
}
console.log( isPrime(1) );




