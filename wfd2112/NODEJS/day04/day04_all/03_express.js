//引入express模块
const express=require('express');
//console.log(express);
//创建WEB服务器
const app=express();
//设置端口
app.listen(8080,()=>{
  console.log('服务器启动成功');
});

//路由
//处理对首页的请求
//请求的URL:/index   请求的方法:get
app.get('/index',(req,res)=>{
  //req 请求的对象
  //res 响应的对象
  //设置响应的内容并发送
  res.send('<h1>这是首页</h1>');
});
//练习：添加商品列表的路由
//请求的URL: /list  请求的方法: get
//响应'这是商品列表'
app.get('/list',(req,res)=>{
  res.send('这是商品列表');
});
//请求学习的路由
//请求的URL: /study  请求的方法: get
//跳转到tmooc
app.get('/study',(req,res)=>{
  //设置响应的重定向并发送
  res.redirect('https://www.tmooc.cn/');
});
//练习：添加路由
//请求的URL: /  请求的方法:get
//跳转到 /index
app.get('/',(req,res)=>{
  res.redirect('/index');
});

//添加路由
//请求的URL: /code  请求的方法:get
//响应文件1.html并发送
app.get('/code',(req,res)=>{
  //res.sendFile('D:\\WEB2112\\NODEJS\\day04\\1.html');
  res.sendFile(__dirname+'/1.html');
});

console.log(__dirname);


