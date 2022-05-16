//引入必须得模块文件和常量
const express = require('express')
const app = express()
const port = 8080

//启动WEB服务器--就是让它监听特定的端口
app.listen(port,()=>{
	console.log('服务器成功监听端口',port)
})

//托管当前项目的静态资源
app.use(express.static('./public'))

//nodejs解析post请求的请求体中的数据，存放在req.body
app.use(express.urlencoded({
	extended:false
}))

//引入自定义用户的路由器模块
const userRouter = require('./router/user')
app.use('/v2/user',userRouter)

//引入自定义商品的路由器模块
const productRouter = require('./router/product')
app.use('/v2/product',productRouter)