/*
var str='http://www.codeboy.com:9999/1.js?a=1';
//把URL转为对象
var obj=new URL(str);
console.log(obj);
//获取查询字符串部分
var qs=obj.searchParams;
console.log(qs);
//获取传递的值
console.log( qs.get('a') );
*/
//练习：获取以下URL中传递的参数
//https://www.tmooc.cn:443/web.html?cid=2112&cname=nodejs
//打印以下格式    课程编号：WEBxxxx  课程名称：xxx
var str='https://www.tmooc.cn:443/web.html?cid=2112&cname=nodejs';
//把URL转为对象
var obj=new URL(str);
//console.log(obj);
//获取查询字符串部分
var qs=obj.searchParams;
console.log(qs);
console.log(`课程编号：WEB${qs.get('cid')}  课程名称：${qs.get('cname')}`);
