const express=require('express');
const app=express();
app.listen(8080);
//托管静态资源到public目录
app.use( express.static('./public') );
//将post传递的参数转为对象
app.use( express.urlencoded({
  extended:false
}) );
//路由(post /myadd)
//http://127.0.0.1:8080/myadd
app.post('/myadd',(req,res)=>{
  //获取post传递的参数
  console.log(req.body);
  res.send('员工添加成功 姓名：'+req.body.ename);
});