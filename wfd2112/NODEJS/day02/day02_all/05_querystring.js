//引入查询字符串模块
const querystring=require('querystring');
/*
//console.log(querystring);
//查询字符串
//参数名=参数值
var str='kw=手机&a=1&b=2';
//获取传递参数{kw:'手机',a:1,b:2}
var obj=querystring.parse(str);
console.log(obj);
console.log(obj.kw);
*/
//练习：获取以下查询字符串传递参数
var str='user=tao&pwd=123456';
var obj=querystring.parse(str);
console.log(obj);
console.log(`用户名：${obj.user} 密码：${obj.pwd} `);



