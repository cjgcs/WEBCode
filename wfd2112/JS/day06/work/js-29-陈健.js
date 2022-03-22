//练习：字面量创建对象，包含一组成绩，遍历对象得到每个成绩，计算出总成绩和平均成绩
var zong=0;
var count=0;
var chengji={
  cj1:66, cj2:78,cj3:92,
  cj4:30,cj5:85,cj6:100 
}
for(var k in chengji){
  zong+=chengji[k];
  count++;
}
console.log(zong);
console.log(zong/count);


//创建一个电脑对象，有颜色，重量，型号，标题属性，看电影，听音乐，打游戏是方法，调用时分别打印“那个电脑能看电影，听音乐，打游戏”

var computer={
  color:'红色',
  weight:'2kg',
  model:'Y7000P',
  title:'联想',
  kdy:function(){
    return '看电影';
  },
  tyy:function(){
    return '听音乐';
  },
  dyx:function(){
    return '打游戏';
  }
}
console.log('那个电脑能'+computer.kdy());
console.log('那个电脑能'+computer.tyy());
console.log('那个电脑能'+computer.dyx());


















