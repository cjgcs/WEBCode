//练习：编写文件05_static.js，创建WEB服务器，托管静态资源到public目录，目录中创建文件login.html，点击提交向服务器发请求(post  /mylogin)，响应'登录成功'
const express=require('express');
const querystring=require('querystring');
const app=express();
app.listen(8080,()=>{
  console.log('服务器启动成功')
});
app.use(express.static('./public'));

app.post('/mylogin',(req,res)=>{
	req.on('data',(c)=>{
	//c 传递的数据，格式为buffer
	var str=c.toString();
    //console.log(c);
	//转为对象
	var obj=querystring.parse(str);
	console.log(obj);
	});
  res.send('登陆成功');
});


























