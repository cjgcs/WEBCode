#�������ݿ�������ڵĻ�
drop database if exists tedu;
#�����µ����ݿ�
create database tedu;
#�������ݿ�
use tedu;
#�������ݱ�
create table emp(
  eid int,
  ename varchar(20),#���ַ���
  phone int,
  addr varchar(64)
);