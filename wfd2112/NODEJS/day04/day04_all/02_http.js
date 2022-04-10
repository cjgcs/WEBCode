//引入http模块
const http=require('http');
//创建WEB服务器
const app=http.createServer();
//设置端口
app.listen(8080);
//添加事件，接收请求作出响应
app.on('request',(req,res)=>{
  //判断请求
  if(req.url==='/index'){
    res.setHeader('Content-Type','text/html;charset=utf-8');
	res.write('<h1>这是首页</h1>');
  }else if(req.url==='/study'){
    res.statusCode=302;
	res.setHeader('Location','https://www.tmooc.cn/');
  }else{
    res.statusCode=404;
	res.write('Not Found');
  }
  //无论响应哪些内容，最后都需要结束并发送
  res.end();
});