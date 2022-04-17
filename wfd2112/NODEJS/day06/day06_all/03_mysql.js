//引入mysql模块
const mysql=require('mysql');
//创建连接池对象(包含一组连接)
const pool=mysql.createPool({
  host:'127.0.0.1',
  port:'3306',
  user:'root',
  password:'',
  database:'tedu',
  connectionLimit:15  //连接的数量
});
/*
//执行SQL命令，查询出姓名为tao的员工
//假设获取了传递员工姓名
var user='fsdf" or "1';
//SQL注入
//查询出传递的员工数据
//'select * from emp where ename="'+'tao'+'"'
//select * from emp where ename="fsdf" or "1"
pool.query('select * from emp where ename="'+user+'"',(err,result)=>{
  if(err){
    throw err;
  }
  console.log(result);
});

var user='fsdf" or "1';
var s=1;
//? 占位符
pool.query('select * from emp where ename=? or sex=?',[user,s],(err,result)=>{
  if(err){
    throw err;
  }
  console.log(result);
});

//练习：假设获取到了一条员工的数据，格式为对象，执行SQL命令，将数据插入到员工表emp
var obj={
  ename:'涛桑',
  sex:0,
  birthday:'1973-7-15',
  salary:58000,
  deptid:40
}
pool.query('insert into emp values(null,?,?,?,?,?)',[obj.ename,obj.sex,obj.birthday,obj.salary,obj.deptid],(err,result)=>{
  if(err){
    throw err;
  }
  console.log(result);
});
*/

var obj={
  salary:38000,
  //sex:1,
  //birthday:'1978-7-15',
  ename:'涛桑3',
  //deptid:30
}
pool.query('insert into emp set?',[obj],(err,result)=>{
  if(err){
    throw err;
  }
  console.log(result);
});



