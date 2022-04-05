//创建函数getDays，传递一个日期，返回这个日期是一年的第几天
//    getDays(2021,12,25)

function getDay(n,y,r){
  var a=new Date(n,y,r+1);
  var a1=new Date(n,1,0);
  var b=a-a1;
  b=b/1000;
  //return parseInt(b/(24*3600*30));//月份
  //return b/(24*3600);//天数
  console.log(n+'年'+y+'月'+r+'日'+'是一年的第 '+b/(24*3600)+' 天');
}
getDay(2022,12,01);
//console.log('2022/12/01 是一年的第 '+getDay(2022,12,01)+' 天');







