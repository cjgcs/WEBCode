#设置客户端连接服务端的编码为utf8
set names utf8;
#丢弃数据库tedu，如果存在
drop database if exists tedu;
#创建数据库tedu,设置编码为utf8
create database tedu charset=utf8;
#进入数据库tedu
use tedu;
#创建部门表dept
create table dept(
  did int primary key auto_increment,
  dname varchar(16) unique
);
#插入数据
insert into dept values('10','研发部');
insert into dept values('20','市场部');
insert into dept values('30','运营部');
insert into dept values('40','测试部');
#创建员工表emp
create table emp(
  eid int primary key auto_increment,
  ename varchar(15) not null,
  sex boolean default 0,
  birthday date,
  salary decimal(8,2),
  deptid int,
  foreign key(deptid) references dept(did) 
);
#插入数据
insert into emp values(null,'tao',default,'1973-7-15',4500,10);
insert into emp values(null,'xin',1,'1989-10-8',7000.56,20);
insert into emp values(null,'chen',default,'1989-2-22',7000,30);
insert into emp values(null,'wu',default,'1993-8-11',12000,30);
insert into emp values(null,'zhang',1,'1976-6-25',23560,null);
insert into emp values(null,'li',default,'1979-1-11',45325.01,40);
insert into emp values(null,'zhao',default,'1988-5-21',2345.22,30);
insert into emp values(null,'qian',1,'1989-6-4',80000.23,40);
insert into emp values(null,'sun',default,'1999-10-12',65468.28,20);
insert into emp values(null,'lv',1,'1982-3-9',24805.05,30);
#insert into emp values(null,'xu',default,'1993-9-6',15236.22,10);
