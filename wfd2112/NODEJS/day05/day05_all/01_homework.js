//引入express模块
const express=require('express');
//引入querystring模块
const querystring=require('querystring');
//创建WEB服务器
const app=express();
//设置端口
app.listen(8080);
//路由(get /reg)，响应reg.html
app.get('/reg',(req,res)=>{
  res.sendFile(__dirname+'/reg.html');
});
//路由(get /myreg)
app.get('/myreg',(req,res)=>{
  //获取get传递的参数
  console.log(req.query);
  res.send(`
	注册成功 <br>
	用户名：${req.query.user} <br>
	手机：${req.query.phone} <br>
	邮箱：${req.query.email}
  `);
});

//路由(get /login)，响应login.html
app.get('/login',(req,res)=>{
  res.sendFile(__dirname+'/login.html');
});
//路由(post /mylogin)
app.post('/mylogin',(req,res)=>{
  //post传参没有大小限制，没有类型限制
  //采用流的方式，通过事件获取数据
  //一旦有数据传递，自动调用回调函数
  req.on('data',(c)=>{
	//c 传递的数据，格式为buffer
	var str=c.toString();
    //console.log(str);//user=tao&pwd=123456
    //转为对象
	var obj=querystring.parse(str);
	console.log(obj);
  });
  res.send('登录成功');
});

//商品列表(get /list)  响应 '这是商品列表'
app.get('/product/list',(req,res)=>{
  res.send('这是商品列表');
});
//用户列表(get /list)  响应 '这是用户列表'
app.get('/user/list',(req,res)=>{
  res.send('这是用户列表');
});

