drop database if exists xx;

create database xx;

use xx;

create table student(
  id int,
  name varchar(15),
  sex varchar(1),
  score int
);

insert into student values('1','a','w','90');
insert into student values('2','b','m','60');

select * from student;