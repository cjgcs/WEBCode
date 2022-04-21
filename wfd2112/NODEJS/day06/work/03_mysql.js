//引入mysql模块
const mysql=require('mysql');
//创建连接池对象（包含一组连接）
const pool=mysql.createPool({
  host:'127.0.0.1',
  port:'3306',
  user:'root',
  password:'',
  database:'tedu',
  connectionLimit:15	//设置连接个数
});
/*
//执行sql命令，查询出编号为8的员工
//假设获取了传递员工姓名
//select * from emp where ename=" +user+ "
var user='cxge" or "1';//sql注入
pool.query('select * from emp where ename="'+user+'"',(err,result)=>{
  if(err){
    throw err;
  }
  console.log(result);
});
*/
/*
var user='tao';
//? 占位符
pool.query('select * from emp where ename=?',[user],(err,result)=>{
  if(err){
    throw err;
  }
  console.log(result);
});

//练习：假设获取到一条员工的数据，格式为对象，执行sql命令，将数据插入到员工表emp
var a={
  eid:null,
  ename:'Xxx',
  sex:1,
  birthday:'2021-12-02',
  salary:29319,
  deptid:20
}
pool.query('insert into emp values(null,?,?,?,?,?)',[a.ename,a.sex,a.birthday,a.salary,a.deptid],(err,result)=>{
  if(err){
    throw err;
  }
  console.log(result);
});

*/



var a={
  eid:null,
  ename:'Xxx',
  sex:1,
  birthday:'2021-12-02',
  salary:29319,
  deptid:20
}
pool.query('insert into emp set?',[a],(err,result)=>{
  if(err){
    throw err;
  }
  console.log(result);
});









