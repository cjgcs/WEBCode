//计算任意两个数字相机的和
/*function add(a,b){//形参
  console.log(a+b);
}
add(1,2);//实参
add(3,4);
*/


//练习：创建函数getSum，计算1~任意数字之间所有整数的和
/*function getSum(n){
  for(var i=0,sum=0;i<=n;i++){
    sum+=n;
  }
   console.log(sum);
}
getSum(200);
*/
//练习：创建函数getCount，获取任意两个年份之间所有闰年个数

function getCount(a,b){
  for(var i=a,count=0;i<=b;i++){
    if(i%4===0 && i%100!==0 || i%400===0){
		count++;
	}
  }
  
  console.log(count);
  
}
getCount(2000,2020);
















