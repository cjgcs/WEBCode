const mysql=require('mysql');
const express=require('express');
const app=express();
app.listen(8080,()=>{
  console.log('服务器启动成功');
});
app.use( express.urlencoded({
  extended:false
}));
const pool=mysql.createPool({
  host:'127.0.0.1',
  port:'3306',
  user:'root',
  password:'',
  database:'tedu',
  connectionLimit:15
});
//添加员工接口（/v1/emps）
//接口地址：http://127.0.0.1:8080/v1/emps
//请求方式：post
app.post('/v1/emps',(req,res)=>{
  //获取post传输的参数
  console.log(req.body);
  //执行sql命令，将数据插入到数据表emp
  pool.query('insert into emp set?',[req.body],(err,result)=>{
    if(err){
	  throw err;
	}
	console.log(result);
	//result出现才表示成功
	res.send({code:200,msg:'员工添加成功'});
  });
  
});