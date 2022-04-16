//引入express模块
const express=require('express');
//创建web服务器
const app=express();
//设置端口
app.listen(8080,()=>{
  console.log('服务器启动成功')
});


//路由
//处理对首页的请求
//请求的URL:/index	请求的方法:get
app.get('/index',(req,res)=>{
  //req 请求的对象
  //res 相应的对象
  //设置相应的内容并发送
  res.send('<h1>这是首页</h1>');
});
//添加商品列表的路由
//请求的URL：/list	请求的方法:get
app.get('/list',(req,res)=>{
  res.send('这是商品列表')
})

//请求学习的路由
//请求的URL：/study		请求的方法：get
app.get('/study',(req,res)=>{
	//设置相应的重定向并发送
  res.redirect('https://www.tmooc.cn/')
});

//添加路由
//请求的URL：/	请求的方法：get
//跳转到 /index
app.get('/',(req,res)=>{
  res.redirect('/index')
});

//添加路由
//请求的URL：/code	请求的方法：get
//相应文件1.html并发送
app.get('/code',(req,res)=>{
  //res.sendFile('F:\\TMOOC\\WEBCode\\wfd2112\\NODEJS\\day04\\work/1.html')
  res.sendFile(__dirname+'/1.html')
});
