CSS-DAY06

1 文本格式化

(1) 字体颜色

color:  颜色

颜色选择法 	



(2) 文本的水平对齐方式

text-align:

1  默认缺省值  left

2 center

3 right 

4 justify  两端对齐  (最后演示)



text-align:center;

让元素内部的,文本/行内元素/行内块水平居中,水平居中对齐

不会让后代块元素居中对齐,但是后代块元素会继承text-align:center

如果想让块元素居中

可以使用  margin:0px auto;



(3)文本的垂直对齐方式

行高  ------   定义一行文本的高度

行高的特点,如果行高大于文本字号,那么文本会默认在行高的范围内,垂直居中对齐

line-height

通常会把行高设置成容器的高度,让文本在容器垂直居中显示,但是多行文本不建议使用

取值      1 以px为单位的数字

​			  2  不带单位的数字,行高是字号的倍数	

通常文本类内容设置行高,输入框等内容选用内边距来调整



(4) 文本的线条修饰

text-decoration:

1 overline  上划线

2 underline  下划线

3 line-through 删除线

4 none去掉所有线条修饰,a标签去掉下划线

同时书写三条线是不合理的



(5)首行缩进

text-indent:

只能设置块级元素



(6)文本的阴影

text-shadow:h-shadow v-shadow blur color;

h-shadow   水平偏移量

v-shadow   垂直偏移量

blur             模糊度

color           颜色



表格的相关样式

1  表格的常用样式

(1) table的样式,之前学习的属性,基本都可以使用

但是,设置table的边框,只会设置最外层边框

(2) td/th的样式,尺寸,边框,字体,文本,内边距

​							外边距无效



2 表格的特有属性

(1) 边框合并  -  table样式

border-collapse:collapse;  (去缝隙)

默认值   separate   边框分离状态

(2) 边框距离    -   table样式

border-spacing:20px;

必须是在边框分离状态



(3)标题的位置

caption-side:

默认值   top在上面

​				bottom  在下面



(4)设置表格的显示规则

table-layout:

取值     1   默认值   auto

先缓存了内容,再根据内容绘制表格

​             2  固定布局  fixed

直接绘制



auto  自动布局

单元格大小会自动适应内容

表格复杂时,加载速度较慢,效率低

自动布局灵活

适用于不确定每列大小

fixed 表格固定布局

单元格大小取决于设置的尺寸

任何情况下,加载速度都很快

固定表格不够灵活

适用于确定了每列尺寸的表格





定位

1 什么是定位

控制元素在页面中的位置

2 定位的分类

(1)普通流定位

(2)浮动定位

(3)相对定位

(4)绝对定位

(5)固定定位



3 普通流定位(默认文档流)

(1)每个元素在页面都有自己的空间,相互之间不能堆叠

(2)每个元素默认是从父元素的左上角开始显示

(3)块级元素独立成行,按照从上往下的顺序排列

(4)行内元素和行内块,共用一行,一行显示不下,换行显示

从左往右排列





4浮动定位

让块级元素横向显示

float:

(1) 默认值  none  默认缺省值    不浮动

(2) left     左浮动   元素浮动后,向左对齐

(3) right   右浮动   元素浮动后,向右对齐

浮动的特点

(1)元素一旦浮动,脱离文档流,不占据页面空间,后续元素会上前补位

(2)元素浮动之后,会停靠在父元素的最左边/最右边(如果只有一个浮动是当前行),或者停靠在之前浮动元素的后面

一次浮动文档流补位这个浮动结束之后,剩下浮动再继续进行

(3)父元素横向显示不下所有已浮动的元素,最后显示不下的部分,会自动换行

(4)浮动为了解决,多个块级元素横向显示



5 浮动引发的特殊情况

(1)浮动元素的占位问题   (见过,知道是问题就可以了)

当父元素显示不下所有浮动元素时,最后显示不下的会换行

但是,已浮动的元素会根据自己浮动的方向占据位置,

导致显示不下的不能在已浮动的元素站位空间显示

换行的浮动元素,不能占据已被占的空间





