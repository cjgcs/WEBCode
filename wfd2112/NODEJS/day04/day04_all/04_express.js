//引入express模块
const express=require('express');
//创建WEB服务器
const app = express();
//设置端口
app.listen(8080);
//路由(get  /search)，响应文件search.html
app.get('/search',(req,res)=>{
  res.sendFile(__dirname+'/search.html');
});
//添加路由，处理按钮提交的请求(get /mysearch)
//响应 '搜索成功 关键字：'
app.get('/mysearch',(req,res)=>{
  //req 请求的对象
  //请求的URL，请求的方法
  //console.log(req.url, req.method);
  //获取get传递的参数
  console.log(req.query);
  res.send('搜索成功 关键字：'+req.query.kw);
});

//路由(get /login)，响应login.html
app.get('/login',(req,res)=>{
  res.sendFile(__dirname+'/login.html');
});
//路由(get /mylogin)，处理按钮的提交
app.get('/mylogin',(req,res)=>{
  //获取get传递的参数
  console.log(req.query);
  res.send('登录成功 欢迎：'+req.query.user);
});

//添加路由(/package get)，介绍某一个包的详情
//响应：这是包的详情  包名称：xx
app.get('/package/:pname',(req,res)=>{
  //路由传参
  //获取路由传参
  console.log(req.params);
  res.send('这是包的详情 包名称:');
});
//练习：添加路由(get  /shopping)，传递商品的编号lid，响应‘添加购物车成功，商品编号：xx’
app.get('/shopping/:lid',(req,res)=>{
  //获取路由传参
  console.log(req.params);
  res.send('添加购物车成功，商品编号：'+req.params.lid);
});

