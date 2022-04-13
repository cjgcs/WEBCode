//作业：创建一个对象，包含多个属性，遍历对象得到每个属性值，将属性值写入到homework.txt中，使用异步
const fs=require('fs');
fs.writeFile('./homework.txt','',(err)=>{
  if(err){
    return err;
  }
});
var a={
  id:'007',
  name:'小陈',
  sex:'男',
  salary:10000,
  favorite:'打游戏'
}

for(var k in a){
  fs.appendFile('./homework.txt',a[k]+'\n',(err)=>{
    if(err){
	  return err;
	}
  })
};


