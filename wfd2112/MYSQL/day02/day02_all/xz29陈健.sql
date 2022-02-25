#设置客户端连接服务器端的编码为utf8
set names utf8;
#丢弃数据库，如果存在
drop database if exists xz;
#创建新的数据库，设置存储字符的编码为utf8
create database xz charset=utf8;
#进入创建的数据库
use xz;
#创建数据表
create table user(
  uid int,
  uname varchar(16),
  upwd varchar(32),
  email varchar(32),
  phone varchar(11),
  user_name varchar(8),
  reg_time varchar(10),   #2021-12-31
  is_online varchar(1)   #y-是   n-否
);
#插入数据
insert into user values('1','tao','123456','tao@126.com','18312345678','涛哥','2019-10-20','y');
insert into user values('2','xin','888888','xin@126.com','18882345678','新哥','2020-1-2','y');
insert into user values('3','hua','666666','hua@126.com','15582345678','华哥','2021-1-2','n');
#修改数据
update user set upwd='777777',is_online='n' where uid='1';
#删除数据
delete from user where uid='3';
#查询
#select * from user;



