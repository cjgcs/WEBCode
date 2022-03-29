//将一句英文中的每个单词首字母大写，其余小写
//   hOw aRE yOU  ->  How Are You

var xx='hOw aRE yOU';

var a=xx.split(' ');

for(var i=0;i<a.length;i++){
  var b=a[i].slice(0,1);
  var b1=b.toUpperCase();
  var c=a[i].slice(1);
  var c1=c.toLowerCase();
  a[i]=b1+c1;
}

console.log(a.join(' '));














