#丢弃数据库如果存在的话
drop database if exists tedu;
#创建新的数据库
create database tedu;
#进入数据库
use tedu;
#创建数据表
create table emp(
  eid int,
  ename varchar(20),#长字符串
  phone int,
  addr varchar(64)
);