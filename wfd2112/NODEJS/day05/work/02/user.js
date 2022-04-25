//引入express模块
const express=require('express');
//创建路由器对象
const x=express.Router();
//添加路由
x.get('/list',(req,res)=>{
  x.send('这是用户列表');
});
module.export=x;












