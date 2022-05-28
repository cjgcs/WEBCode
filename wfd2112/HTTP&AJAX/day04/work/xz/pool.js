// 数据库连接池模块
// 引入第三方模块
const mysql =require('mysql')

// 创建数据库池
module.exports=mysql.createPool({
	host:'127.0.0.1',
	port:'3306',
	user:'root',      //必需
	password:'',
	database:'xz',    //必需
	connectionLimit:15
	
})