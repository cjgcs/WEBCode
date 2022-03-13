function add(a,b){
  console.log(a+b);
  //函数调用后得到的结果
  //return '大腰子';
  //return a+b;//结束函数调用
  //return; //结束调用，没有返回结果
  console.log('结束');
}
//var n=add(2,3);
//console.log('两个数字相加的和：'+n);

//练习：创建函数getMax1，传递任意两个数字，返回最大值
function getMax1(a,b){
  /*
  if(a>b){
    return a;
  }else{
    return b;
  }
  */
  return a>b ? a : b;
}
//var n=getMax1(3,5);
//console.log(n);



//练习：创建函数getMax2，传递任意三个数字，返回最大值
function getMax2(a,b,c){
  /*
  if(a>b && a>c){
    return a;
  }else if(b>c){
    return b;
  }else{
    return c;
  }
  */
  return a>b && a>c ? a : (b>c ? b : c);
}
//console.log( getMax2(3,6,8) );
//练习：创建函数getStatus，传递订单的状态码，返回对应的状态
//1-等待付款  2-等待发货  3-运输中  4-已签收  5-已取消  其它-无法追踪
function getStatus(n){
  switch(n){
    case 1:
	  return '等待付款';
	  //break;
	case 2:
	  return '等待发货';
	  //break;
	case 3:
	  return '运输中';
	  //break;
	case 4:
	  return '已签收';
	  //break;
	case 5:
	  return '已取消';
	  //break;
	default:
	  return '无法追踪';
  }
}
//console.log( getStatus(1) );
//练习：创建函数isRun，传递任意一个年份，查看是否为闰年，返回布尔型的值
function isRun(year){
  /*
  if(year%4===0 && year%100!==0 || year%400===0){
    return true;
  }
  return false; 
  */
  return year%4===0 && year%100!==0 || year%400===0;
}
console.log( isRun(2020) );



