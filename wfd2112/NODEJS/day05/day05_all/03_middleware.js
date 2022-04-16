//练习：创建WEB服务器，添加路由(get /list)，响应'这是用户列表，只有管理员有权限查看'
const express=require('express');
const app=express();
app.listen(8080);

function fn(req,res,next){
  //console.log('拦截了对/list的请求');
  //获取get传递的参数
  console.log(req.query);
  //验证用户的身份
  //如果是不是管理员root，响应'请提供管理员账户'
  if(req.query.user!=='root'){
    res.send('请提供管理员账户');
  }else{//否则是管理员
    //往后继续执行，可能是下一个中间件或者路由
    next();
  }
}
//添加中间件，拦截对/list的请求  
app.use('/list',fn);
//路由(get /list)
app.get('/list',(req,res)=>{
  res.send('这是用户列表，只有管理员有权限查看');
});
//添加中间件，拦截对/delete的请求，验证用户身份
app.use('/delete',fn);
//练习：添加删除用户的路由(get /delete)，响应'用户删除成功';
app.get('/delete',(req,res)=>{
  res.send('用户删除成功');
});
function fun(req,res,next){
  //获取get传递的参数
  console.log(req.query);
  //打8折
  req.query.price*=0.8;
  //往后执行
  next();
}
//中间件拦截对/shopping的请求
app.use('/shopping',fun);
//路由(get  /shopping)
app.get('/shopping',(req,res)=>{
  //获取get传递的参数
  console.log(req.query);
  res.send('商品的价格：'+req.query.price);
});


//如果之前代码中没有路由响应，都被这个中间件拦截  
//没有拦截的URL，拦截所有的
app.use( (req,res)=>{
  res.send('<h1>很抱歉，你要访问的页面正在旅行中..</h1>');
} );
