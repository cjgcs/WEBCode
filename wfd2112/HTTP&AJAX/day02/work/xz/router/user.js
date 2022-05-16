// 路由器模块
const express =require('express')
const pool=require('../pool')
const router=express.Router()
module.exports=router

router.get('/check_uname',(req,res)=>{
	const n=req.query.uname
	pool.query('select uid from xz_user where uname=?',[n],(err,result)=>{
		if(err){
		throw err
		}
		if(result.length>0){
			res.send('exists')
		}else{
			res.send('no-exists')
		}
	})
})

router.get('/login',(req,res)=>{
	const uname=req.query.username
	const pwd=req.query.password
	console.log(uname)
	pool.query('select uid from xz_user where uname=? and upwd=?',[uname,pwd],(err,result)=>{
		if(err){
		throw err;
		}
		if(result.length>0){
			res.send('登录成功')
		}else{
			res.send('登录失败')
		}
	})
})