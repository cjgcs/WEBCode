/*
var arr=['a','b','c','d'];
//翻转数组
arr.reverse();
console.log(arr);


var arr=[23,9,78,6,45];
//数组排列
arr.sort(function(a,b){
  return a-b;//拿出两个数进行比较，然后进行从小到大排序
  return b-a;//从大到小排列
});
console.log(arr);

*/

/*
var arr1=['潘灿','史岩峰','栗鹏鹏'];
var arr2=['鲁俊东','严安池','马鑫磊'];
var arr3=['何帅','任宏翔','房文帅'];
//拼接多个数组
console.log( arr1.concat(arr2,arr3) );
console.log( arr1.concat );
console.log(arr1);
*/

/*
var arr=['潘灿','史岩峰','栗鹏鹏','鲁俊东','严安池','马鑫磊','何帅','任宏翔','房文帅']; 
//截取数组元素
//console.log( arr.slice(2) );
//console.log( arr.slice(2,4) );//end不包括结束的那一项
console.log( arr.slice(-3,-1) );
//console.log(arr);
*/

/*
// 练习：创建数组包含a~h，分别截取bcd， f，将截取这两个数组拼接成一个新的数组
var arrx=['a','b','c','d','e','f','g','h'];
var n1=arrx.slice(1,4);
var n2=arrx.slice(5,6);
var n3=n1.concat(n2);
console.log(n3);
*/



/*
var arr=['潘灿','史岩峰','栗鹏鹏','鲁俊东','严安池','马鑫磊','何帅','任宏翔','房文帅'];
//删除数组元素
//console.log( arr.splice(2) );
//console.log( arr.splice(2,2) );
console.log( arr.splice(-3,0,'刘子轩','赵长瑞') );
console.log(arr);
*/

//练习：创建数组，包含a~h，每个字母是一个元素，删除cd，替换f为m，在下标为1的位置插入z
var arra=['a','b','c','d','e','f','g','h'];
var x1=arra.splice(2,2);
var x2=arra.splice(3,1,'m');
var x1=arra.splice(1,0,'z');
console.log(x1);
console.log(arra);


/*
//练习：创建数组，包含a~h，每个字母是一个元素，删除cd，替换f为m，在下标为1的位置插入z
var arr=['a','b','c','d','e','f','g','h'];
arr.splice(2,2);
arr.splice(-3,1,'m');
arr.splice(1,0,'z');
console.log(arr);
*/

/**/
var arr=['潘灿','史岩峰','韩格格'];
//在数组的末尾添加
console.log( arr.push('天帅','栗鹏鹏') );
//删除数组末尾的一个元素
console.log( arr.pop() );
//在数组的开头添加
console.log( arr.unshift('王浩','涛哥') );
//删除数组开头的一个
console.log( arr.shift() );
//console.log( arr.shift() );
console.log(arr);


/*
var arr=['潘灿','史岩峰','韩格格'];
//检测是否含有某个元素
console.log( arr.indexOf('李鑫') );
*/


/*
// 练习：创建数组保存任意两个福字，判断数组中是否含有'敬业福'，如果没有则该福字添加到数组。
var arrb=['爱国福','富强福'];
if(arrb.indexOf('敬业福')===-1){
  arrb.push('敬业福');
}
console.log(arrb);

*/









/*
//练习：创建数组保存任意两个福字，判断数组中是否含有'敬业福'，如果没有则该福字添加到数组。
var arr=['和谐福','友善福'];
//判断是否含有敬业福
//如果没有
if(arr.indexOf('敬业福')===-1){
  arr.push('敬业福');
}
console.log(arr);
*/


