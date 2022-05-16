AJAX-DAY03

一 复习练习

1 id属性

id属性规定了HTML元素的唯一的id 即身份标识符

id在HTML文档必须是唯一的

为了保证唯一，id的命名通常会有多个单词组成，中间常常使用 "_" 作为分隔符

id属性 可以通过JavaScript或通过CSS为带有指定id的元素改变或添加一些内容

`<input type="text" id='title'>`

方法 1    let e = document.getElementById('title')

方法 2    HTML5提供的简化方法，  直接通过id名称就可以操作元素了也就是直接使用  title就可以



2 value属性

value 属性规定了 <input> 元素的值

value 属性对于不同的  input  类型  用法也不同

2.1 文本输入框或密码框

一般需要输入内容的input标签，它的value就是输入完成的内容

value = ‘输入的内容’

2.2 下拉选

如果option标签中书写了  value=‘值’ 那么value就是value的值

如果option标签中没有书写 value属性  那么就是option标签的内容

具体得到哪个值由网页显示的内容决定

`<select id="sel">
    <option value='3'>请输入内容</option>

​	<option>我是张三</option>
</select>`

2.3 button按钮

`<input type='button' id='btn' value='内容'>`

如果按钮不写value 那么 按钮的显示上是个 空字符串

如果书写了value=‘内容’  按钮上显示内容两个字

通过  id获取按钮的value时得到的就是  ‘内容两个字’

其中   ‘内容’  可以任意字符



3 `<script>` 标签

在网页中使用 `<script></script>`标签，可以在网页嵌套js代码



4 事件

是指用户在操作对网页内容由于某种行为所进行的操作

4.1 特殊事件

window.onload 页面加载完成事件

在页面完全载入之后（包括图片，css文件等等）执行某些代码



4.2 常见的事件

用法有两种

一种是写在<script>标签内部，可以通过id.事件名进行操作

一种是写在源标签内部，以属性的方式书写

（1）onblur 光标移除事件

事件会在对象失去焦点时发生，常常用于输入框

（2）onchange 内容修改事件

事件会在域的内容改变时发生，常常作用于下拉框

（3） onclick 点击事件

事件会在元素被点击时发生，常常作用于按钮



5 innerHTML的使用

用于双标签，修改或获取开始和结束标签之间的HTML（文本或标签等内容）

`例如：<tbody id='tb'>`

​					用来修改这中间的内容

​		`</tbody>`

常常用于修改其中间的内容，修改为文本或HTML标签,通过来id来进行操作

id.innerHTML = 具体的内容

****   注意   ****

每通过innerHTML修改标签体的内容之后，原内容就会完全消失

即将原来的全部内容都替换掉                     



功能完成后，准备测试ajax的时候

要关闭所有浏览器

不要使用HBuilderX去启动页面

去根目录，cmd启动node js

然后浏览器访问  该页面 

127.0.0.1:8080/页面名.html













