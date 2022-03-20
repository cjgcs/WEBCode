/*
var p=[];
//索引数组
//关联数组：以字符串作为下标
p['name']='涛哥';
p['sex']='男';
p['salary']=50000;
console.log(p.length);
console.log(p);



//遍历数组
var arr=['a','b','c','d'];
for(var k in arr){
  //k  下标
  console.log(k, arr[k]);
}

var arr=['a','b','c'];
//练习：使用循环获取每个元素
for(var i=0;i<arr.length;i++){
  //i 下标   arr[i]  元素
  console.log(i,arr[i]);
}




//练习：创建数组，包含一组成绩，遍历数组，计算出总成绩和平均成绩
var arr=[80,77,53,68];
for(var i=0,sum=0;i<arr.length;i++){
  //console.log(arr[i]);
  //把每个成绩加到sum
  sum+=arr[i];
}
console.log(sum,sum/arr.length);
//练习：创建数组，包含一组工资，计算出8000~10000之间员工有多少人
var arr=[8300,7500,12000,10000,5500,14000,9000];
for(var i=0,count=0;i<arr.length;i++){
  //判断工资是否在8000~10000
  if(arr[i]>=8000 && arr[i]<=10000){
    count++;
  }
}
console.log(count);
console.log(count/arr.length*100+'%');
*/

//创建数组，包含一组数字，遍历数组，获取最大值
var arr=[23,9,45,78];
//声明变量，用于保存最大值，初始化第1个元素作为最大值
var max=arr[0];
//遍历数组，得到每个元素
for(var i=0;i<arr.length;i++){
  //arr[i] 每个元素
  //用max和每个元素比较，如果小于任意一个元素，则把这个元素保存到max
  if(max<arr[i]){
    max=arr[i];
  }
}
console.log(max);



