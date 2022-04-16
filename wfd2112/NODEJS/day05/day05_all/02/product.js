//引入express模块
const express=require('express');
//创建路由器对象
const r=express.Router();
//添加路由
//商品列表(get /list)
r.get('/list',(req,res)=>{
  res.send('这是商品列表');
});
//暴露(导出)路由器对象
module.exports=r;