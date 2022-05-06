# Day03 HTML5



## 一 列表标签

html 中有有序列表(ol)，无序列表(ul)和自定义列表(dl)。不管何种列表，其中只能涵盖列表项标签（li），dl 标签除外。

### 1.有序列表

\- `<ol></ol>`有序列表标签，双标签，第一层嵌套内只能包含`<li></li>`列表项标签，单独存在没有意义，块级元素可以自占一行显示

\- `<li></li>`列表项标签，为双标签可以包裹任何标签和文本，块级元素。

\- 列表项前有数字顺序，type 类型 1、A、a、i、I 用来更改列表项的数字。type 属性可以设置：

 \- `type="1"` 默认的

 \- `type="a"` 小写字母

 \- `type="A"` 大写字母

 

`<ol type="A">` 

`<li>html</li>` 

`<li>css</li>` 

`<li>JavaScript</li>` 

`</ol>` 

 

### 2.无序列表

\- `<ul></ul>`无序列表标签，双标签，第一层嵌套内只能包含`<li></li>`列表项标签，单独存在没有意义，块级元素可以自占一行显示

\- `<li></li>`列表项标签，为双标签可以包裹任何标签和文本，块级元素。

\- type 类型 disc、square、circle 用来更改列表项的形状。type属性可以设置：

\- `type="disc"` 默认的

\- `type="circle"` 空心圆点

\- `type="square"` 小正方形（实心的）

 

`<ul type="square">` 

`<li>后羿</li>` 

`<li>蔡⽂姬</li>` 

`<li>程咬⾦</li>` 

`</ul>` 

 

### 3.自定义列表

\- `<dl></dl>`自定义列表不仅仅是一列项目，而是项目及其注释的组合。双标签，块级元素。

\- 每个自定义列表项可以指定 `<dt></dt>` 列表标题，只能包裹文本。

\- 每个自定义列表项使用`<dd></dd>`双标签包裹文本和元素。

 

`<dl>` 

`<dt>国内电影</dt>` 

`<dd>流浪地球</dd>` 

`<dd>来电狂想</dd>` 

`<dd>疯狂外星⼈</dd>` 

`<dt>国外电影</dt> <dd>阿丽塔</dd>` 

`<dd>惊奇队⻓</dd>` 

`<dd>美国队⻓</dd>` 

`</dl>` 

 

### 4.嵌套列表

当需要多级⽬录，或多级列表时，可采取列标签套的⽅法，写法与普通列表书写⽅法⼀样，只是在列表项中再增加列表。列表嵌套结构因嵌套复杂，容易出错，因此在书写中需要格外注意。



`<ol type="1">` 

`<li> 认识web <ol type="I">` 

`<li>` 

`互联⽹介绍` 

`<ul>` 

`<li>互联⽹</li>` 

`<li>web和互联⽹的关系</li>` 

`</ul>` 

`</li>` 

`<li>浏览器介绍</li>` 

`<li>web的⼯作原理</li>` 

`</ol>` 

`</li>` 

`</ol>` 



## 二  表格

### 1.表格标签

\- `<table></table>`表格标签。双标签可以包裹表格系列的标签，块级元素，自占一行

\- 对于表格往往应用于 pc 端部分布局，手机端不可用 table 标签布局

\- `<caption></caption>`表格标题标签，双标签，只可以包裹文本。块级元素，自占一行，可以指定表格的标题，只能有一个，可以省略不写。如书写一定在`<table></table>`标签内嵌套的第一行出现。

\- `<thead></thead>`表头标签，可以指定表格的列表表头，可不写

\- `<tbody></tbody>`表体标签，可以指定表格的主体部分，可不写

\- `<tfoot></tfoot>`表尾标签，可以指定表格的尾部说明，可不写。`<tfoot>` 标签必须被用在以下情境中：作为 `<table> `元素的子元素，出现在 `<caption>`和 `<thead> `元素之后，`<tbody>` 和 `<tr>` 元素之前。

 

### 2.表格的行列

\- `<tr></tr>`行标签，双标签只能包裹列标签和加粗列标签，可存在在表头、表体和表尾中，属于结构，代表一行的范围。

\- `<th></th>`加粗列标签，一般放在表头，当作列标题使用。

\- `<td></td>`表格单元列标签，放置内容如文本和其他标签。



![image-20220207204311718](C:\Users\tarena\AppData\Roaming\Typora\typora-user-images\image-20220207204311718.png)



![image-20220207204317776](C:\Users\tarena\AppData\Roaming\Typora\typora-user-images\image-20220207204317776.png)



### 3.表格标签的相关属性

\- `<table>`标签下的属性

 \- `border` 像素 表格边框宽度

 \- `height` 像素、百分比 表格整体高度

 \- `width` 像素、百分比 表格整体宽度

 \- `border-collapse` 值`collapse` 除去缝隙，需要写在 style 样式中`style="border-collapse: collapse;"`

 \- `cellpadding` 像素、百分比 边框与单元格的距离

 \- `cellspacing` 像素、百分比 单元格边框宽度

 \- `align` left、center、right 对齐方式

 \- `bgcolor` 英文、16 进制、rgba 表格背景颜色

 \- `background`  url 表格的背景图片

\- `<th> <td>`标签下的常用属性

 \- `width` 像素、百分比 设置单元格的宽

 \- `height` 像素、百分比 设置单元格的高

 \- `align` left、center、right 水平移动

\- 拆分、合并单元格

 \- `colspan` 数字（占据的列数） 

合并列（左右相邻合并）

 \- `rowspan` 数字（占据的行数） 

合并行（上下相邻合并）




​    ![image-20220207204916725](C:\Users\tarena\AppData\Roaming\Typora\typora-user-images\image-20220207204916725.png)



练习 	 	

![image-20220207204930964](C:\Users\tarena\AppData\Roaming\Typora\typora-user-images\image-20220207204930964.png)



三 表单元素

1.表单标签

\- `<form></form>` 表单标签是 HTML 表单用于搜集不同类型的用户输入

\- 双标签，一般情况下不能单独使用，需要在 form 元素中加入 input 等标签共同使用

\- 常用属性

​	- name属性主要是对这个form进行标记

​	- methood=”get/post”， get传送的数据量较小，不能大于2KB。post传送的数据量较大，一般被默认为不受限。get安全性非常低，post安全性较高。但是执行效率get安全性非常低，post安全性较高。但是执行效率却比post方法好。

​	- action，处理表单提交的 URL（可以为node中的路由接口地址）。

​	- enctype属性，当method属性值为post时，enctype 就是将表单的内容提交给服务器的媒体类型。application/x-www-form-urlencoded：未指定属性时的默认值。

 

<form action="提交地址" method="提交⽅式">n个需求的表单内容 ……</form> 

 

2.input 标签及控件

\- `<input/>`元素是最重要的表单元素。它有很多形态，根据不同的 type 属性。

\- input 标签是单标签，主要依靠控件，input 的 type 类型就是用于书写控件的属性。它的控件有很多种类，从而达到我们要的需求。

\- input 标签是内联元素，但属于特殊的内联元素，可以定义宽度高度，单不自占一行

 

`<input type="控件名称" />` 

 

#### （1）文本框

\- `type="text"`定义单行文本输入域，用户可在其中输入文本

\- `value=""`代表初始值，用户输入后可通过事件获取该属性的值

\- `placeholder="xxx"` 占位符，可用来作为对用户的提示文字

\- `name=""`可与服务器交互数据的元素标示，可以在服务器端根据其 name 取得元素提交的值

\- `maxlength` 属性配合使用，可创建合法值范围，直接写数字

`<input type="text" placeholder="输⼊⽤户名" name="username" maxlength="10" />` 

 

#### （2）密码框

\- `type="password"`定义密码输入域，用户在该域中输入的字符不直接显示，而是显示星号或实心圆。

\- 具有`value、placeholder、name`属性

`<input type="password" placeholder="输⼊密码" name="pwd" />` 

#### （3）单选框

\- `type="radio"`定义单选框，用户只能在多个选项中选择其中一个。

\- 单选框有一个很重要的属性，name 属性。name 属性相同则可以让单选框变为一组，从而达到单选的目的 name="值"，值相同的单选框，都会被作为一组单选框，一组单选框的选项只能选择其一。

\- `checked` 属性代笔表默认被选中的,可以不用写值

`<input type="radio" name="sex" checked />男 <input type="radio" name="sex" />⼥` 

 

#### （4）复选框

\- `type="checkbox"`定义复选框，用户可以在多个选项中选择一个或多个。

\- 复选框有一个很重要的属性，name 属性。name 属性相同则可以让复选框变为一组，从而达到记录复选内容的目的。

\- `checked` 属性代笔表默认被选中的,可以不用写值，多选可以有多个默认被选中的项

`<input type="checkbox" name="eat" checked />吃⾯` 

`<input type="checkbox" name="eat" />吃饭` 

`<input type="checkbox" name="eat" checked />吃⼟` 

#### （5）文件上传

\- 使用 `type="file"` 的`<input>` 元素使得用户可以选择一个或多个元素以提交表单的方式上传到服务器上

\- `multiple`属性表示允许选择多个文件。 当这个属性存在在标签中，则可以同时上传多个文件。

`<input type="file" />` 

`<!-- 多⽂件上传 -->` 

`<input type="file" multiple />` 

 

#### （6）html5 新增 type 属性

\- `type="number"`用于输入数字的字段，其中 min 设定允许的最小值；max 设定允许的最大值；value 规定默认值；还有 step 可规定合法数字间隔；

\- `type="email"`专用于 email 的输入，省去了正则表达式的编写

\- `type="color"`使用 color 属性能直接调用系统的颜色调节窗口，默然为黑色

\- `type="range"`定义用于精确值不重要的输入数字的控件；min 属性指定最小值限制，max 属性指定最大值限制，step 属性规定合法数字间隔，value 属性规定默认值，

\- `type="date"`可用来选择或输入日期，包括（年/月/日）不包括时间

`<input type="number" min="1" max="5">` 

`<input type="email">` 

`<input type="color" id="color"﹥` 

`0<input type="range" min="0" max="100" step="10">100`

`<input type="date">` 



#### （7）菜单标签

\- `<select></select>` 下拉菜单标签,双标签，但不能单独存在，只能包裹`<option></option>` 标签是选项标签

\- `<option></option>`的`value`属性是可以获取并且得到该下拉菜单用户选择的是哪一项

\- `multiple`属性代表该下拉菜单可以多选。

`<select name="cd" id="city"   >` 

`<option value="0">请选择</option>` 

`<option value="1">北京</option>` 

`<option value="2">天津</option>` 

`<option value="3">⼴州</option>` 

`<option value="4">重庆</option>` 

`</select>` 



#### （8）文本域

\- `<textarea></textarea>`文本域标签具有滚动条的多行文本输入控件，与单行文本框 text 控件不同

\- 它不能通过 maxlength 属性来限制字数，为此必须寻求其他方法来加以限制以达到预设的需求。

\- 文本域禁止缩放的样式`resize:none;`

 

`<textarea name="" cols="30" rows="10" style="resize:none;"></textarea>`



#### （9）标记标签

\- `<label></label>` 标记标签标签不会向用户呈现任何特殊效果。双标签，内联元素，不自占一行

\- 它为鼠标用户改进了可用性。如果您在 label 元素内点击文本，就会触发此控件。label 标签的"for" 属性可把 label 绑定到另外一个元素。把 "for" 属性的值设置为相关元素的 id 属性的值。

 

`<label>⽤户名：</label><input type="text" placeholder="请输⼊⽤户名" />` 

`<input type="checkbox" id="mianmi" /><label for="mianmi">30天免密码登录</label>` 

#### （10）按钮

\- `type="submit"`定义提交按钮，提交按钮会把表单数据发送到服务器，数据会被发送到在 from 表单的 action 属性中规定的 URL。不定义文字内容，会显示“提交”

\- `type="reset"`重制表单里所有的内容会被清空，默认按钮文字为重制

\- `type="button"`普通按钮没有功能，需要 value 属性指定按钮文字

 

`<input type="submit" value="专门form表单提交/>` 

`<input type="reset" value="重置"/>`

`<input type="button" value="普通按钮" />`



(11) iframe网页嵌入

`<iframe></iframe>`在一个网页中,嵌入其他网页













