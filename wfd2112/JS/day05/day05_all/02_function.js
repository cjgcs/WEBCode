/*
console.log('卖煎饼嘞！又香又脆的煎饼');
console.log('所有煎饼一律8折');
console.log('快来抢购');
*/
//创建函数
function laba(){
  //函数体 
  console.log('卖煎饼嘞！又香又脆的煎饼');
  console.log('所有煎饼一律12折');
  console.log('快来抢购');
}
//调用
//laba();
//laba();
//laba();

//练习：创建函数getSum，封装计算1~100之间所有整数的和，调用多次。
function getSum(){
  //函数体
  var i=1,sum=0;
  for(;i<=100;i++){
    sum+=i;
  }
  console.log(sum);
}
getSum();
getSum();



