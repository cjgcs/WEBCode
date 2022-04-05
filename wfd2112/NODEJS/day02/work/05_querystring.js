//引入查询字符串模块
const querystring=require('querystring');
//console.log(querystring);
//查询字符串
//参数名=参数值
var str='kw=手机&a=1&b=2';
//获取传递参数
var a=querystring.parse(str);
console.log(a);
console.log(a.kw);

//练习：获取以下查询字符串传递参数
//    user=tao&pwd=123456
//  打印以下格式    用户名：xxx   密码：xx
var b='user=tao&pwd=123456';
var b1=querystring.parse(b);
console.log('用户名：'+b1.user+'   '+'密码：'+b1.pwd);
console.log(`用户名：${b1.user}   密码：${b1.pwd}`);









