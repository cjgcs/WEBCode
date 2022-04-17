const express=require('express');
const app=express();
app.listen(8080,()=>{
  console.log('服务器启动成功')
});

//托管静态资源，如果要请求静态资源，自动到pubilc目录下寻找
app.use(express.static('./public'))




