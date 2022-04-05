//引入模块
//引入同一级目录下的模块必须加./ 表示同一级目录
var obj=require('./08_yan.js');
console.log(obj);
console.log(obj.myA);
console.log(obj.myFn());
console.log(obj.myAdd(2,3));