//计算周长
function len(r){
  return 2*Math.PI*r;
}
//计算面积
function area(r){
  return Math.PI*Math.pow(r,2);
}
var person={
  name:'涛哥',
  sex:'男'
}
//暴露出去
/*
module.exports={
  myLen:len,
  myArea:area,
  p:person
}
*/
//如果要暴露的只有一个对象，可以直接把它作为要暴露的对象
//module.exports=person;
//只暴露函数
module.exports=area;






