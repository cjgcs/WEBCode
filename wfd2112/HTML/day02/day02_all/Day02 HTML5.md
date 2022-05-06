# Day02 HTML5

## 一 列表标签

html中有有序列表（ol），无序列表（ul）不管何种列表，其中只能涵盖列表项标签（li），dl标签

### 1.有序列表

`<ol></ol>`有序列表标签，双标签，第一层嵌套内只能包含`<li></li>`列表项标签，单独存在没有任何意义，块级元素，独占一行显示

`<li></li>`列表项标签，双标签，可以包裹任何标签和文本，块级元素

列表项前是有数字顺序，type类型 1，A，a，i，I用来更改列表项的数字，type属性可以设置

type = “1” 默认的

type =  “a”  小写字母

type =  “A”  大写字母

### 2.无序列表

`<ul></ul>`无序列表标签，双标签，第一层嵌套内只能包含列表项标签，块级元素，独占一行显示

`<li></li>`列表项标签，双标签，可以包裹任何标签和文本，块级元素

type类型 disc，square，circle用来更改列表项的形状，type属性可以设置为

type =  "disc" 默认的  实心圆

type =  ”square“  实心方块

type =  “circle”  空心圆

### 3.自定义列表

`<dl></dl>`自定义列表不仅仅是一列项目，而是项目及其注释的配合，双标签，块级元素

每个自定列表项可以指定`<dt></dt>`列表标题，只能包括包裹文本

每个自定义列表项使用`<dd></dd>`双标签包括文本和元素

### 4.嵌套列表

当需要多级目录，或多级列表时，可采用列表标签嵌套的方法，写法与普通列表书写方法一样，只是在列表项中再增加列表，列表嵌套结构因嵌套复杂，容易出错，因此在书写中需要格外注意



## 二 表格标签

### 1.表格标签

`<table></table>`表格标签，双标签，可以包括表格系列的标签

块级元素，对于表格往往应用于PC端部分布局，手机端不可用table标签布局

`<caption></caption>`表格标题标签，双标签，只可以包裹文本，块级元素，自占一行，可以表格的标题，只能有一个，可以省略不写，如果写一定在`<table></table>`标签内嵌套的第一行出现

`<thead></thead>` 表头标签，可以指定表格的列表表头，可不写

`<tbody></tbody>`表体标签，可以指定表格的主题部分，可不写

`<tfoot></tfoot>`表尾标签，可以指定表格的尾部说明，可不写。

`<tfoot></tfoot>`标签必须被用在以下情境中，作为`<table>`元素的子元素，出现在`<caption>`和`<thead>`元素之后，`<tbody>`和`<tr>`元素之前

### 2.表格的行列

`<tr></tr>`行标签，双标签，只能包裹列标签和加粗列标签，可存在在表头，表体，表尾中，代表一行的范围

`<th></th>`加粗列标签，一般放在表头，当做列标题使用

`<td></td>`表格单元列标签，放置内容，比如文本和其它标签





![image-20220208115010659](C:\Users\web\AppData\Roaming\Typora\typora-user-images\image-20220208115010659.png)



![image-20220208142649336](C:\Users\web\AppData\Roaming\Typora\typora-user-images\image-20220208142649336.png)



### 3.表格标签的相关属性

`<table>`标签下的属性

border  边框，单位是像素，表格表框的宽度

height  像素/百分比  表格整体高度

width  像素/百分比   表格整体宽度

border-collapse 值 collapse 除去缝隙，需要写在style样式里面

style="`border`-collapse:collapse;"

cellpadding  像素/百分比   文字距离单元格距离

cellspacing  像素/百分比    边框与单元格的距离

align   left   center   right   对齐方式

bgcolor   英文/16进制 rgba表格背景颜色

background url 表格背景图片

`<th> <tr> <td>` 标签下的常用属性

width 像素/百分比  设置单元格的宽

height  像素/百分比   设置单元格的高

align   left   center   right   对齐方式

拆分，合并单元格

colspan   数字  （占据的列数）

合并列   （左右相邻合并）

rowspan  数字  （占据的行数）

合并行  （上下相邻合并）



![image-20220208155452628](C:\Users\web\AppData\Roaming\Typora\typora-user-images\image-20220208155452628.png)

## 三 表单元素

### 1.表单标签

`<form></form>`  表单标签是HTML表单用于搜集不同类型的用户输入

双标签，一般情况下不能单独使用，需要在form元素中加入input等标签共同使用

常用属性：

​		name属性主要是对form进行标记

​		method="get/post" get传送的数据量较小，不能大于2KB，POST传输的数据量比较大，理论上无限制，get安全性比较低，post安全性比较高，但是执行效率get比较快。

​		action，处理表单提交的URL（可以是node中的路由器接口地址）

​		enctype属性，当method属性为post时，enctype就是将表单内容提交给服务器的媒体类型

application/x-www-form-urlencoded:未指定属性时的默认值

n个需求的表单内容



### 2.input标签及控件

`<input/>`元素是最重要的表单元素，它有很多形态，根据不同的type属性

input标签是单标签，主要依靠控件，input的type类型就是用于书写控件的属性，它的控件有多种类，从而达到我们的要求

input 标签  可以定义宽度和高度，并且不独占一行

`<input type="控件名称">`

#### 1.文本框

type="text" 定义单行文本输入域，用户可以在其输入文本

value = ""  代表初始值，用户输入后可以通过事件获取该属性的值

placeholder="xxx" 占位符,可用来作为对用户的提示文字

name = "" 可与服务交互数据的元素标示，可以在服务器根据其内容获取用户输入值

maxlength 属性配合使用，可创建合法范围，只写数字



#### 2.密码框

type="password" 定义密码输入域，用户在该输入域输入的字符不直接显示

具有 value，placeholder，name属性

`<input type="password" placeholder="输入密码" name="pwd"/>`



#### 3.单选框

type = “radio” 定义单选框，用户只能在多个选项中选择其中一个

单选框有一个很重要的属性，name属性，name属性相同则可以让单选框变为一组，从而达到单选的目的  name=“值” ，值相同的单选框，都会被作为一组单选框，一组单选框只能选择其中一个

checked 属性代表默认被选中，值可以不写

`<input type="radio" name="sex" />男`

`<input type="radio" name="sex" />女`



#### 4.复选框

type="checkbox" 定义复选框，用户可以在多个选项中，选择一个或多个

复选框有一个很重要的属性，name属性，name属性相同可以让多个复选框变为一组，从而达到复选内容的目的

checked 属性代表默认被选中，可以不用写值，多选可以有多个默认

`<input type="checkbox" name="hobby" checked/>`抽烟

`<input type="checkbox" name="hobby" />`喝酒

`<input type="checkbox" name="hobby" />`烫头



#### 5.文件上传

type=“file” 的<input>元素使用户可以选择一个或多个元素以提交表单的方式上传到服务器

multiple属性表示允许选择多个文件，当这个属性存在在标签中，则可以同时上传多个文件

`<input type="file">`

`<!-- 多文件上传 -->`

`<input type="file" multiple>`

#### 6.html5 新增type属性

type=“number”  用于输入数字的字段，其中min设定允许的最小值，max设定允许的最大值，step可规则合法数字间隔，value规定默认值

type=“range” 定义用于精确值不重要的输入数字的控件，min属性指定最小值

max属性指定最大值限制，step属性规定合法数字间隔，value规定默认值

















