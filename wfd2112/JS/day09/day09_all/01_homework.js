//练习：将一句英文中的每个单词首字母大写，其余小写
//hOw aRE yOU  ->  How Are You
var str='hOw aRE yOU';
//将字符串转为数组
var arr=str.split(' ');
//遍历数组得到每个单词
for(var i=0;i<arr.length;i++){
  //console.log(arr[i]);
  //arr[i]代表每个单词
  //截取首个字母，转大写
  var f=arr[i].slice(0,1).toUpperCase();
  //截取其余的字母，转小写
  var o=arr[i].slice(1).toLowerCase();
  //console.log(f,o);
  //把转换后的两部分拼接起来，覆盖之前的单词
  arr[i]=f+o;
}
//把数组转为字符串，单词之间用空格分隔
console.log(arr.join(' '));



