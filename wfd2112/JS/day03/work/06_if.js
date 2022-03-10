//商品的总价
/*var total=35;
//判断总价是否满30
if(total>=30){
  //在原来的基础上减20
  total-=20;
}
console.log(total);
*/
//练习:声明变量保存一个人的年龄，如果满18岁打印'成年人'
var age=2;
if(age>=18){
  console.log('成年人');
}

//false: 0 NaN '' undefined null
/*if(0){
 console.log('ok');
}*/
//练习:声明变量保存用户的个人签名，如果签名内容为空，设置默认签名'这家伙很懒，什么也没留下'；最后打印输出
//var qm='';
/*if(qm==''){
 qm='这家伙很懒，什么也没留下';
}*/
/*if(!qm){
 qm='这家伙很懒，什么也没留下';
}
console.log(qm);*/



//逻辑运算符，赋值的时候，选择将其中一个进行赋值
//（与）当第一个隐式转换为false，则赋值第一个，当第一个隐式转换成true，则将第二个赋值覆盖第一个赋值
//（或）哪一个先是true就赋值哪一个
var a=1 && 0;//0
var b=2 || 3;//2
var c=0 || 1;//1
var d=0 && 1;//0
console.log(a,b,c,d);
















