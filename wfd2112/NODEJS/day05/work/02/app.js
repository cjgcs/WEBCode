//引入express模块
const express=require('express');
//引入商品路由器
const productRouter=require('./product.js');
//引入用户路由器
const userRouter=require('./user.js');
//创建WEB服务器
const app=express();
//设置端口
app.listen(8080,()=>{
  console.log('服务器启动成功');
});
//使用路由器，所有的路由器挂载到web服务器下
//可以给所有的路由添加前缀/product
//所有的路由的URL多了前缀	/list-> /product/list
app.use('/product',productRouter);
app.use('/user',userRouter);











