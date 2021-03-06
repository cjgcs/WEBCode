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
  uname varchar(10),
  upwd varchar(32),
  email varchar(32),
  phone varchar(11),
  user_name varchar(8),
  reg_time varchar(10),   #2021-12-31
  is_online varchar(1)   #y-是   n-否
);
#插入数据
insert into user values('1','ab','123','123456@qq.com','123456789','陈哥','2022/2/21','y');
insert into user values('2','qw','456','458137@163.com','132846455','吴哥','2021/3/11','n');
insert into user values('3','cf','789','828654@126.com','643246453','徐哥','2020/2/01','y');
#修改数据
update user set upwd='777777',is_online='n' where uid='1';
#删除数据
delete from user where uid='3';