/*
var person={
  name:'涛桑',
  play:function(){
	//this 指向某一个对象
	//this指向的是调用方法的对象
	//console.log(this);
    console.log(this.name+'正在玩单杠');
  },
  run:function(){
    console.log('涛哥正在跑接力赛');
  }
}
//添加新的方法
person.tan=function(){
  console.log('涛哥正在摊煎饼');
}
console.log(person);
//调用方法(函数)
person.play();
person.run();
*/


//练习：创建一个圆对象，包含的属性有半径和圆周率，添加两个方法，分别计算圆的周长和面积，并返回结果。
var circle={
  r:4,
  pi:3.14,
  len:function(){
    return 2*this.pi*this.r;
  },
  area:function(){
    return this.pi*this.r*this.r;
  }
}
console.log(circle);
console.log( circle.len() );
console.log( circle.area() );


