//同步

//引入文件系统模块
const fs=require('fs');
/*//查看文件状态
var a=fs.statSync('../../day02');
console.log(a);
//检测是否为目录
console.log(a.isDirectory());
//检测是否为文件
console.log(a.isFile());
*/


/*
//异步
fs.stat('./js-29-陈健.xmind',function(err,r){
  //console.log('这是异步执行的结果');
  //err可能产生的错误结果
  if(err){
    throw err;
  }
  //r成功的结果
  console.log(r);
});
console.log('主程序结束');
*/


//创建目录
/*
//异步
fs.mkdir('./mydir1',(err)=>{
  if(err){
    throw err;
  }
  console.log('创建成功');
});
*/

//同步
/*
fs.mkdirSync('./mydir2');

console.log('主程序结束');
*/

//练习：分别使用两个方法移除mydir1和mydir2
//移除目录
//同步
//fs.rmdirSync('./mydir1');

//异步
/*
fs.rmdir('./mydir2',(err)=>{
  if(err){
   throw err;
  }
});
*/



//读取目录
/*
//同步
console.log(fs.readdirSync('../../day02'));
console.log('主程序结束');
*/


/*
//异步
fs.readdir('../../day02',(err,r)=>{
  if(err){
    throw err;
  }
});
console.log('主程序结束');
*/

//清空写入文件
/*
//异步
fs.writeFile('./1.txt','tedu',(err)=>{
  if(err){
    throw err;
  }
});

console.log('主程序结束');
*/

//练习：使用同步往文件2.txt中写入数据
/*
//同步
fs.writeFileSync('./2.txt','你好');
console.log('主程序结束');
*/


//追加写入
// 练习：使用同步方法往文件3.txt写入数据
//同步
//fs.appendFileSync('./3.txt',' tedu');
//console.log('主程序结束');

//异步
//练习:创建数组,包含多个姓名,遍历数组得到每个姓名,将姓名写入到文件stu.txt中
/*
var a=['张三','李四','王五','小张','小丽']
for(var i=0;i<a.length;i++){
  fs.appendFile('./stu.txt',a[i]+'\n',(err)=>{
    if(err){
	  throw err;
	}
  });
}
console.log('主程序结束');
*/

//读取文件
///同步
/*
var x=fs.readFileSync('./stu.txt');
console.log(x.toString());//转换成字符串
*/
//异步
/*
fs.readFile('./stu.txt',(err,r)=>{
  if(err){
    throw err;
  }
  console.log(r.toString());
});

console.log('主程序结束');
*/


//删除文件
//删除1.txt
//fs.unlinkSync('./1.txt');



//检测文件/目录是否存在
//同步存在,异步被废弃

//console.log(fs.existsSync('./2.txt'));



//练习:如果文件2.txt存在,则删除文件
if(fs.existsSync('./2.txt')){
  fs.unlinkSync('./2.txt');
};
