/*
var str='http://www.codeboy.com:9999/1.js?a=1';
//把url转为对象
var a=new URL(str);
//console.log(a);
//获取查询字符串部分
var a1=a.searchParams;
console.log(a1);
//获取传递的指值
console.log(a1.get('a'));
*/

//练习：获取以下URL中传递的参数
//   https://www.tmooc.cn:443/web.html?cid=2112&cname=nodejs
//  打印以下格式    课程编号：WEBxxxx  课程名称：xxx

var b=new URL('https://www.tmooc.cn:443/web.html?cid=2112&cname=nodejs');
//console.log(b);
var b1=b.searchParams;
console.log(`课程编号：WEB${b1.get('cid')}    课程名称：${b1.get('cname')}`);












