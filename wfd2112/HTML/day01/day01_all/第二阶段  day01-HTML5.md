# 第二阶段  day01-HTML5

## 1.个人介绍

讲师：林森

邮箱：linsen@tedu.cn

![img](file:///C:/Users/web/Documents/WXWork/1688852902817020/Cache/Image/2022-02/2022.01.13_09.18.19.jpg)

中心名称-2112-姓名

山大路中心-WEB2112-诸葛孔明





## 2.第二阶段目标



①HTML5   -----   2 天

②HTTP & AJAX  --  5天   --   难点

③CSS基础 & 高级   ----   8 天   --  重点

④响应式布局 Bootstrap   --  5 天   重点

⑤云服务器   ---   1天

前端圣经级网址

https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element



## 3.今日目标

①开发概述——了解

②HTML基础语法——掌握

③常用标签1：文本——熟练掌握

④常用标签2：图像和链接——熟练掌握

⑤常用标签3：表格——熟练掌握



## 4.工具介绍

Web页面的运行需要两种软件：

 ①程序员编写网页的工具——**网页编辑器**

​	小型软件(xMB)：notepad、notepad++、editplus

​	中型软件(xxMB)：SublimeText

​	大型软件(xxxMB)：Dreamweaver、Eclipse/MyEclipse、IDEA/WebStorm、VSCode、HBuilderX

 ②用户浏览网页的工具——**网页浏览器**

​	Netscape Navigator / Mozilla Firefox

​	Microsoft  IE / Edge（Chrome内核）

​	Google Chrome（Webkit内核 + V8内核）

​	Apple Safari（Webkit内核）



## 5.前端开发三个基础语言/前端三剑客

1.HTML   --   用于定义页面的内容

2.CSS       --   用于控制页面的样式

3.JS          --   用于控制页面的行为/交互



## 6.HTML

Hyper Text Markup Language：超文本标记语言

### 1.超文本

指不仅仅是纯文本，还包括多媒体信息，例如，音频，视频，图片等

### 2.标记

也称之为标签，表示一个页面的渲染指令

### 3.标记语言特点

#### 1.单标记标签

<标签名> 

#### 2.双标记标签

<开始标签>标签体</结束标签>

#### 3.属性

<标签名    属性名="值" > 

<开始标签   属性名=“值” >标签体</结束标签>

#### 4.标签的嵌套

<开始标签   属性名=“值” >

​	<开始标签   属性名=“值” >

​		<开始标签   属性名=“值” >

​		</结束标签>

​	</结束标签>

</结束标签>

注意，为了保证美观及观赏修改，要注意缩进



## 7.开发HTML

项目  - 》  目录   -》 html文件

![image-20220207113426935](C:\Users\web\AppData\Roaming\Typora\typora-user-images\image-20220207113426935.png)



### HTML基本格式

!DOCTYPE html     约定的版本，这是HTML5的版本

html  文件的根元素必须是html

html的子元素有两个

​	head 元数据   这些数据不会直接显示到网页上

​		meta charset="utf-8"  拥有设定页面的编码，utf-8支持中文

​		title  标题

​	body 网页正文，这个区域中的内容会显示在浏览器上



## 8.常用标签

### 1：文本

内容标题 h1~h6

​	字体由大到小，字体加粗，自带上下间距，独占一行

段落标签 p

​	独占一行，自带上下间距

换行 ： br

文本相关：

​	b：加粗

​	i ： 斜体

​	u ：下划线

​	small ： 小字

​	s ：删除线

​	sup ：上标字

​	sub ：下标字

​	pre ： 保留原始格式文字



HTML将所有标签分为两大类

1.块级元素

必须独占一行，无需换行，可以设置宽高

例如：

​	div，最简单的块级元素，全称叫division，区/块

​	h1 h2

2.行内元素

可以与其他内容共处一行，换行必须用br

​	span：最简单的行内元素

​	b ，i

行内块

共占一行，可以设置宽高







### 2.注释

<!--   这一段内容 叫做注释  -->

快捷键

Ctrl + R ： 在浏览器中运行当前页面文件

Ctrl + ↑/↓：快速移动当前行代码

Ctrl + D ： 快速删除当前行代码

Ctrl + C/V ： 快速复制/粘贴

Ctrl + ？/： 快速注释代码

Ctrl + Z   ： 回退操作







### 3.特殊符号

浏览器小特性

浏览器把源代码中连续多个  换行符，空格符，制表符 渲染成一个“英文空格”  

& nbsp;   空格 (non-breaking-space)

& lt;             小于号（less than）

& gt;  		  大于号（greater than）

& reg;   	   圈R（register）

& copy;       圈C（copyright）

& trade;      TM符号（trademark）

& times;     关闭符号

& otimes;  带圈的关闭符号

(以上   & 与字母之间不能有空格，此文件为了演示使用)





### 4.图像与链接

img : 全称  image  图像

src ： 图片路径

​	相对路径： 访问站内资源时使用

​		同级目录 ：  直接写图片名（可以加./）

​		上级目录  ： ../图片名

​		下级目录 ： 文件名/图片名

​	绝对路径：访问站外资源时使用，这种访问图片的方式又称图片盗链

​						好处：节省本站资源

​						坏处：有可能找不到图片

alt ： 图片不能正常显示时，显示的文本

title ： 鼠标悬停在图片时显示内容

width/height

​	设置图片的宽高，两种赋值方式

​	1.像素

​	2.上级元素百分比，如果只给宽度赋值，高度会等比例缩放



a：全称 anchor，锚，超链接

href：

​	作用类似于图片的src属性，资源路径，可以指向页面资源或任意文件资源，如果指向的资源浏览器支持浏览则直接浏览，不支持浏览的则下载

页面内部跳转

​	在目的地的元素里面添加 id="xxx"

然后通过超链接的href=“#xxx” 跳转到指定元素位置

图片超链接

​	用a标签包裹img就是图片超链接

















### 











