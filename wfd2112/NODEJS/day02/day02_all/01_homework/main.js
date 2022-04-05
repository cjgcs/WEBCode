//引入同一级目录下的模块circle.js
//同一级目录下  ./
//上一级目录下  ../  
//上上级目录下  ../../
var circle=require('./circle.js');
console.log(circle);
//console.log( circle(5) );
//调用暴露的函数
//console.log(circle.myLen(5).toFixed(2));
//console.log(circle.myArea(5).toFixed(2));

//局部变量
console.log(__dirname);
console.log(__filename);


