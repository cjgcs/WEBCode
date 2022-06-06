CSS-DAY03

1 边框

border: width style color;

width 边框的宽度

style  边框的样式

​		取值    1 solid   实线

​				    2 dotted  虚线 (小圆点)

​				    3 dashed  虚线(小短线)

​					4 double   双实线

color  边框的颜色

​		通常用    6位16进制码或者简写为3位16进制码   transparent(透明)

一次性设置4个方向的边框

border:0px;   清除4个方向的边框  



单边的定义

只设置一条边的3个属性

border-top/right/bottom/left:width style color;

top/right/bottom/left     上右下左



边框的单属性

验证边框哪些有默认值

width有默认值   颜色也有默认

最简化写法    border:样式;

以下三种方式可以分别设置边框的 宽度,样式和颜色

border-width   单独设置宽

border-style	单独设置样式

border-color   单独设置颜色



单边单属性

对边框某一条边进行  宽度 样式  颜色的设置

border-top/right/bottom/left-width/style/color:   12个



倒角/圆角

border-radius  同时设置4个角

取值 

​	以px为单位的数字

​	以%  

以px为单位的圆角,会保留较长的直线边框

以%计算的圆角,会将所有边线进行弯曲

单角设置

border-top/bottom-left/right-radius



边框阴影(阴影的调整不会影响边框)

box-shadow:h-shadow  v-shadow blur spread color inset;

h-shadow  阴影的水平偏移距离

v-shadow   阴影的垂直偏移距离

blur            阴影的模糊距离

spread       阴影大小

color          阴影颜色

inset          把外部阴影变成内部阴影

最简写法

box-shadow:h-shadow v-shadow



轮廓

绘制在边框外边的一圈线,不占用页面的空间

outline:width style color;

outline:0;

outline-width:20px;

outline-style:dotted;

outline-color:#F00;

轮廓没有单边的定义





 2 框模型(盒子模式)    ----   必须掌握

所有元素都有框    ---    所有元素在页面上都占据空间

元素在页面上实际占地空间的计算公式

![image-20220217155129687](C:\Users\web\AppData\Roaming\Typora\typora-user-images\image-20220217155129687.png)

左外边距 + 左边框 + 左内边距 + 内容区域宽度 + 右内边距 + 右边框 + 右外边距

上外边距 + 上边框 + 上内边距 + 内容区域高度 + 下内边距 + 下边框 + 下外边距

margin      外边距  边框外的距离(元素与元素之间的距离)

padding    内边距  边框到内容的距离



外边距   margin

优先满足上外边距和左外边距的值保持正确,确定了位置,

下外边距和右外边距通常无法固定



语法

margin:v1;   同时设置4个方向的外边距

margin-top/right/bottom/left 单独设置某一个方向的外边距

取值       1 以px为单位的数字

​				左外边距   ++  向右移动 →          --   向左移动   ←

​				上外边距   ++  向下移动 ↓           --    向上移动   ↑

​			2  %  是父元素宽度的百分比  ,跟父元素的高度没关系 

​			3 auto  设置auto  对上下边距无效

​			效果,让块级元素在父元素中水平居中

​			对行内元素和行内块无效

​			只对设置了宽度的块级元素有效



简写方式

margin:v1;

设置4个方向的外边距

margin:v1 v2;

v1  上下外边距        v2 左右外边距

margin: v1 v2 v3;

v1  上外边距      v2 左右外边距    v3  下外边距

margin:v1 v2 v3 v4;

v1 上外边距    v2  右外边距   v3   下外边距    v4   左外边距



外边距合并

两个垂直的外边距相遇时,会发生外边距合并

最后的值,以大的为准

解决方案,

1.两个垂直相遇的外边距,只设置其中一个

2.页面设计的时候规避如下问题



自行预习 

可以设置外边距的元素

1 块级元素

2 行内元素

3 行内块

了解 比较常见 自带外边距的元素  h1











