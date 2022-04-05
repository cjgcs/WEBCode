//创建Buffer，分配内存空间，单位是字节
var buf=Buffer.alloc(9,'abc涛哥');
console.log(buf);
//转为字符串
console.log(buf.toString());