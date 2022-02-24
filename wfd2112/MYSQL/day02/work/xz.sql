#设置编码为utf8
set names utf8;
#丢弃数据库，如果存在
drop database if exists xz;
#创建新的数据库，设置存储字符的编码为utf8
create database xz charset=utf8;
#进入创建的数据库
use xz;
#创建数据表
create table family(
  fid int primary key,
  fname varchar(5)
);
#插入数据
insert into family values('10','联想');
insert into family values('20','戴尔');
insert into family values('30','小米');

#创建数据表
create table laptop(
  lid int primary key,
  title varchar(10),
  price decimal(8,2) not null,
  shelft date not null,
  spec varchar(20),
  is_onsale boolean,
  detail varchar(100),
  familyid varchar(10)
);
#插入数据
insert into laptop values('1','联想Y7000P','7999','2021-06-15','i7 11800H/16GB/512GB/RTX3060',true,'游戏本','100001');
insert into laptop values('2','戴尔G15 5511','8499','2021-05-05','i7 11800H/16GB/512GB/RTX3060/165Hz',true,'家用本','155248');
insert into laptop values('3','小米Pro 14 锐龙版','4799','2021-11-13','R5 5600H/16GB/512GB/集显',true,'轻薄本','547862');

