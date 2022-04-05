//练习：创建函数getDays，传递一个日期，返回这个日期是一年的第几天
//getDays(2021,12,2)
/*
function getDays(year,month,date){
  //计算出这个日期距离这一年的第一天相差的毫秒
  var d1=new Date(year,month-1,date+1);
  var d2=new Date(year,0,1);
  var d=d1-d2;
  //console.log(d);
  //换算为天
  return d/(24*3600*1000);
}
*/
//console.log( getDays(2022,3,1) );

function getDays(year,month,day){
    // 如果是闰年为29天，否则平年为28天
    var second = year%4==0 && year%100!=0 || year%400 ==0 ? 29 : 28;
    //声明变量，用于记录总天数，先把当前月天数加入进去
    var sum = day;
    //每个月的天数不同
    var monthDays = [31,second,31,30,31,30,31,31,30,31,30,31];
    //遍历当前月份
    for(var i = 0; i<month-1; i++){
        //加入每个月份的天数
        sum+=monthDays[i];
    }
    //返回总的天数
    return sum;
}
console.log( getDays(2022,3,1) );

