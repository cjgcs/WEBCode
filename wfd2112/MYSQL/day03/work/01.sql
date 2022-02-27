#设置客户端连接服务器端的编码
set names utf8;
#丢弃数据库，如果存在
drop database if exists xz;
#创建新的数据库，设置存储字符的编码
create database xz charset=utf8;
#进入数据库
use xz;
#创建分类表
create table family(
  fid int primary key,
  fname varchar(8) default '未知'
);
#插入数据
insert into family values('10','联想');
insert into family values('20','戴尔');
insert into family values('30','小米');
insert into family values('40','华为');
insert into family(fid) values(50);
#创建部门表
create table laptop(
  fid int primary key,
  title varchar(128) unique not null,
  price decimal(8,2) default '3000',
  is_onsale boolean default '1'
);
#插入数据
#insert into laptop values(10,'研发部',default,default);
insert into laptop(fid,title) values(10,'研发部');
#insert into laptop values(20,'市场部');
#insert into laptop values(30,'运营部');
#insert into laptop values(40,'测试部');
