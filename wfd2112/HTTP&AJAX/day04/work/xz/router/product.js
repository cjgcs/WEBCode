//路由器模块 封装着与  product（商品）相关的路由
//引入必须模块
const express=require('express')
const pool=require('../pool')
const router=express.Router()
module.exports=router


// 路由:向客户端输出商品列表
// 请求方法 ： GET
// 请求地址 /v2/product/list
// 请求查询字符串数据，pageSize - （可选）
// http://127.0.0.1:8080/v2/product/list?pageSize=10
// 为了提升用户体验从实际业务出发,将默认显示10条数据
// 如果用户指定了查询条数，那么显示用户需要的
// 如果用户没有指定查询条数，显示10条


router.get('/list',(req,res)=>{
	//获取请求对象中的pageSize
	let ps=req.query.pageSize
	ps=ps ? parseInt(ps) : 10		//判断客户端是否传递ps，如果有则使用，没有则默认为10
	let sql='select lid,title,price from xz_laptop limit ?'
	pool.query(sql,[ps],(err,result)=>{
		if(err){
		throw err
		}
		res.send(result)
	})
})

/*
	接口地址  post  /v2/product/add  添加商品
	请求主体		添加中间件后，后去请求主体的数据req.body
						title-商品名称
						price-单价
*/
router.post('/add',(req,res)=>{
	//获取body中的参数
	let t=req.body.title
	let p=req.body.price
	
	let sql='INSERT INTO xz_laptop(title,price) VALUE(?,?)'
	pool.query(sql,[t,p],(err,result)=>{
		if(err){
		throw err
		}
		res.send(result)
	})
	
})









