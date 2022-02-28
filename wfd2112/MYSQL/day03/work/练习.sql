示例：查询出所有员工的编号和姓名
   select eid,ename from emp;
  练习：查询出所有员工的姓名、性别、生日、工资
   select ename,sex,birthday,salary from emp;

 2.查询所有的列
   select eid,ename,sex,birthday,salary,deptid from emp;
   select * from emp;
 3.给列起别名
  示例：查询出所有员工的编号和姓名，使用一个字母作为别名
   select eid as a,ename as b from emp;
  练习：查询出所有员工的姓名，生日，工资，使用一个字母作为别名
   select ename as aa,birthday as bb,salary as cc from emp;
   as 用来设置别名，可以省略的
 4.查询时执行计算
  示例：查询出所有员工的姓名及其年薪
   select ename,salary*12 from emp;
  练习：假设每个员工的工资增加2000，年终奖30000，查询出所有员工姓名及其年薪，使用一个字母作为别名
   select ename as a,(salary+2000)*12+30000 from emp;
 5.显示不同的记录
  示例：查询出员工都分布在哪些部门
   select distinct deptid from emp;
  练习：查询出都有哪些性别的员工
   select distinct sex from emp;
 6.查询的结果排序
  示例：查询出所有的部门，结果按照编号升序排列 #ascendant 升序的
   select * from dept order by did asc;
  示例：查询出所有的部门，结果按照编号降序排列
   select * from dept order by did desc;
    Desc  describe  描述
    Desc  descendant  降序
  练习：查询出所有的员工，结果按照工资降序排列
   select * from emp order by salary desc;
  练习：查询出所有的员工，结果按照年龄从大到小排列
   select * from emp order by birthday desc;
  练习：查询出所有的员工，结果按照姓名升序排列
   select * from emp order by ename asc;
  练习：查询出所有的员工，结果按照工资降序排列，如果工资相同按照姓名排列
   select * from emp order by salary desc,ename;
  练习：查询出所有的员工，结果按照性别升序排列，如果性别相同按照年龄从大到小排列
   select * from emp order by sex asc,birthday desc;
不加排序规则，默认是按照升序排列
 7.条件查询
  示例：查询出5号员工的数据
   select * from where eid=5;
  练习：查询出姓名为king的员工的数据
   select * from where ename='king';
  练习：查询出30号部门的员工的数据
   select * from where deptid=30;
>  <  >=  <=   =  != (不等于)
  练习：查询出不在10号部门的员工有哪些
  select * from where deptid!=10;
  练习：查询出没有明确部门的员工
  select * from where deptid is null;
  练习：查询出有明确部门的员工
  select * from where deptid is not null;
and / &&  并且
or / ||  或者
  练习：查询出工资在5000~8000之间的员工有哪些
  select * from emp where salary>=5000 and salary<=8000;
  select * from emp where salary>=5000 && salary<=8000;
  练习：查询出工资在5000以下或者8000以上的员工有哪些
  select * from emp where salary>5000 or salary<8000;
  select * from emp where salary>5000 || salary<8000;
  练习：查询出8000以上的女员工
  select * from emp where salary>=8000 and sex=0;
  select * from emp where salary>=8000 && sex=0;
  练习：查询出20号部门或者30号部门的员工有哪些
  select * from emp where deptid=20 or deptid=30;
  select * from emp where deptid=20 || deptid=30;
  select * from emp where deptid in(20,30);
  练习：查询出不在20号部门并且不在30号部门的员工有哪些
  select * from emp where deptid!=20 and deptid!=30;
  select * from emp where deptid!=20 && deptid!=30;
  select * from emp where deptid not in(20,30);
 8.模糊条件查询

  示例：查询出姓名中含有字母a的员工有哪些
  select * from emp where ename like '%a%';
  练习：查询出姓名中以a结尾的员工有哪些
  select * from emp where ename like '%a';
  练习：查询出姓名中第2个字符是a的员工有哪些
  select * from emp where ename like '_a%';
