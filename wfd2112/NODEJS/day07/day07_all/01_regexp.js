/*
//定义手机的正则表达式
var p=/^1[3-9]\d{9}$/;
//使用正则表达式验证手机号码
console.log( p.test('13823459234') );
*/
//
var str=`有一天新哥来到了涛哥家说：我草，你家真大！
涛哥轻蔑的说：这还算大，卧槽，还有地下18层！
新哥惊讶的说到：WoCao，还有地下室？`;
//查找并替换
//g -> global 全局查找
//i -> ignore  忽略大小写
console.log( str.replace(/我草|卧槽|wocao/ig,'**') );




