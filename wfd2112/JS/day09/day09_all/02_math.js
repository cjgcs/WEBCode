//获取圆周率
//console.log(Math.PI);
//绝对值  absolute
//console.log( Math.abs(18-22) );
//parseInt() 取整
//向下取整
//console.log( Math.floor(1.5) );
//向上取整
//console.log( Math.ceil(1.5) );
//四舍五入取整
//console.log( Math.round(1.4) );
//计算次方
//console.log( Math.pow(5,2) );
//获取一组数字最大值
//console.log( Math.max(23,9,78,6,45) );
//获取一组数字最小值
//console.log( Math.min(23,9,78,6,45) );


//获取随机数
//console.log( Math.random() );
//console.log( Math.random() );
//console.log( Math.random() );
/*
//准备数组
var arr=['许亚楠','赵长瑞','蒋胜涛','黄品','梁忠正','柴尚卿','刘帆','霍文','祖贤进','霍彬彬','刘小华','曹萧','常仁武','鲁俊西','张路成'];
//随机点名：获取随机下标0~10之间的整数
//0~1 * 11   0.x~10.x  向下取整  0~10
var n=Math.floor( Math.random()*arr.length );
console.log(n);
console.log('中奖者：'+arr[n]);
//获取数组随机下标：向下取整(随机数*数组长度)
*/
//练习：随机获取a~z之间的4个字母，放入到一个新数组中
var arr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var arr2=[];//准备新数组，用于保存获取的随机
//循环4次，每次获取一个
for(var i=0;i<4;i++){
  //获取随机
  var n=Math.floor( Math.random()*arr.length );
  //console.log(n,arr[n]);
  //把获取的随机放入到新数组arr2
  arr2.push(arr[n]);
  //从原数组删除获取的这个随机元素
  arr.splice(n,1);
}
console.log(arr2);
console.log(arr);