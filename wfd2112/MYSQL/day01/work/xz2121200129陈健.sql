drop database if exists xz;

create database xz;

use xz;

create table user(
	uid int,
	uname varchar(5),
	upwd int,
	email varchar(16),
	phone int,
	user_name varchar(20),
	reg_time date,
	is_online varchar(5)
);
#²åÈëÊý¾Ý
insert into user values('1','ab','123','123456@qq.com','123456789','cd','2022/2/21','is');
insert into user values('2','qw','456','458137@163.com','132846455','jc','2021/3/11','no');
#²éÑ¯Êý¾Ý
select * from user;