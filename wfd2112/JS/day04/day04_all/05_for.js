/*
//循环打印1~10之间所有的整数
for(var i=1;i<=10;i++){
  console.log(i);
}

//练习：循环打印80  75  70  65  60 
for(var i=80;i>=60;i-=5){
  console.log(i);
}

//练习：计算1~100之间所有能被5整除的数字的和
for(var i=1,sum=0;i<=100;i++){
  //i代表所有的整数
  //判断每个整数是否能被5整除
  if(i%5===0){
    //求和
	sum+=i;
  }
}
//循环结束后，打印最终的总和
console.log(sum);
*/
//练习：假设有本金10000，银行的年利率是4%，存5年，一共有多少钱
//每一年本金都会发生变化 = 上一年的本金+利息
for(var i=1,money=10000;i<=5;i++){
  //每次循环本金都会发生变化
  //本金 = 上一年的本金+利息
  money=money+money*0.04;
  //查看每一年本金的变化
  console.log(money);
}









