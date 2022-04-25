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
r.post('/reg',(req,res,next)=>{
  //1.1获取post传递的参数
  var obj=req.body;
  console.log(req.body);
  //1.2验证数据是否为空，手机格式是否正确
  if(!obj.uname){
    res.send({code:401,msg:'uname不能为空'});
	//阻止往后执行
    return;
  }
  if(!obj.upwd){
    res.send({code:402,msg:'upwd不能为空'});
	return;
  }
  if(!obj.email){
    res.send({code:403,msg:'email不能为空'});
	return;
  }
  if(!obj.phone){
    res.send({code:404,msg:'phone不能为空'});
	return;
  }
  //验证手机号码格式
  if( !/^1[3-9]\d{9}$/.test(obj.phone) ){
    res.send({code:405,msg:'手机号码格式错误'});
	return;
  }
  //1.3执行SQL命令
  pool.query('insert into xz_user set?',[obj],(err,result)=>{
    if(err){
	  //如果出现SQL相关错误，交给下一个错误处理中间件
	  next(err);
	  //阻止往后执行
	  return;
	}
	console.log(result);
	res.send({code:200,msg:'注册成功'});
  });
});
//2.用户登录接口(post /login)
//接口地址：http://127.0.0.1:8080/v1/users/login
//请求方式：post
r.post('/login',(req,res,next)=>{
  //2.1获取post传递的参数
  var obj=req.body;
  console.log(obj);
  //2.2验证是否为空
  if(!obj.uname){
    res.send({code:401,msg:'uname不能为空'});
	return;
  }
  if(!obj.upwd){
    res.send({code:402,msg:'upwd不能为空'});
	return;
  }
  //2.3执行SQL命令
  pool.query('select * from xz_user where uname=? and upwd=?',[obj.uname,obj.upwd],(err,result)=>{
    if(err){
	  next(err);
	  return;
	}
	console.log(result);
    //结果是数组，如果是空数组说明失败，否则成功
    if(result.length===0){
	  res.send({code:501,msg:'登录失败'});
	}else{
	  res.send({code:200,msg:'登录成功'});
	}
  });
});
//3.删除用户接口(delete /)
//接口地址：http://127.0.0.1:8080/v1/users/
//请求方式：delete
r.delete('/:uid',(req,res,next)=>{
  //3.1获取路由传递的参数
  var obj=req.params;
  console.log(obj);
  //3.2执行SQL命令
  pool.query('delete from xz_user where uid=?',[obj.uid],(err,result)=>{
    if(err){
	  //交给下一个错误处理中间件
	  next(err);
	  return;
	}
	console.log(result);
	//结果是对象，如果对象的affectedRows属性为0删除失败，否则成功
	if(result.affectedRows===0){
	  res.send({code:501,msg:'删除失败'});
	}else{
	  res.send({code:200,msg:'删除成功'});
	}
  }); 
});
//4.查找用户接口(get /info)
//接口地址：http://127.0.0.1:8080/v1/users/info
//请求方式：get
r.get('/info/:uid',(req,res,next)=>{
  //4.1获取路由传递的参数
  var obj=req.params;
  console.log(obj);
  //4.2执行SQL命令   
  pool.query('select * from xz_user where uid=?',[obj.uid],(err,result)=>{
    if(err){
	  next(err);
	  return;
	}
	console.log(result);
	//结果是数组，如果是空数组，说明用户不存在，否则成功
	if(result.length===0){
	  res.send({code:501,msg:'该用户不存在'});
	}else{
	  res.send({code:200,msg:'查找成功',data:result});
	}	
  });  
});
//5.修改用户接口(put /info)
//接口地址：http://127.0.0.1:8080/v1/users/info
//请求方式：put
r.put('/info',(req,res,next)=>{
  //5.1获取post传递的参数
  var obj=req.body;
  console.log(obj);
  //5.2验证各项是否为空
  //遍历对象，获取每个属性
  var i=400;
  for(var k in obj){
	i++;
    //console.log(k,obj[k]);
	//如果属性值为空，则提示属性名这项不能为空
	if(!obj[k]){
	  res.send({code:i,msg:k+'不能为空'});
	  return;
	}
  }
  //验证手机    11:14
  if(!/^1[3-9]\d{9}$/.test(obj.phone)){
    res.send({code:406,msg:'手机格式错误'});
	return;
  }
  //验证邮箱
  if(!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(obj.email)){
    res.send({code:407,msg:'邮箱格式错误'});
	return;
  }
  //5.3执行SQL命令
  pool.query('update xz_user set? where uid=?',[obj,obj.uid],(err,result)=>{
    if(err){
	  next(err);
	  return;
	}
	console.log(result);
	//结果是对象，如果对象向的affectedRows为0表示修改失败，否则修改成功
	if(result.affectedRows===0){
	  res.send({code:501,msg:'修改错误'});
	}else{
	  res.send({code:200,msg:'修改成功'});
	}	
  });
});


//暴露路由器对象
module.exports=r;
