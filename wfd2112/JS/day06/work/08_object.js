//对象字面量
/*
var phone={//属性名：属性值
  color:'黑色',
  brand:'华为',
  size:6.9,
  'made-in':'深圳',
}

console.log(phone);
*/

//练习：创建一个员工对象，包含有员工的编号，姓名，性别，工资
/*
var yg={
  id:01,
  name:'陈',
  sex:'男',
  salary:20000,
  'dept-name':'研发部'
}
//console.log(yg);
//访问属性
//console.log(yg.sex);
//console.log(yg['dept-name']);
yg.salary=100000;
yg.birthday='1973-7-15';
console.log(yg);
*/

//练习：创建一个人对象，包含属性有姓名，性别，身高，体重
var person={
 name:'小帅',
 sex:'男',
 height:180,
 weight:'90斤'
}
console.log(person);

//练习：创建一个图书对象，包含的属性有编号，标题，作者，价格；修改价格属性，添加出版社属性；最后打印输出对象

var book={
  id:018491,
  title:'hao',
  author:'陈',
  price:999
  
}
book.price=111;
book['publish']='清华出版社';
console.log(book);




//创建一个圆对象，保存半径和圆周率，添加计算周长和面积

var circle={
  r:3,
  pai:3.14,
  area:function(){
    return this.r*this.r*this.pai;
  },
  len:function(){
    return 2*this.r*this.pai;
  }
}
console.log(circle.area(),circle.len());
