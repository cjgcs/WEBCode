#丢弃数据库，如果存在
drop database if exists tedu;
#创建新的数据库
create database tedu;
#进入创建的数据库
use tedu;
#创建数据表
create table emp(
  eid int,
  ename varchar(16),
  phone int,
  addr varchar(64)
);



