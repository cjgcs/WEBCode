const express=require('express');
//引入查询字符串模块
//const querystring=require('querystring');
const app=express();
app.listen(8080);
//托管静态资源到public目录
app.use( express.static('./public') );
//将所有post传递的参数转为对象
app.use( express.urlencoded({
  extended:false   //是否使用第三方的qs模块转对象
}) );
//路由(post /mylogin)
app.post('/mylogin',(req,res)=>{
  //获取post传递的参数
  console.log(req.body);

  //以流的方式传递，通过事件接收
  /*
  req.on('data',(c)=>{
    //console.log(c);
	var str=c.toString();
	//console.log(str);
	//将查询字符串转为对象
	var obj=querystring.parse(str);
	console.log(obj);
  });
  */
  res.send('登录成功');
});