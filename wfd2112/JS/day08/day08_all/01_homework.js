/*
//练习：遍历数组，翻转数组元素
var arr=['a','b','c','d'];
//创建一个新数组
var arr2=[];
//遍历数组
for(var i=0;i<arr.length;i++){
  //0 4 3 d
  //1 4 2 c
  //2 4 1 b
  //3 4 0 a
  //倒着元素的下标=数组长度-i-1
  //console.log(arr[arr.length-i-1]);
  //把倒着的元素放入到新数组
  arr2[i]=arr[arr.length-i-1];
}
console.log(arr2);
*/
//练习：遍历数组，将一组数字进行从小到大的排列(选做)
var arr=[23,9,78,6,45];
//外层循环：控制比较的轮数(比元素的个数少1) 
for(var i=0;i<arr.length-1;i++){
  //0  5 4
  //1  5 3
  //2  5 2
  //3  5 1
  //内层循环：控制每一轮比较的次数
  //每一轮比较的次数=数组长度-i-1
  for(var j=0;j<arr.length-i-1;j++){
    //j代表每一轮得到的数字下标，让它和下一个数字(j+1)比较
	//如果当前大于下一个则位置交换(变量交换)
    if(arr[j]>arr[j+1]){
	  var c=arr[j];
	  arr[j]=arr[j+1];
	  arr[j+1]=c;
	}
  }
}
console.log(arr);








