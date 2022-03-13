//循环输出1~10之间所有整数
/*var i=1;
do{
  //循环体
  console.log(i);
  //增量
  i++
}while(i<=10);//循环条件
*/

//练习：使用循环打印30~20之间所有的整数
/*var a=30;
do{
  console.log(a);
  a--;
}while(a>=20);
*/

//练习：循环打印1~100之间所有的奇数
//使用if判断
/*var b=1;
do{
  if(b%2===1){
    console.log(b);
  }
  b++;
}while(b<=100);
*/

//练习：计算1~100之间所有能被3整除的数字的和
/*var c=1;
var x=0;
do{
 if(c%3===0){
  
  x+=c;
  
 }
 c++;
}while(c<=100);
console.log(x);
*/

//练习：假设有一张纸的厚度是0.0001米，折叠多少次能够达到珠穆朗玛峰的高度（8848米）
var paper=0.0001;
var x=0;
do{
  paper*=2;
  x++;
  console.log(paper);
}while(paper<=8848);
console.log(x);
console.log(paper);













