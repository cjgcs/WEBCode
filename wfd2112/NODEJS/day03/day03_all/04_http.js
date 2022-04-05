//引入http模块
const http=require('http');
//创建WEB服务器
const app=http.createServer();
//设置端口
app.listen(8080,()=>{
  console.log('服务器启动成功');
});

//域名/IP地址
// http://127.0.0.1:8080
// http://localhost:8080

//通过事件接收请求，一旦请求进来，自动调用回调函数
app.on('request',(req,res)=>{
  //console.log('有一个请求进来');
  //req 请求的对象
  //res 响应的对象
  //设置响应的内容类型
  res.setHeader('Content-Type','text/html;charset=utf-8');
  //设置响应到浏览器的内容
  res.write('这是你的jianbing');
  //结束并发送
  res.end();
});



