//判断一个人是否为成年人
var age=21;
if(age>=18){
  console.log('成年人');
}else{
  consol.log('未成年人');
}

//练习：声明变量保存用户输入的用户名和密码，判断用户名是否位admin，并且密码位abc123，如果正确打印’登录成功‘，否则打印’登陆失败‘
var user='admin';
var pwd='abc123';
if(user==='admin' && pwd==='abc123'){
  console.log('登陆成功');
}else{
  console.log('登陆失败');
}
//练习：假设从后端获取到了用户性别的值（1/0）根据值打印具体性别（男/女）
var sex=1;
if(sex){
  console.log('性别为男');
}else{
  console.log('性别为女');
}


console.log(sex ? '男': '女');









