/*
var n=0;
if(n===1){
  console.log('非洲');
}else if(n===2){
  console.log('印度');
}else if(n===3){
  console.log('日本');
}else{
  console.log('八宝山');
}*/
//练习：从后端获取到了订单的状态码，根据订单的状态码打印对应的汉字状态
//1-等待付款 2-等待发货 3-运输中 4-已签收 5-已取消 其他-无法追踪
/*var dd=6;
if(dd===1){
 console.log('等待付款');
}else if(dd===2){
 console.log('等待发货');
}else if(dd===3){
 console.log('运输中');
}else if(dd===4){
 console.log('已签收');
}else if(dd===5){
 console.log('已取消');
}else{
 console.log('无法追踪');
}*/

//练习：声明变量保存一个人的成绩，根据成绩打印对应的状态
//如果不在0~100之间，打印非法的成绩，否则打印状态
//90~100	优秀
//80~90		良好
//70~80		中等
//60~70		及格
//60以下	不及格
/*
var grade=58;
if(grade>=90 && grade<=100){
  console.log('优秀');
}else if(grade>=80 && grade<=90){
  console.log('良好');
}else if(grade>=70 && grade<=80){
  console.log('中等');
}else if(grade>=60 && grade<=70){
  console.log('及格');
}else if(grade>=0 && grade<=60){
  console.log('不及格');
}else{
  console.log('非法的成绩');
}*/

//优化

var score=90;
if(score>100 || score<=0){
  console.log('非法的成绩');
}else if(score>=90){
  console.log('优秀');
}else if(score>=80){
  console.log('良好');
}else if(score>=70){
  console.log('中等');
}else if(score>=60){
  console.log('及格');
}else{
  console.log('不及格');
}


