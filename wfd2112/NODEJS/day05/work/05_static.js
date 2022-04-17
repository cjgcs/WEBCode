const express=require('express');
//const querystring=require('querystring');
const app=express();
app.listen(8080,()=>{
  console.log('服务器启动成功')
});
app.use(express.static('./public'));
//将所有post传递的参数转为对象
app.use( express.urlencoded({
  extended:false  //是否使用第三方qs模块转对象
}));

app.post('/mylogin',(req,res)=>{
	//获取post传递的参数
	console.log(req.body);

	/*
	req.on('data',(c)=>{
	//c 传递的数据，格式为buffer
	var str=c.toString();
    //console.log(c);
	//转为对象
	var obj=querystring.parse(str);
	console.log(obj);
	});
	*/
  res.send('登陆成功');
});







