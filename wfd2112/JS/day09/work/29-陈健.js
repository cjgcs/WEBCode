//作业：// 创建时间对象，保存员工的入职时间2022/3/31 合同期限是3年，计算到期时间，最后打印两组
// 日期时间的本地字符串格式
var a=new Date('2022/3/31 13:00:00');
var a1=new Date(a);
a.setFullYear(a1.getFullYear()+3);
console.log('入职时间：'+a.toLocaleString());
console.log('到期时间：'+a1.toLocaleString());
