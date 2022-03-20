//练习：打印2000~2100之间前10个闰年
for(var year=2000,js=0;year<=2100;year++){
  if(year%4===0 && year%100!==0 || year%400===0){
    console.log(year);
  }
  js++;
  if(js===10){
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
	
	bj+=j+'*'+i+'='+(i*j)+'  ';
	if((i===3 || i===4) && j===2){
	bj+=' ';
	}
  }
	
  console.log(bj);
}


// 练习（选做）：声明变量保存任意一个数字，查看这个数字是否为素数，如果是打印‘素数’，否则打印‘非素数’。
var n=5;
for(var i=2;i<=n;i++) {		//从2开始循环		
	var b=true;					//布尔值为true
	console.log('i:'+i);
	for(var j=2;j<i;j++) {	//循环
		console.log('j:'+j);
		if(i%j===0) {		//判断是否有余数
			b=false;		//改变布尔值状态
			break;
		}
	}		
}
if(b) {					//如果布尔值为真则输出
	console.log('素数');
}else{
    console.log('非素数');
}








