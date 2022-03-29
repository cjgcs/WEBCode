//遍历数组，翻转数组元素
//     ['a','b', 'c', 'd']   ['d','c','b','a']

var arr=['a','b', 'c', 'd'];
var arr1=[];
for(var i=arr.length-1;i>=0;i--){
  arr1[arr.length-i-1]=arr[i];
  
}
console.log(arr1)


//console.log(arr.reverse());


















