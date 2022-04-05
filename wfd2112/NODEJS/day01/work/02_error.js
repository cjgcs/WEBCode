console.log(1);
//语法错误
//var a=1；//含有中文字符
//var var=2;//变量名不能为关键词
//if(1){//缺少括号

//引用错误
//var a=1;
//console.log(A);//引用与定义的变量名不一致

//类型错误
//var arr=[1,2,3];
//console.log( arr.revese );
//arr.revese();
/*
var score=128;
if(score>100){
  //自定义错误
  throw '非法的成绩';
}
*/
var score=128;
//尝试执行
try{
  if(score>100){
    //自定义错误
    throw '非法的成绩';
  }
}catch(err){
  //将try中，捕获到的错误放入到err
  //console.log(err);
  //解决错误
  score=100;
}
console.log(2);