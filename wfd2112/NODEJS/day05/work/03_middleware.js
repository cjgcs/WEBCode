//练习：创建web服务器，添加路由（get /list)，相应'这是用户列表，只有管理员有权限查看'
const express=require('express');
const app=express();
app.listen(8080,()=>{
  console.log('服务器启动成功');
});

function fn(req,res,next){
  //console.log('拦截了/list的请求');
  //获取get传递的参数
  console.log(req.query);
  //验证用户的身份
  //如果不是管理员root，相应'请提供管理员账户'
  if(req.query.user!=='root'){
    res.send('请提供管理员账户');
  }else{
    next();
  }
}
//添加中间件，拦截/list的请求
app.use('/list',fn);

app.get('/list',(req,res)=>{
  res.send('这是用户列表，只有管理员有权限查看');
});


//添加中间件，拦截对/delete的请求，验证用户身份
app.use('/delete',fn)

//练习：添加删除用户的路由(get /delete),相应'用户删除成功';
app.get('/delete',(req,res)=>{
  res.send('用户删除成功');
})

//练习：添加路由(get  /shopping)，用于将商品加入到购物车，传递商品的价格price，添加中间件实现对价格打8折；最后在路由中响应 '商品价格：xx'


function xx(req,res,next){
  console.log(req.query);
  req.query.price*=0.8;
  next();
}

app.use('/shopping',xx);

app.get('/shopping',(req,res)=>{
  console.log(req.query)
  res.send('商品价格：'+req.query.price);
})

//如果之前代码中没有路由相应，则都被这个中间件3拦截
app.use((req,res)=>{
  res.send('很抱歉，你要访问的页面去外太空旅行了'); 
})


