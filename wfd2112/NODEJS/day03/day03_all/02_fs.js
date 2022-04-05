//引入文件系统模块 
const fs=require('fs');
/*
//1.查看文件状态
var s=fs.statSync('../day02');
//console.log(s);
//检测是否为目录
console.log( s.isDirectory() );
//检测是否为文件
console.log( s.isFile() );

//异步
fs.stat('./01_homework.js',function(err,r){
  //console.log('这是异步执行的结果');
  //err可能产生的错误结果
  if(err){
    throw err;
  }
  //r成功的结果
  console.log(r);
});

//2.创建目录
//异步
fs.mkdir('./mydir1',(err)=>{
  if(err){
    throw err;
  }
  console.log('目录创建成功');
});

//同步
fs.mkdirSync('./mydir2');

//3.移除目录
//异步
fs.rmdir('./mydir1',(err)=>{
  if(err){
    throw err;
  }
})

//同步
fs.rmdirSync('../day02');

//4.读取目录
//同步
//console.log( fs.readdirSync('../day02') );
//异步
fs.readdir('../day02',(err,r)=>{
  if(err){
    throw err;
  }
  console.log(r);
});

//5.写入文件
fs.writeFile('./1.txt','tedu',(err)=>{
  if(err){
    throw err;
  }
});

//练习：使用同步往文件2.txt中写入数据
fs.writeFileSync('./2.txt','tedu');

//6.追加写入
//fs.appendFileSync('./3.txt','tedu\n');
//练习：创建数组，包含多个姓名，遍历数组得到每个姓名，将姓名写入到文件stu.txt中
//使用异步方法写入
var arr=['王鐘稷','潘灿','史岩峰','深圳'];
for(var i=0;i<arr.length;i++){
  //console.log(arr[i]);
  fs.appendFile('./stu.txt',arr[i]+'\n',(err)=>{
    if(err){
	  throw err;
	}
  });
}

//7.读取文件
var data=fs.readFileSync('./stu.txt');
//读取的是buffer形式
console.log( data.toString() );

fs.readFile('./stu.txt',(err,r)=>{
  if(err){
    throw err;
  }
  console.log(r);
});
*/
//8.删除文件  
//fs.unlinkSync('./1.txt');
//9.检测文件是否存在
//只有同步一种方法
//console.log( fs.existsSync('../day02') );
//练习：如果文件2.txt存在，则删除文件
if( fs.existsSync('./2.txt') ){
  fs.unlinkSync('./2.txt');
}

console.log('主程序结束');





