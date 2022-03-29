/*
//创建
var d1=new Date('2022/1/18 11:55:30');
//月份范围0~11 代表1~12月
var d2=new Date(2022,0,18,11,55,30);
var d3=new Date();//当前操作系统时间
//时间戳：距离计算机元年(1970-1-1 0:0:0)的毫秒数
var d4=new Date(0);
//console.log(d4);

//2022-1-1 0:0:0
//52*365*24*60*60*1000=1639872000000

//获取
var d=new Date('2022/1/16 14:27:30');
console.log( d.getFullYear() );
console.log( d.getMonth()+1 );//获取的值0~11
console.log( d.getDate() );
console.log( d.getHours() );
//Minutes  Seconds  Milliseconds
//星期 范围0~6   日~六
console.log( d.getDay() );
//获取时间戳
console.log( d.getTime() );

//练习：创建Date对象，保存当前操作系统的时间，获取日期时间，打印以下格式    ‘今天是xxxx年xx月xx日  星期x’
var d=new Date(); 
var year=d.getFullYear();
var month=d.getMonth()+1;
var date=d.getDate();
var day=d.getDay();//0~6
var arr=['日','一','二','三','四','五','六'];
//如果月份小于10，在前拼接0
if(month<10){
  month='0'+month;
}
console.log('今天是'+year+'年'+month+'月'+date+'日 星期'+arr[day]);
*/
//练习：计算出距离2022年春节(2022/2/1)还有x天x时x分x秒
//创建Date对象，保存当前时间
var d1=new Date();
//创建Date对象，保存2022年春节
var d2=new Date('2022/2/1');
//计算出两者相差的毫数秒
var d=d2.getTime()-d1.getTime();
//console.log(d2-d1);//对象相减得到是相差毫秒数
//将相差的值换算为秒
d=parseInt(d/1000);
//计算相差的秒部分:去除含有的分钟(60)
var second=d%60;
//计算相差的分钟部分：去除含有的小时(3600)，单位是秒，换算为分钟
var minute=parseInt(d%3600/60);
//计算相差的小时部分：去除含有的天(3600*24)，单位是秒，换算为小时
var hour=parseInt(d%(3600*24)/3600);
//计算相差的天部分：换算为天
var day=parseInt(d/(24*3600));
console.log(day,hour,minute,second);



