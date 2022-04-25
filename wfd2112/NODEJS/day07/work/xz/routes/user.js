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
   //获取post传递的参数
   var x=req.body;
   console.log(req.body);
   //验证数据是否为空，格式是否正确
   if(!x.uname){
     res.send({code:401,msg:'uname不能为空'});
	 return;
   }
   if(!x.upwd){
     res.send({code:402,msg:'upwd不能为空'});
	 return;
   }
   if(!x.email){
     res.send({code:403,msg:'email不能为空'});
	 return;
   }
   if(!x.phone){
     res.send({code:404,msg:'phone不能为空'});
	 return;
   }
   var p=/^1[3-9]\d{9}$/;
   if( !p.test(x.phone) ){
    res.send({code:405,msg:'手机号码格式错误'});
	return;
  }
   //执行sql命令
   pool.query('insert into xz_user set?',[x],(err,result)=>{
    if(err){
	  //如果出现SQL相关错误，交给下一个错误处理中间件
	  next(err);
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
  var b=req.body;
  console.log(b);
  if(!b.uname){
    res.send({code:401,msg:'用户不能为空'});
  }
  if(!b.upwd){
    res.send({code:402,msg:'密码不能为空'});
  }
  pool.query('select * from xz_user where uname=? and upwd=?',[b.uname,b.upwd],(err,result)=>{
    if(err){
	  next(err);
	  return;
	}
	console.log(result);
	if(result.length===0){
	  res.send({code:501,msg:'登录失败'});
	}else{
	  res.send({code:200,msg:'登录成功'})
	}
  });  
  //res.send({code:501,msg:'登录失败'})
});

//3.删除用户接口(delete /)
//接口地址：http://127.0.0.1:8080/v1/users/
//请求方式：delete
r.delete('/',(req,res,next)=>{
  var c=req.body;
  console.log(c);
  if(!c.uid){
    res.send({code:401,msg:'用户编号不能为空'});  
  }
  pool.query('delete from xz_user where uid=?',[c.uid],(err,result)=>{
	  if(err){
		next(err);
		return;
	  }
	  console.log(result);
	  if(req.affectedRows===0){
		res.send({code:402,msg:'删除失败，没有该用户'});
	  }else{
	    res.send({code:200,msg:'删除成功'});
	  }
  });
  
});


//4.查找用户接口(get /info)
//接口地址：http://127.0.0.1:8080/v1/users/info
//请求方式：get

r.get('/info/:uid',(req,res,next)=>{
  var d=req.params;
  console.log(d);
  //if(!d.uid){
  //  res.send({code:401,msg:'用户编号不能为空'});
  //}
  pool.query('select * from xz_user where uid=?',[d.uid],(err,result)=>{
    if(err){
	  next(err);
	  return;
	}
	console.log(result);
	if(result.length===0){
	  res.send({code:401,msg:'查找失败，该用户不存在'});
	}else{
	  res.send({code:200,msg:'查找成功',date:result});
	}
  });
  
});



//练习：编写修改用户数据的接口(put  /info)，传递用户的编号、邮箱、手机、真实姓名、性别，获取传递的参数，验证各项是否为空，执行SQL命令，判断修改是否成功

//5.修改用户接口(put /info)
//接口地址：http://127.0.0.1:8080/v1/users/info
//请求方式：put

r.put('/info',(req,res,next)=>{
	var e=req.body;
	console.log(e);
    /*
	if(!e.uname){
	  res.send({code:401,msg:'用户名不能为空'});
	}
    if(!e.email){
	  res.send({code:403,msg:'邮箱不能为空'});
	}
    if(!e.phone){
	  res.send({code:404,msg:'电话不能为空'});
	}
    if(!e.user_name){
	  res.send({code:406,msg:'真实姓名不能为空'});
	}
    if(!e.gender){
	  res.send({code:407,msg:'性别不能为空'});
	}
	*/
	var i=400;
	for(var k in e){
		i++;
	  //console.log(k,e[k]);
	  if(!e[k]){
	    res.send({code:i,msg:k+'不能为空'});
	  }
	}

	//验证手机
	if(!/^1[3-9]\d{9}$/.test(e.phone)){
	  res.send({code:407,msg:'手机格式错误'});
	}
	
	//验证邮箱
	if(!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(e.email)){
    res.send({code:408,msg:'邮箱格式错误'});
	return;
    }
	//SQL语句
	pool.query('update xz_user set? where uid=?',[e,e.uid],(err,result)=>{
	  if(err){
	    next(err);
		return;
	  }
	  console.log(result);
	  if(result.affectedRows===0){
	    res.send({code:501,msg:'修改失败'});
	  }else{
	    res.send({code:200,msg:'修改成功'});
	  }
	})
  
});







module.exports=r;