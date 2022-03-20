//对象字面量
var phone={
  color:'黑色',
  brand:'华为',
  'size':6.9,
  'made-in':'深圳'
}

//console.log(phone);
//练习：创建一个员工对象，包含有员工的编号，姓名，性别，工资
var emp={
  eid:1,
  ename:'涛哥',
  sex:'男',
  salary:50000,
  'dept-name':'研发部'
}
//console.log(emp);   
//访问属性
//console.log(emp.ename);
//console.log(emp['dept-name'],emp['salary']);
//console.log(emp.birthday);
emp.salary=100000;
emp.birthday='1973-7-15';
//console.log(emp);

// 练习：创建一个图书对象，包含的属性有编号，标题，作者，价格；修改价格属性，添加出版社属性；最后打印输出对象
var book={
  bid:10010,
  title:'兔子的产后护理',
  author:'尼古拉斯.涛',
  price:399
}
book.price=499;
book['publish']='非洲人民出版社';
console.log(book);





