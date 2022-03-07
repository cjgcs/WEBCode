//判断一个人是否为成年人
var age=10;
var str=age>=18 ? '成年人' : '未成年人';
//console.log(str);
//练习：声明变量保存用户输入的用户名和密码，判断用户名是否为admin，并且密码为abc123，如果正确打印'登录成功'，否则打印'登录失败'
var user='admin';
var pwd='333123';
var str=user==='admin' && pwd==='abc123' ? '登录成功' : '登录失败';
console.log(str);
//可读性