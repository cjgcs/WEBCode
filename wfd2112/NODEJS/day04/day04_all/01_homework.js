//引入http模块
const http=require('http');
//引入fs模块
const fs=require('fs');
//创建WEB服务器
const app=http.createServer();
//设置端口
app.listen(8080,()=>{
  console.log('服务器启动成功');
});
//添加事件，接收请求作出响应
app.on('request',(req,res)=>{
  //req请求的对象
  //获取请求的URL，请求的方式
  console.log(req.url, req.method);
  //res响应的对象
  /*
  res.setHeader('Content-Type','text/html;charset=utf-8');
  res.write('<h1>欢迎来到学子商城~</h1>');
  res.end();
  
  //设置响应的状态码为302
  res.statusCode=302;
  //设置跳转的URL
  res.setHeader('Location','https://www.tmooc.cn/');
  //结束并发送
  res.end();
  
  //设置响应状态码404
  res.statusCode=404;
  //设置响应浏览器内容为 ‘Not Found’
  res.write('Not Found');
  //结束并发送
  res.end();
  */
  //创建1.html文件，随便写内容；读取文件1.html的内容，把读取的内容（fs.readFileSync）作为要响应的内容，最后结束并发送
  var d=fs.readFileSync('./1.html');
  //把读取的内容作为响应的内容，会自动把buffer转为字符串
  res.write(d);
  //结束并发送
  res.end();
});



