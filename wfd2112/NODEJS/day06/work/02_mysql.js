//引入mysql模块
const mysql=require('mysql');
//创建连接对象
const c=mysql.createConnection({
  host:'127.0.0.1',
  port:'3306',
  user:'root',
  password:'',
  database:'tedu'
});
//测试连接
//c.connect();
//执行sql命令
/*
c.query('select * from emp',(err,result)=>{
  //err 可能产生的错误结果
  if(err){
    throw err;
  }
  //result 成功的结果
  console.log(result);
  //console.log('执行成功');
  
});
*/
//练习：执行sql命令，删除编号为10的员工
c.query('delete from emp where eid=11',(err,result)=>{
  if(err){
    throw err;
  }
  console.log(result);
  //判断是否删除成功，如果成功，打印‘删除成功’，否则打印‘删除失败’
  if(result.affectedRows===1){
    console.log('删除成功');
  }else{
    console.log('删除失败');
  }
});




















