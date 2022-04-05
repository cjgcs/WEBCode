var a=require('./circle.js');
console.log(a.itC(a.itn));
console.log(a.itS(a.itn));

//circle
var n=4;
function C(n){
  return Math.PI*2*n;
}

function S(n){
  return Math.PI*Math.pow(n,2);
}

module.exports={
  itC:C,
  itS:S,
  itn:n
}




