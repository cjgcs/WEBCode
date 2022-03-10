//练习：声明变量保存任意一个城市，使用switch-case判断，根据城市打印输出对应的美食;
var city='山东';
switch(city){
  case '北京':
	  console.log('北京烤鸭');
	  break;
  case '天津':
	  console.log('煎饼果子');
	  break;
  case '河北':
	  console.log('驴肉火烧');
	  break;
  case '辽宁':
	  console.log('麻辣拌');
	  break;
  case '山西':
	  console.log('刀削面');
	  break;
  case '福建':
	  console.log('沙县小吃');
	  break;
  case '安徽':
	  console.log('淮南牛肉汤');
	  break;
  case '山东':
	  console.log('黄焖鸡');
	  break;
  default:
	  console.log('美食');
}


//练习：弹出两次提示框，分别输入商品的单价和数量，计算出商品的总价，假设总价满1000打9折，当前会员卡内有余额1200，如果足以支付，警示框弹出'pay  success'，否则警示框弹出'pay error'
var price=prompt('input price');
var number=prompt('input number');
var sum=price*number;
console.log(sum);
if(sum-1000>=0){
  sum*=0.9;
  console.log(sum);
}
if(1200-sum>=0){
  var ye=1200-sum;
  alert('pay success, 您的余额为：'+ye+'元');
}else{
  var ye=-(1200-sum);
  alert('pay error, 您还缺少：'+ye+'元');
}









