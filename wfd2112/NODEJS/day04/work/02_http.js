//引入http模块
const http=require('http');
//创建web服务器
const app=http.createServer();
//设置端口
app.listen(8080);
//添加事件
app.on('request',(req,res)=>{
  //判断请求
  if(req.url==='/index'){
    res.setHeader('Content-Type','text/html;charset=utf-8');
	res.write('<h1>这是首页</h1>');
  }
  else if(req.url==='/study'){
    res.statusCode=302;
	res.setHeader('location','https://www.tmooc.cn/');
  }
  else{
    res.statusCode=404;
	res.write('NOT Found');
  }
  res.end();
});