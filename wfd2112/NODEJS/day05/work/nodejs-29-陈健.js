//练习：创建WEB服务器，托管静态资源到public目录，包含文件add.html，点击提交向服务器发请求(post  /myadd)，响应'员工添加成功，姓名：xx'
const express=require('express');
const app=express();
app.listen(8080,()=>{
  console.log('服务器启动成功');
});
app.use(express.static('./public'));
app.use(express.urlencoded({
  extended:false
}));
app.post('/myadd',(req,res)=>{
	console.log(req.body);
  res.send('员工添加成功，姓名：'+req.body.user)
});













