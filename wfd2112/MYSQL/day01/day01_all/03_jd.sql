#�������ݿ�jd��������ڵĻ�
drop database if exists jd;
#�������ݿ�
create database jd;
#���봴�������ݿ�
use jd; 
#�������ݱ�   
create table student(
  id int,
  name varchar(16),
  sex varchar(1),  #M-��  W-Ů
  score int
);
#��������
insert into student values('1','tao','M','81');
insert into student values('2','xin','W','70');
#��ѯ����
select * from student;

