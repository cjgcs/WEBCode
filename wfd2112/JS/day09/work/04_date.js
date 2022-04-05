/*
var d=new Date();
//转为本地字符串格式
console.log(d.toLocaleString());
console.log(d.toLocaleDateString());
console.log(d.toLocaleTimeString());
*/


/**/
var a=new Date('2022/1/18 16:34:50');
//修改
//a.setFullYear(2077);
//a.setMonth(12);
//3年后
a.setFullYear( a.getFullYear()+3);
//2个月前
a.setMonth( a.getMonth()-2);
a.setMonth( a.getMonth()-2);
//星期不允许修改
//d.setDay(1);
//时间戳可以修改，产生新的日期时间
//d.setTime(1500000000000);
console.log(a.toLocaleString());
console.log(a);

/*
//练习：创建Date对象，保存一个员工的入职时间2022/2/10，假设合同期为3年，计算出到期时间；最后打印出两组日期时间的本地字符串形式
var a=new Date('2022/2/10');//设置入职时间
var a1=new Date(a);//拷贝入职时间，作为到期时间
a1.setFullYear(a.getFullYear()+3);

console.log('入职时间：'+a.toLocaleString());
console.log('到期时间：'+a1.toLocaleString());
*/













