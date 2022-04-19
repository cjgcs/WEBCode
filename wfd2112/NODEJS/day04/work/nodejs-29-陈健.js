//添加路由get /login响应登录的网页login.html点击提交向服务器发送请求（get /mylogin）
//响应登录成功欢迎xxx

const express=require('express');
const app=express();
app.listen(8080,()=>{
  console.log('服务器启动成功');
});
app.get('/login',(req,res)=>{
  res.sendFile(__dirname+'/login.html');
});
app.get('/mylogin',(req,res)=>{
  res.send('登录成功 欢迎：'+req.query.yh);
});


//login.html
<h1>用户登录</h1>
<form method='get' action='mylogin'>
  用户<input type='text' name='yh'><br>
  密码<input type='text' name='mm'><br>
  <input type='submit' >
</form>










