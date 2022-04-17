//练习：添加路由(get  /login)，响应login.html，点击提交向服务器发请求(post  /mylogin)，响应'登录成功'
const express=require('express');
//引入querystring模块
const querystring=require('querystring');
const app=express();
app.listen(8080,()=>{
  console.log('服务器启动成功');
});
app.get('/login',(req,res)=>{
  res.sendFile(__dirname+'/login.html');
});
/*
app.post('/mylogin',(req,res)=>{
  //post传参没有大小和文件类型限制
  //采用流的方式，通过事件获取数据
  //一旦有数据传递，自动调用回调函数
  req.on('data',(c)=>{
	//c 传递的数据，格式为buffer
	var str=c.toString();
    console.log(str);
	//转为对象
	var obj=querystring.parse(str);
	console.log(obj);
  });
  res.send('登录成功');
});
*/



app.get('/product/list',(req,res)=>{
  res.send('这是商品列表');
});

app.get('/user/list',(req,res)=>{
  res.send('这是用户列表');
});













