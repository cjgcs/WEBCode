//判断一个人是否为成年人
/*var age=17;
var str=age>=18 ? '成年人' : '未成年人';
console.log(str);*/
//练习：声明变量保存用户输入的用户名和密码，判断用户名是否位admin，并且密码位abc123，如果正确打印’登录成功‘，否则打印’登陆失败‘
var account='admin';
var pwd='abc23';
var a=account==='admin' && pwd==='abc123' ? '登录成功' : '登陆失败';
console.log(a);