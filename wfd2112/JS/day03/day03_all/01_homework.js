//闰年：4年一闰，百年不闰，400年再闰
//能被4整除，并且不能被100整除，或者能被400整除
var year=2022;
console.log(year%4===0 && year%100!==0 || year%400===0);
console.log(year%400===0 || year%4===0 && year%100!==0);
