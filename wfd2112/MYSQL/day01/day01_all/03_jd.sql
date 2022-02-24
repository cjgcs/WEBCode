#丢弃数据库jd，如果存在的话
drop database if exists jd;
#创建数据库
create database jd;
#进入创建的数据库
use jd; 
#创建数据表   
create table student(
  id int,
  name varchar(16),
  sex varchar(1),  #M-男  W-女
  score int
);
#插入数据
insert into student values('1','tao','M','81');
insert into student values('2','xin','W','70');
#查询数据
select * from student;

