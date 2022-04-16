const express=require('express');
const app=express();
app.listen(8080);

//托管静态资源，如果要请求静态资源，自动到public目录下寻找
app.use( express.static('./public') );
