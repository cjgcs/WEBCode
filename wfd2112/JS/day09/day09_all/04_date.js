/*
var d=new Date();
//转为本地字符串
console.log( d.toLocaleString() );
console.log( d.toLocaleDateString() );
console.log( d.toLocaleTimeString() );


var d=new Date('2022/1/18 16:34:50');
//修改
//d.setFullYear(2023);
//d.setMonth(12);
//3年后：设置的年份的值为当前年份加3
d.setFullYear( d.getFullYear()+3 );
//2个月前
d.setMonth( d.getMonth()-2 );
//星期不允许修改
//d.setDay(6);
//时间戳可以修改，产生新的日期时间
d.setTime(1500000000000);

console.log( d.toLocaleString() );
*/

//练习：创建Date对象，保存一个员工的入职时间2022/2/10，假设合同期为3年，计算出到期时间；最后打印出两组日期时间的本地字符串形式
var d1=new Date('2022/2/10');//入职时间
//拷贝Date对象，作为到期时间
var d2=new Date(d1);
//设置为3年后
d2.setFullYear( d2.getFullYear()+3 );
console.log('入职时间：'+d1.toLocaleDateString());
console.log('到期时间：'+d2.toLocaleDateString());



