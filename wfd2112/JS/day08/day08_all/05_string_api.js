/*
var str='涛哥playing';
//查看字符串的长度
console.log( str.length );
//字符串在调用属性和方法的时候，会自动包装为对象，然后再调用属性和方法
console.log( new String(str).length );

var str='javascript';
//获取下标对应的字符
//''
console.log( str.charAt(10),str[10] );


//练习：遍历字符串javascript，统计出字符a出现的次数
var str='javascript';
for(var i=0,count=0;i<str.length;i++){
  //console.log( str.charAt(i),str[i] );
  //判断每个字符是否为a
  if(str[i]==='a'){
    count++;
  }
}
console.log(count);


//查看字符串中是否含有某个字符(串)
var str='javascript';
console.log(str.indexOf('a'));//找第1个
console.log(str.lastIndexOf('a'));//找最后1个

//练习：声明变量保存用户输入的邮箱，如果邮箱中不含有@字符，打印‘非法的邮箱’
var email='tao123@163.com';
if(email.indexOf('@')===-1){
  console.log('非法的邮箱');
}


var str='JavaScript';
//英文字母转大写
console.log( str.toUpperCase() );
//英文字母转小写
console.log( str.toLowerCase() );

console.log(str);



//截取字符串
var str='javascript';
//console.log( str.slice(4) );
//console.log( str.slice(4,7) );
console.log( str.slice(-3,-1) );


// 练习：声明变量保存用户输入的邮箱，分别截取出邮箱的用户名和域名     
var email='tao123@163.com'; 
//查找@的下标
var n=email.indexOf('@');
//console.log(n);
//截取用户名
var user=email.slice(0,n);
//截取域名
var domain=email.slice(n+1);
console.log(user, domain);

var arr=['a','b','c'];
//数组转字符串
var str=arr.join('-');//'a-b-c'
//console.log(str);
//字符串转数组
console.log( str.split('-') );
*/
//练习：翻转字符串javascript  
var str='javascript';
//将字符串转为数组，每个字符是一个元素
//按照空字符串切割
var arr=str.split('');
//翻转数组
//转为字符串
console.log(arr.reverse().join(''));

