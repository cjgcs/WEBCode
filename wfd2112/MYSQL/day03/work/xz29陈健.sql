#设置客户端连接服务端的编码为utf8
set names utf8;
#丢弃数据库cj，如果存在
drop database if exists cj;
#创建数据库cj,设置编码为utf8
create database cj charset=utf8;
#进入数据库cj
use cj;
#创建部门表bmb
create table bmb(
  did int primary key auto_increment,
  dname varchar(5) unique
);
#插入数据
insert into bmb values('10','市场部');
insert into bmb values('20','研发部');
insert into bmb values('30','测试部');
insert into bmb values('40','运营部');
#创建员工表ygb
create table ygb(
  eid int primary key auto_increment,
  ename varchar(6) not null,
  sex boolean default 1,
  birthday date,
  salary decimal(10,2),
  bmbid int,
  foreign key(bmbid) references bmb(did) 
);
#插入数据
insert into ygb values(null,'hu',default,'1973-7-15',4500,10);
insert into ygb values(null,'wang',0,'1989-10-8',7000.56,20);
insert into ygb values(null,'chen',default,'1989-2-22',7000,30);
insert into ygb values(null,'wu',default,'1993-8-11',12000,30);
insert into ygb values(null,'zhang',0,'1976-6-25',23560,null);
insert into ygb values(null,'li',default,'1979-1-11',45325.01,40);
insert into ygb values(null,'zhao',default,'1988-5-21',2345.22,30);
insert into ygb values(null,'qian',0,'1989-6-4',80000.23,40);
insert into ygb values(null,'sun',default,'1999-10-12',65468.28,20);
insert into ygb values(null,'lv',0,'1982-3-9',24805.05,30);
insert into ygb values(null,'xu',default,'1993-9-6',15236.22,10);
insert into ygb values(null,'luo',default,'1977-12-25',8002.22,30);
insert into ygb values(null,'gu',0,'2005-3-29',9800.22,20);


#练习：查询出工资在8000以上的男员工，结果按照工资的降序排列
select *  from ygb where salary>8000 and sex=1 order by salary desc;






/*  练习：查询出所有员工的姓名、性别、生日、工资
   select ename,sex,birthday,salary from ygb;
  练习：查询出所有员工的姓名，生日，工资，使用一个字母作为别名
   select ename as aa,birthday as bb,salary as cc from ygb;
  练习：假设每个员工的工资增加2000，年终奖30000，查询出所有员工姓名及其年薪，使用一个字母作为别名
   select ename as a,(salary+2000)*12+30000 from ygb;
  练习：查询出都有哪些性别的员工
   select distinct sex from ygb;
  练习：查询出所有的员工，结果按照工资降序排列
   select * from ygb order by salary desc;
  练习：查询出所有的员工，结果按照年龄从大到小排列
   select * from ygb order by birthday desc;
  练习：查询出所有的员工，结果按照姓名升序排列
   select * from ygb order by ename asc;
  练习：查询出所有的员工，结果按照工资降序排列，如果工资相同按照姓名排列
   select * from ygb order by salary desc,ename;
  练习：查询出所有的员工，结果按照性别升序排列，如果性别相同按照年龄从大到小排列
   select * from ygb order by sex asc,birthday desc;
  练习：查询出姓名为king的员工的数据
   select * from where ename='king';
  练习：查询出30号部门的员工的数据
   select * from where bmbid=30;
  练习：查询出不在10号部门的员工有哪些
  select * from where bmbid!=10;
  练习：查询出没有明确部门的员工
  select * from where bmbid is null;
  练习：查询出有明确部门的员工
  select * from where bmbid is not null;
  练习：查询出工资在5000~8000之间的员工有哪些
  select * from ygb where salary>=5000 and salary<=8000;
  select * from ygb where salary>=5000 && salary<=8000;
  练习：查询出工资在5000以下或者8000以上的员工有哪些
  select * from ygb where salary>5000 or salary<8000;
  select * from ygb where salary>5000 || salary<8000;
  练习：查询出8000以上的女员工
  select * from ygb where salary>8000 and sex=0;
  select * from ygb where salary>8000 && sex=0;
  练习：查询出20号部门或者30号部门的员工有哪些
  select * from ygb where bmbid=20 or bmbid=30;
  select * from ygb where bmbid=20 || bmbid=30;
  select * from ygb where bmbid in(20,30);
  练习：查询出不在20号部门并且不在30号部门的员工有哪些
  select * from ygb where bmbid!=20 and bmbid!=30;
  select * from ygb where bmbid!=20 && bmbid!=30;
  select * from ygb where bmbid not in(20,30);

  查询出姓名中含有字母a的员工有哪些
  select * from ygb where ename like '%a%';
  练习：查询出姓名中以a结尾的员工有哪些
  select * from ygb where ename like '%a';
  练习：查询出姓名中第2个字符是a的员工有哪些
  select * from ygb where ename like '_a%';	*/
