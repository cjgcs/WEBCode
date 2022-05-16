// 引入模块
const express =require('express')
const app=express()
const port=8080;

app.listen(port,()=>{
	console.log('服务器启动成功，监听端口：',port)
	
})

//托管当前项目的静态资源
app.use(express.static('./public'))

//引入自定义路由器模块
const userRouter = require('./router/user')
app.use('/v2/user',userRouter)