#设置客户端连接服务器端的编码为utf8
set names utf8;
#先丢弃数据库xuezi，如果存在的话
drop database if exists xuezi;
#创建数据库xuezi,设置编码为utf8
create database xuezi charset=utf8;
#进入数据库xuezi
use xuezi;
#创建数据表laptop
create table laptop(
  lid int,
  title varchar(10),
  price decimal(8,2) not null,
  stockCount varchar(10),
  shelfTime datetime not null,
  isindex Boolean
);
#插入数据
insert into laptop values('1','联想','6999.99','15486台','2021-10-14 15:23:44',true);
insert into laptop values('2','小米','2699.00','4562台','2022-03-22 08:10:30',false);
insert into laptop values('3','华硕','9875.56','8911台','2020-08-06 12:26:59',true);
#修改数据
update laptop set isindex='true',price='1999' where lid='2';