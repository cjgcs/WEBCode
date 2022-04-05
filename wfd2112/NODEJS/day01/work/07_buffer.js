//创建Buffer，分配内存空间为5个字节，并存储字符，每个中文字符占3个字节
var  buf=Buffer.alloc(5,'abcde'); 
buf.toString()  //将Buffer数据转为字符串
console.log(buf)

var  buf1=Buffer.alloc(6,'涛哥'); 
console.log(buf1.toString())






