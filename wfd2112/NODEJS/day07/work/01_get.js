//练习：编写查找员工的接口(get  /v1/emps)，传递员工的编号，获取传递的编号，执行SQL命令，如果查询不到该员工响应 {code:501,msg:'该员工不存在'}  否则响应{code:200,msg:'查找成功', data:查询的数据}
const express=require('express');
const mysql=require('mysql');
const app=express();
app.listen(8080,()=>{
  console.log('服务器启动成功');
});
const pool=mysql.createPool({
  host:'127.0.0.1',
  user:'root',
  port:'3306',
  password:'',
  database:'tedu',
  connectionLimit:15
});
app.get('/v1/emps/:eid',(req,res)=>{
  console.log(req.params);
  pool.query('select * from emp where eid=?',[req.params.eid],(err,result)=>{
    if(err){
	  throw err;
	}
	if(result.length===0){
	  console.log({code:501,msg:'该员工不存在'});
	}else{
	  console.log({code:200,msg:'查找成功', data:result});
	}
  });
});

















