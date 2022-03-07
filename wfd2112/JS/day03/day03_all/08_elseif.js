/*
var n;
if(n===1){
  console.log('非洲');
}else if(n===2){
  console.log('印度');
}else if(n===3){
  console.log('日本');
}else{
  console.log('八宝山');
}

//练习：假设从后端获取到了订单的状态码，根据订单的状态码打印出对应的汉字状态
//1-等待付款  2-等待发货  3-运输中  4-已签收  5-已取消  其它-无法追踪
var status=2;
if(status===1){
  console.log('等待付款');
}else if(status===2){
  console.log('等待发货');
}else if(status===3){
  console.log('运输中');
}else if(status===4){
  console.log('已签收');
}else if(status===5){
  console.log('已取消');
}else{
  console.log('无法追踪');
}
*/
//练习：声明变量保存一个人的成绩，根据成绩打印对应的状态
//如果不在0~100之间，打印非法的成绩，否则打印状态
//90  ~100     优秀
//80~90以下  良好
//70~80以下  中等
//60~70以下  及格
//60以下     不及格
var score=55;
if(score>100 || score<0){
  console.log('非法的成绩');
}else if(score>=90){//score>=0  score<=100
  console.log('优秀');
}else if(score>=80){ //score<90
  console.log('良好');
}else if(score>=70){ //score<80
  console.log('中等');
}else if(score>=60){ //score<70
  console.log('及格');
}else{ //score<60
  console.log('不及格');
}
