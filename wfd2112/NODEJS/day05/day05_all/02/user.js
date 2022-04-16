//引入express模块
const express=require('express');
//创建路由器对象
const r=express.Router();
//添加路由(get /list)
r.get('/list',(req,res)=>{
  res.send('这是用户的列表');
});
//暴露路由器对象
module.exports=r;