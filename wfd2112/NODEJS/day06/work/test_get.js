//引入express、mysql模块
const express=require('express');
const mysql=require('mysql');
//创建服务器
const app=express();
//创建端口
app.listen(8080,()=>{
  console.log('服务器启动成功');
});
//创建连接池
const pool=mysql.createPool({
  host:'127.0.0.1',
  port:'3306',
  user:'root',
  password:'',
  database:'tedu',
  connectionLimit:15
});
//获取转换成对象
app.use( express.urlencoded({
  extended:false
}))
app.get('/v1/emps/:eid',(req,res)=>{
  console.log(req.params);//传参
  //sql命令
  pool.query('select * from emp where eid=?',[req.params.eid],(err,result)=>{
    console.log(result);
	if(result.length===0){
	  res.send({code:501,msg:'查询失败，没有此员工'});
	}else{
	  res.send({code:200,msg:'查询成功',data:result});
	}
  });/**/
  //res.send('查询成功');
});







































