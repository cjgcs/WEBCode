/*
var str='涛哥playing';
//查看字符串的长度
console.log(str.length);
//字符串在调用属性和方法的时候,会自动包装为对象,然后再调用属性和方法
console.log(new String(str).length);
*/

//练习：遍历字符串javascript，统计出字符a出现的次数

var str='aajavascriptaaa';
console.log(str.charAt(1),str[1]);
var count=0;
for(var i=0;i<str.length;i++){
	if(str.charAt(i)==='a'){
	  count++;
	}
}
console.log(count);
