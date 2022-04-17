const express=require('express');
//引入mysql模块
const mysql=require('mysql');
const app=express();
app.listen(8080);
//创建连接池对象
const pool=mysql.createPool({
  host:'127.0.0.1',
  port:'3306',
  user:'root',
  password:'',
  database:'tedu',
  connectionLimit:15
});

//将post传递的参数转为对象
app.use( express.urlencoded({
  extended:false
}) );
//Node.js下，每个路由产生一个接口
//添加员工接口(post /v1/emps)
//接口地址：http://127.0.0.1:8080/v1/emps
//请求方式：post
app.post('/v1/emps',(req,res)=>{
  //获取post传递的参数
  console.log(req.body);
  //执行SQL命令，将数据插入到数据表emp
  pool.query('insert into emp set?',[req.body],(err,result)=>{
    if(err){
	  throw err;
	}
	console.log(result);
    //result出现才表示成功
	//send里边的js对象会自动转为json格式
    res.send({code:200,msg:'员工添加成功'});
  });
});




