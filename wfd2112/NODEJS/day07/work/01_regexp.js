/*
//定义手机的正则表达式
var p=/^1[3-9]\d{9}$/;
//使用正则表达式验证手机号码
console.log(p.test('14982565313'));
*/

//
var str=`有一天我来到了涛哥家说：卧槽，你家真大！
我轻蔑的说：这还算大，我草，还有地下18层！
涛哥惊讶的说到：woCao，还有地下室？`;
//查找并替换
//g -> global 全局查找
//i -> ignore 忽略大小写
console.log( str.replace(/卧槽|我草|wocao/ig,'**') );




























