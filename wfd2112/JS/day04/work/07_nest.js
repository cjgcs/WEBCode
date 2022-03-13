//循环打印5个*，成一行
//*****
//声明变量，用于保存拼接的字符串
//var pj='';
/*for(var i=1,pj='';i<=5;i++){
  //console.log('*');
  //每次循环拼接一个*
  pj+='*';
  //console.log(pj);
}
console.log(pj);
*/
for(var j=1;j<=5;j++){//外层控制：控制循环的行数
	for(var i=1,pj='';i<=5;i++){//内层循环：控制每一行拼接的列数
	  //console.log('*');
	  //每次循环拼接一个*
	  pj+='*';
	  //console.log(pj);
	}
	console.log(pj);
}








