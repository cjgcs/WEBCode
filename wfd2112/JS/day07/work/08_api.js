/**/
//将数组转为字符串
var arr=['a','b','c'];
console.log( arr.toString() );//'a,b,c'
//区分两个名字相同的API是否为同一个：
//查看调用方法的对象是否为相同类型数据
var n=2;
console.log( n.toString() );//'2'
var p=[1,2,3];
console.log( p.toString() );

//转字符串，指定分隔的字符
var arr1=['a','b','c'];
console.log( arr1.join('') );
console.log( arr1.join('|') );
console.log( arr1.join() );



