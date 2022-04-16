//使用express创建WEB服务器，设置端口，添加路由(get  /reg)，响应注册文件reg.html，点击提交(get  /myreg)，响应'注册成功  用户名：xx  邮箱：xx  手机：xx'

//引入express模块
const express=require('express');
//创建web服务器
const app=express();
//设置端口
app.listen(8080,()=>{
  console.log('服务器启动成功')
});
//添加路由(get  /reg)
app.get('/reg',(req,res)=>{	
  res.sendFile(__dirname+'/reg.html'); //响应注册文件reg.html
});
app.get('/myreg',(req,res)=>{
  console.log(req.query);
  res.send('注册成功 用户名：'+req.query.yh+'邮箱：'+req.query.yx+'手机：'+req.query.sj);
  //res.send(`注册成功  用户名:${req.query.yh}  
  //邮箱：${req.query.yx} 手机：${req.query.sj}`);
});







