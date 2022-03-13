//循环打印1~10之间所有的整数
/*for(var i=1;i<=10;i++){
 console.log(i);
}*/

//练习：循环打印80 75 70 65 60
/*for(var i=80;i>=60;i-=5){
  console.log(i);
}
*/


//练习：计算1~100之间所有能被5整除的数字的和
/*for(var i=1,sum=0;i<=100;i++){
  if(i%5===0){
    sum+=i;
  }
}console.log(sum);
*/

//练习：假设本金10000，银行的年利率是4%，存5年，一共又多少钱

for(var i=1,bj=10000;i<=5;i++){
  bj+=bj*0.04;
  console.log(bj);
}










