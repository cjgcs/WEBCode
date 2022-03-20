/*
var n=3;
function n1(){
  n2=4;
  console.log(n2);
}
n1();//4
console.log(n2);//4
*/



var n=3;
function n1(){
  n2=4;
  n=6;
  //console.log(n2);//4
  console.log(n);//6
}
n1();//6
//console.log(n2);//4
console.log(n);//6


