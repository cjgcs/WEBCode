//引入express模块
const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//console.log(pool);
//创建路由器对象
const r=express.Router();
//1.用户注册接口(post /reg)
//接口地址：http://127.0.0.1:8080/v1/users/reg
//请求方式：post
r.post('/reg',(req,res)=>{
  res.send('注册成功');
};

//暴露路由器对象
module.exports=r;
module.exports = Router;
