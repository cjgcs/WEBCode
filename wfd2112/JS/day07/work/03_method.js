var person={
  name:'涛哥哥',
  name1:'剑哥',
  play:function(){
	  //this //指向调用方法的对象
    console.log(this.name+'正在玩单杠');
  },
  run:function(){
    console.log(this.name1+'正在跑接力赛');
  }
}
//添加新的方法
person.tan=function(){
  console.log('涛哥正在摊煎饼');
}
//console.log(person);
//调用方法
person.play();
person.run();

//练习：创建一个圆对象，包含的属性有半径和圆周率，添加两个方法，分别计算圆的周长和面积，并返回结果。
var cirle={
  r:2,
  pi:3.14,
  C:function(){
    console.log(this.r*this.pi*2);
  },
  S:function(){
    console.log(this.r*this.r*this.pi);
  }
}
cirle.C();
cirle.S();



























