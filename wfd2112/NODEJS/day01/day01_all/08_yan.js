console.log('这是涛哥的眼睛模块');
var a=1;
function fn(){
  return 2;
}
function add(n1,n2){
  return n1+n2;
}
//暴露的对象，默认是空对象
//如果想让外部使用哪部分，就需要添加到暴露的对象中
module.exports={
  myA:a,
  myFn:fn,
  myAdd:add
}