/**路由器模块  封装和user相关的路由**/
//引入必须模块
const express = require('express')
const pool = require('../pool')
const router = express.Router()
module.exports = router

router.get('/check_uname',(req,res)=>{
	const n = req.query.uname
	pool.query('select uid from xz_user where uname=?'
	,[n],(err,result)=>{
		if(err)
		throw err
		if(result.length>0){
			res.send('exists')
		}else{
			res.send('non-exists')
		}
	})
})


//获取get请求用来验证用户名
//请求路径   请求参数    根据参数查询数据库  响应给客户端

router.get('/login',(req,res)=>{
	//获取get请求传入的参数
	const uname = req.query.username
	const pwd = req.query.password
	//根据用户和密码查询用户uid
	console.log(uname)   //能否正确接收客户端传递过来的数据
	pool.query('select uid from xz_user where uname=? and upwd=?'
	,[uname,pwd],(err,result)=>{
		if(err){
			throw err;                             
		}
		//如果查询到的result结果集中有数据
		if(result.length>0){
			res.send("登录成功")
		}else{
			res.send("登录失败")
		}
	})
})
