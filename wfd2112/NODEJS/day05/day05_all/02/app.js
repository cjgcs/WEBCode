//引入express模块
const express=require('express');
//引入商品路由器
const productRouter=require('./product.js');
//引入用户路由器
const userRouter=require('./user.js');
console.log(userRouter);
//创建WEB服务器
const app=express();
//设置端口
app.listen(8080);
//使用路由器，所有的路由挂载到WEB服务器下
//可以给所有路由添加前缀/product
//所有的路由的URL多了前缀   /list -> /product/list
app.use('/product',productRouter);
//使用用户路由器，给所有的路由添加前缀/user
// /user/list
app.use('/user',userRouter);