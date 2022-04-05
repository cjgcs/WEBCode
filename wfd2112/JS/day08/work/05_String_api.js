/*
var str='涛哥playing';
//查看字符串的长度
console.log(str.length);
//字符串在调用属性和方法的时候,会自动包装为对象,然后再调用属性和方法
console.log(new String(str).length);
*/

/*
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
*/


/*
//声明变量保存用户输入的邮箱字符串，判断字符串是否为邮箱格式(@)如果有打印合法邮箱，否则打印非法邮箱
var str1='2387442398@qq.com';
if(str1.indexOf('@')===-1){
  console.log('非法邮箱');
}else{
  console.log('合法邮箱');
}
*/



//翻转字符串JavaScript
var str3='JavaScript';
var str4=str3.split('');
var str5=str4.reverse();

console.log(str5.join(''));





