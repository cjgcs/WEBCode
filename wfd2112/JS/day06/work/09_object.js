/*
//内置构造函数
var laptop=new Object();
//需要单独添加属性
laptop.id=1;
laptopl.title='小米Air';
console.log(laptop);
*/


//练习：创建班级的对象，包含的属性有编号，中心名称，学员人数

var class1=new Object();
class1.id='12445';
class1.name='北京万寿路';
class1.num=30;
console.log(class1);



for(var k in class1){
	//k代表所有的属性名
  console.log(k,class1[k]);
}











