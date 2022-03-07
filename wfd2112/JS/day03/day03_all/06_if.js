/*
//满30减20
//商品的总价
var total=25;
//判断总价是否满30
if(total>=30){
  //在原来基础之上减20
  total-=20;
}
console.log(total);

//练习：声明变量保存一个人的年龄，如果满18岁打印'成年人'
var age=11;
if(age>=18){
  console.log('成年人');
  console.log('可以独自去旅行');
}

//false: 0  NaN  ''  undefined  null
if(!''){
  console.log('用户名不能为空');
}

//练习：声明变量保存用户的个人签名，如果签名内容为空，设置默认签名'这家伙很懒，什么也没留下'；最后打印出签名
var str='涛哥：非洲真的好大！！！';
//判断签名内容是否为空
if(str===''){//!str
  //设置默认签名
  str='这家伙很懒，什么也没留下';
}
console.log(str);
*/

//逻辑运算符，赋值的时候，选择将其中的一个进行赋值
var n1=2 && 3;//3
var n2=2 || 3;//2
var n3=1 || 0;//1
var n4=0 && 1;//0
console.log(n3,n4);










