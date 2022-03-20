//练习：创建函数getS，传递任意一个数字，计算1~这个数字之间所有整数的乘积并返回结果
//    阶乘  5!=5*4*3*2*1

function gets(x){
  for(var i=1,z=1;i<=x;i++){
    z*=i
  }
  return z;
}
console.log(gets(3));



 // 练习：创建函数isPrime，传递任意一个数字，查看是否为素数，返回布尔型的值

function isPrime(y){
	if(y<2){
	  return false;
	}
	 for(var i=2;i<y;i++){
	if(y%i===0){
	  return false;
	}
  }
  return true;
			
  
}
console.log(isPrime(4));












