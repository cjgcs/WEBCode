import $ from "jquery"
import "./css/index2.css"
import "./css/index.less"

//第一行代码有兼容性问题，WEBPACK帮我们解决
$(function(){
  $("li:odd").css("background-color","pink")
  $("li:even").css("background-color","#ccc")  
})

class Person{
  static info = "person static info"
}
consol.log(Person.info);