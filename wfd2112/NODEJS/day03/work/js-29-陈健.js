//使用http模块创建WEB服务器并设置端口，添加事件接收浏览器的请求并作出响应   ‘<h1>欢迎来到学子商城~</h1>’

//引入http模块
const http=require('http');
//创建WEB服务器
const app=http.createServer();
//设置端口
app.listen(8082,()=>{});


//通过事件接受请求,一旦请求进来,自动调用回调函数
app.on('request',(req,res)=>{
  //console.log('有一个请求进来了');
  //req 请求的对象
  //res 响应的对象
  //设置响应的内容类型
  res.setHeader('Content-Type','text/html;charset=utf-8')
  //设置响应到浏览器的内容
  res.write('<h1>欢迎来到学子商城~</h1>');
  //结束并发送
  res.end();
});













