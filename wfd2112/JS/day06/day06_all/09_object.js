/*
//内置构造函数
var laptop=new Object();
//需要单独添加属性
laptop.id=1;
laptop.title='小米Air';
console.log(laptop);
*/

//练习：创建班级的对象，包含的属性有编号，中心名称，学员人数。
var grade=new Object();
grade.id='WEB2112';
grade.center='北京万寿路';
grade.num=30;
//console.log(grade);


for(var k in grade){
  //k代表所有的属性名
  console.log(k,grade[k]);
}






