#设置客户端连接服务器端的编码
set names utf8;
#丢弃数据库，如果存在
drop database if exists sina;
#创建数据库，设置存储字符的编码
create database sina charset=utf8;
#进入数据库
use sina;
#创建数据表
create table news(
  nid int,
  title varchar(32),
  origin varchar(8),
  ctime varchar(10),
  detail varchar(5000)
);
#插入数据
insert into news values('1','震惊！涛哥居然那条母猪做出这样的事','宝宝树','2022-1-4','详情1');
insert into news values('2','震惊！拜登死于俄罗斯导弹','纽约时报','2022-1-5','详情2');
insert into news values('3','震惊！长安第一圈','西安时报','2022-1-6','详情3');
#修改数据
update news set origin='华盛顿日报' where nid='2'; 
#删除数据
delete from news where nid='3';