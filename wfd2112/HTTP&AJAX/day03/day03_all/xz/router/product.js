/**** 路由器模块  封装着与  product(商品)相关的路由 ****/
//引入必须的模块
const express = require('express')
const pool = require('../pool')
const router = express.Router()
module.exports = router
  
/* 路由:向客户端输出商品列表
			请求方法 ： GET
			请求地址    /v2/product/list
			请求查询字符串数据，pageSize - （可选）
			http://127.0.0.1:8080/v2/product/list?pageSize=10
			为了提升用户体验从实际业务出发,将默认显示10条数据
			如果用户指定了查询条数，那么显示用户需要的
			如果用户没有指定查询条数，显示10条
*/
router.get('/list',(req,res)=>{
	let ps = req.query.pageSize  //客户端提交的查询字符串数据都是String
	ps = ps ? parseInt(ps) : 10     //如果客户端提交ps则用原值，否则设置为10
	let sql = 'SELECT lid,title,price FROM xz_laptop LIMIT ?'
	pool.query(sql,[ps],(err,result)=>{
		if(err){
			throw err
		}
		res.send(result)  //自带序列化
	})
})

/**
 * 路由：根据id删除用户，并返回删除成功
 * 							请求方式/方法  get
 * 							请求地址       /v2/product/del
 * 							请求删除的字符串数据    lid
 * 							http://127.0.0.1:8080/v2/product/del?lid=5
 * 							执行数据库语句，并返回结果
 * 							DELETE FROM xz_laptop WHERE lid=?
 * 							响应给客户端  "删除成功"
 */
router.get('/del',(req,res)=>{
	//将lid从请求中获取出来作为删除条件
	let lid = req.query.lid
	pool.query('DELETE FROM xz_laptop WHERE lid=?'
	,[lid],(err,result)=>{
		//获取结果中删除成功的行数
		if(result.affectedRows > 0){//若结果被删除的行数超过了0
			res.send("删除成功")
		}else{//否则
			res.send("删除失败")
		}
	})
})