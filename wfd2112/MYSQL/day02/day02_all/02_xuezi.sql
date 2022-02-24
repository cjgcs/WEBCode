#设置客户端连接服务器端的编码
set names utf8;
#丢弃数据库，如果存在
drop database if exists xuezi;
#创建数据库，设置存储字符的编码
create database xuezi charset=utf8;
#进入数据库
use xuezi;
#创建数据表 
create table laptop(
  lid int primary key,
  title varchar(128),
  price decimal(7,2) not null,   #99999.99
  stockCount smallint,
  shelfTime date not null,
  isindex boolean
);  
#插入数据
insert into laptop values(3,'小米Air',4188,200,'2021-5-1',true);

insert into laptop values('1','燃7000','5699','150','2020-12-1',false);
insert into laptop values('4','thinkpad','3599','50','2016-5-1',0);
insert into laptop values('2','apple','13599','800','2019-3-1',197);


