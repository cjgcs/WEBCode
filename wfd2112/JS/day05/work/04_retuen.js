/*function add(a,b){
  console.log(a+b);
  //return '大腰子';
  //return a+b;//结束函数调用
  //return; //结束调用，没有返回结果
}
var a=add(2,3);
console.log('两个数相加的和：'+a);
*/

//练习：创建函数getMax1，传递任意两个数字，返回最大值
/*function getMax1(c,d){
	/*if(c>d){
	  return c;
	  //console.log(c);
	}else{
	  return d;
	  //console.log(d);
	}

	return c>d ? c : d;
}
//getMax1(14,2);
var max=getMax1(14,2);
console.log(max);
*/

//练习：创建函数getMax2，传递任意三个数字，返回最大值
/*
function getMax2(a,b,c){
	if(a>b && a>c){
	  return a;
	}else if(b>c){
	  return b;
	}else{
	  return c;
	}
}
var max2=getMax2(1,4,6);
console.log(max2);
*/

//练习：创建函数getStatus，传递订单的状态码，返回对应的状态
/*
function getStatus(a){
  switch(a){
    case 1:
		return '等待付款';
	    break;
	case 2:
		return '等待发货';
	    break;
	case 3:
		return '运输中';
	    break;
	case 4:
		return '已签收';
	    break;
	case 5:
		return '已取消';
	    break;
	default:
		return '无法追踪';
  }
}
console.log(getStatus(3));
*/

//练习：创建函数isRun，传递任意一个年份，查看是否为闰年，返回布尔型的值
function isRun(y){
	if(y%4===0 && y%100!==0 || y%400===0){
		return true;
	}
		return false;
}
console.log(isRun(2020));























