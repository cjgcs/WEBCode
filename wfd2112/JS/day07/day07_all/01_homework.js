//练习：字面量创建对象，包含一组成绩，遍历对象得到每个成绩，计算出总成绩和平均成绩
var student={
  s1:85,
  s2:73,
  s3:89,
  s4:65,
  s5:58
}
var sum=0;//记录总分
var count=0;//记录数量
for(var k in student){
  //console.log(k,student[k]);
  //把每个成绩加到sum
  sum+=student[k];
  //数量加1
  count++;
}
console.log(sum,count,sum/count);








