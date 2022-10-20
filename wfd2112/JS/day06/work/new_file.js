function getRandom(istart, iend){
        var iChoice = iend - istart +1;
        return Math.floor(Math.random() * iChoice+ istart);
}
var iArray = []; 
for(var i=0; i<10; i++){
var result= getRandom(10,100);
        iArray.push(result);
}
console.log(iArray.sort())
