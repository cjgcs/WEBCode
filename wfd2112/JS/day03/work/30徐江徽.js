//练习：声明变量保存任意一个城市，使用switch-case判断，根据城市打印输出对应的美食;
var city='山东';
switch(city){
  case '北京':
	  console.log('烤鸭');
	  break;
  case '香港':
	  console.log('鸡蛋仔');
	  break;
  case '台湾':
	  console.log('凤梨酥');
	  break;
  case '长沙':
	  console.log('臭豆腐');
	  break;
  case '广东':
	  console.log('叉烧饭');
	  break;
  default:
	  console.log('美味佳肴');
}


//练习：弹出两次提示框，分别输入商品的单价和数量，计算出商品的总价，假设总价满1000打9折，当前会员卡内有余额1200，如果足以支付，警示框弹出'pay  success'，否则警示框弹出'pay error'
var price=prompt('input price');
var number=prompt('input number');
var jiage=price*num;
console.log(jiage);
if(jiage>=1000){
  jiage*=0.9;
}
console.log(jiage);
var card=1200;
if(jiage<=card){
  alert('pay success');
}else{
  alert('pay error');
}








