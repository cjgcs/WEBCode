//编写删除员工的接口( delete  /v1/emps )，传递员工的编号，在路由中获取传递编号，执行SQL命令，删除编号对应的员工，如果删除响应{code:200,msg:'删除成功'}，否则响应{code:501,msg:'删除失败，该员工不存在'}

const mysql=require('mysql');
const express=require('express');
const app=express();
app.listen(8080,()=>{
  console.log('服务器启动成功')
});
const pool=mysql.createPool({
  host:'127.0.0.1',
  user:'root',
  port:'3306',
  password:'',
  database:'tedu',	 
  connectionLimit:15
});
app.use( express.urlencoded({
  extended:false
}));
app.delete('/v1/emps/:eid',(req,res)=>{
  //获取传递编号
  console.log(req.params);
  //执行sql命令
  pool.query('delete from emp where eid=?',[req.params.eid],(err,result)=>{
    if(err){
	  throw err;
	}
	console.log(result);
	if(result.affectedRows===0){
	  res.send({code:501,msg:'删除失败，该员工不存在'});
	}else{
	  res.send({code:200,msg:'删除成功'});
	}
  });
});














