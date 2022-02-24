#设置编码为utf8
set names utf8;
#丢弃数据库，如果存在
drop database if exists xuezi;
#创建新的数据库，设置存储字符的编码为utf8
create database xuezi charset=utf8;
#进入创建的数据库
use xuezi;
#创建数据表
create table laptop(
  lid int primary key,
  title varchar(10),
  price decimal(8,2) not null,
  stockCount varchar(10),
  shelfTime datetime not null,
  isindex boolean
);
#插入数据
insert into laptop values('1','联想','6999.76','15486台','2021-10-14 15:23:44',true);
insert into laptop values('2','戴尔','1999','4562台','2022-03-22 08:10:30',false);
insert into laptop values('3','小米','9875.56','8911台','2020-08-06 12:26:59',true);