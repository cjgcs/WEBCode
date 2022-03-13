//计算任意两个数字相加的和
function add(a,b){//形参
  console.log(a,b);
  //console.log(a+b);
}
//add(1,2);//实参
//add(3,4);
//add(5);
//add();
//add(6,7,8);

//练习：创建函数getSum，计算1~任意数字之间所有整数的和
function getSum(n){
  //计算1~n之间所有整数的和
  for(var i=1,sum=0;i<=n;i++){
    //求和
	sum+=i;
  }
  console.log(sum);
}
//getSum(100);
//getSum(1000);
//练习：创建函数getCount，获取任意两个年份之间所有闰年个数
function getCount(n1,n2){
  //循环n1~n2之间所有的年份
  for(var i=n1,count=0;i<=n2;i++){
    //i代表所有年份
	//判断是否为闰年
	if(i%4===0 && i%100!==0 || i%400===0){
	  //计数
	  count++;
	}
  }
  console.log(count);
}
getCount(2000,2100);
getCount(1949,2022);


