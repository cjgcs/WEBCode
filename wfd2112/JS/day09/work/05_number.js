/*
var n1=2;//字面量
var n2=new Number(2);//包装对象
//console.log(n2,typeof n2);
console.log(n1+2,n2+2);//包装对象后就有属性和方法了，还可以使用api
*/

/*
var a=3.14*2*5;
console.log(a.toFixed(1));//保留小数点后几位
//内部会执行包装操作后调用api
console.log( new Number(a).toFixed(5))
*/


var total=2383+8452;
//没有小数点后位数，也可以强制添加
console.log(total.toFixed(2));


