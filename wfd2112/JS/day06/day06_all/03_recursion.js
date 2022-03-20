var count=0;//用于计数
function say(){
  console.log('从前有座山..');
  count++;
  //判断是否为3  ———— 边界条件
  if(count===3){
    //结束函数调用
	return;
  }
  //递归
  say();
}
//say();

//使用递归计算n的阶乘
function getS(n){
  //边界条件：当n为的时候，返回1
  if(n===1){
    return 1;
  }
  //递归：规律
  return n*getS(n-1);
}
console.log( getS(5) );





