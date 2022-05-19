/**数据库连接池模块**/
//引入必须得第三方模块
const mysql = require('mysql')

//创建并导出一个数据库连接池
module.exports = mysql.createPool({
		host:'127.0.0.1',
		port:'3306',
		user:'root',      //必需
		password:'',
		database:'xz',    //必需
		connectionLimit:15
})