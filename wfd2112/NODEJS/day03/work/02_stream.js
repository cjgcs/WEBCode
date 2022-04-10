const fs=require('fs');
//创建可读取的文件流,采用流的方式读取文件
var rs=fs.createReadStream('./1.zip');
//创建可写入的文件流,会自动创建文件
var ws=fs.createWriteStream('./2.zip');
//吧读取的流通过管道添加到写入的流
rs.pipe(ws);




/*
//添加事件,监听是否有数据流入到内存
//data 固定用于,表示数据流入的事件,通过回调函数获取流入的这段数据
var n=0;//用于计数
rs.on('data',(a)=>{
  //a 代表流入的一段数据
  //console.log(a);
  n++;//读取一次++
});
console.log(n);

//添加事件,监听是否读取结束
//end 读取结束事件,会自动调用回调函数
rs.on('end',()=>{
  console.log(n);
})
*/























