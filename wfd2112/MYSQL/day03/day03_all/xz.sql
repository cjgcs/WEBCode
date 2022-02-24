#设置客户端连接服务器端的编码
set names utf8;
#丢弃数据库如果存在
drop database if exists xz;
#创建数据库，设置存储字符的编码
create database xz charset=utf8;
#进入数据库
use xz;
#创建分类表
create table family(
  fid int primary key,
  fname varchar(8) default '未知'
);
#插入数据
insert into family values
(10,'联想'),
(20,'戴尔'),
(30,'小米');
insert into family values(40,'华为');
#没有出现的列自动应用默认值
insert into family(fid) values(50);
#插入的值中出现了default关键字，会调用这个列的默认值
insert into family values(60,default);

#创建商品表
create table laptop(  
  lid int primary key auto_increment,
  title varchar(128) unique not null,
  price decimal(7,2) default 3000,   #99999.99
  shelfTime date,
  spec varchar(32),
  is_onsale boolean default 1,    #1-是 0-否
  detail varchar(5000),
  familyid int,
  #设置familyid为外键，插入的值必须在family表的fid出现过
  foreign key(familyid) references family(fid)
);
#插入数据
insert into laptop values(1,'小米Air',4199,'2021-1-1','2022冬奥版',1,'详情1',30);
insert into laptop values(2,'外星人',12388,'2022-2-1','王者版',1,'详情2',20);
insert into laptop values(3,'ThinkPadE470',2399,'2016-10-1','商务版',0,'详情3',10); 
insert into laptop values(4,'小米Pro',4999,'2020-5-1','测试版',0,'详情4',30);
insert into laptop(lid,title) values(5,'燃7000');
insert into laptop values(6,'燃7001',default,default,default,default,default,default);

insert into laptop(lid,title) values(null,'燃7002');
insert into laptop(lid,title) values(null,'燃7003');
insert into laptop(lid,title) values(null,'燃7004');
