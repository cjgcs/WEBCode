function tao(madai){
  console.log('涛哥开始跑第1棒');
  console.log('涛哥到达第1棒终点');
  //madai=xin
  //调用传递的函数
  madai();//xin()
  
}
function xin(){
  console.log('新哥开始跑第2棒');
  console.log('新哥到达终点');
}
//函数xin作为参数传递，就是回调函数
tao(xin);


tao( function(){
  console.log('陌生人1开始跑。。。');
});

















