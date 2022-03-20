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
























