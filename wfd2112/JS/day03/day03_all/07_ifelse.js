/*
//判断一个人是否为成年人
var age=11;
if(age>=18){
  console.log('成年人');
}else{
  console.log('未成年人');
}

//练习：声明变量保存用户输入的用户名和密码，判断用户名是否为admin，并且密码为abc123，如果正确打印'登录成功'，否则打印'登录失败'
var user='admin';
var pwd='123456';
if(user==='admin' && pwd==='abc123'){
  console.log('登录成功');
}else{
  console.log('登录失败');
}
*/
//练习：假设从后端获取到了用户性别的值(1/0)，根据值打印具体性别(男/女)
var sex=0;
if(sex){
  console.log('男');
}else{
  console.log('女');
}

console.log(sex ? '男' : '女');






