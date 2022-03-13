//练习：打印2000~2100之间前10个闰年
for(var year=2000,js=0;year<=2100;year++){
  if(year%4===0 && year%100!==0 || year%400===0){
    console.log(year);
  }
  js++;
  if(js>=10){
    break;
  }
}

//练习：使用循环打印输出 
/*
*
**
***
****
*/
for(var i=1,bj='';i<=4;i++){
    bj+='*';
	console.log(bj);
}


//拓展：完成九九乘法表

for(var i=1;i<=9;i++){

	for(var j=1,bj='';j<=i;j++){
	
	bj+=j+'*'+i+'='+(j*i)+' ';
	if((i===3 || i===4) && j===2){
	bj+=' ';
	}
  }
	
  console.log(bj);
}


















