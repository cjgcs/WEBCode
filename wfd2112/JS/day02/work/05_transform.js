/*var n1=Number('1');//1
var n2=Number('1a');//NaN
var n3=Number(true);//1
var n4=Number(false);//0
var n5=Number(undefined);//NaN
var n6=Number(null);//0
//console.log(n5,n6);

//强制转整形
var p1=parseInt(1.5);//1
var p2=parseInt('3.14');//3
var p3=parseInt('6a6');//6
var p4=parseInt('a66');//NaN
var p5=parseInt('一');//NaN
console.log(p1,p2,p3,p4,p5);
*/

//强制转换为浮点型
//var p1=parseFloat('3.14');//3.14
var p2=parseFloat('6a');//6
var p3=parseFloat('a6.18');//NaN
var p1=parseFloat(3);
console.log(p1,p2,p3);

//强制转换为字符串
var n=true;
//var str=n.toString();
console.log(n);