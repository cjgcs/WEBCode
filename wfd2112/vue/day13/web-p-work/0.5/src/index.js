import $ from "jquery"
//第一行代码有兼容性问题，WEBPACK帮我们解决
$(function(){
  $("li:odd").css("background-color","red")
  $("li:even").css("background-color","red")  
})
