/*
//练习：声明变量保存任意一个城市，使用switch-case判断，根据城市打印输出对应的美食;
var city='成都';
switch(city){
  case '北京':
    console.log('烤鸭');
    break;
  case '重庆':
    //console.log('火锅');
    //break;
  case '成都':
	console.log('火锅');
    break;
  case '郑州':
	console.log('烩面');
    break;
  default:
	console.log('拉面');
}
*/
//练习：弹出两次提示框，分别输入商品的单价和数量，计算出商品的总价，假设总价满1000打9折，当前会员卡内有余额1200，如果足以支付，警示框弹出'pay  success'，否则警示框弹出'pay error'
var price=prompt('input price');
var num=prompt('input num');
//计算出总价
var total=price*num;
console.log(total);
//判断总价是否满1000
if(total>=1000){
  //打九折
  total*=0.9;
}
console.log(total);
//当前会员卡余额
var card=1200;
//判断是否足以支付
if(total<=card){
  alert('pay success');
}else{
  alert('pay error');
}
