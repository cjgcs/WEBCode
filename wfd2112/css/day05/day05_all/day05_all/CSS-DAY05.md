CSS-DAY05

渐变      (熟悉线性渐变(0%~100%).了解径向渐变和重复渐变)

1 什么渐变

多种颜色,平缓变化的一种显示效果

影响渐变的因素

2 色标:一种颜色 和这种颜色出现的位置

一个渐变,至少有两种颜色

3.渐变的分类

(1) 线性渐变

(2) 径向渐变

(3) 重复渐变

4 线性渐变

background-image:linear-gradient(方向,色标 1,色标 2 .......)

取值     1 用终点   to bottom

​								to  right

​								to left

​								to top

​			2 角度      0deg     to top

​							90deg    to right

​							180deg  to bottom

​							270deg to left

色标   颜色   +  位置 

​	位置     (1)   1%   ~   100%

​				(2)	px

​				(3)   不写默认平均分配

5 径向渐变

background-image:radial-gradient(半径 at 圆心,色标 1 色标 2....)

半径     %    就是正常的值,半径有效

​			px:以px为单位的数字,半径无效(结果并非想象的结果称之为无效)

%  以半径为总值得百分比    px 是定值

圆心  1 关键字  x:left/center/right     y:top/center/bottom

​		 2   x y px为单位的数字

​		3   x%  y%



重复渐变

background-image:repeating-linear-gradient(方向,色标 1 ......)

background-image:repeating-radial-gradient(半径 at 圆心,色标 1 ......)



浏览器的兼容问题

低版本浏览器不支持渐变,我们使用css hack来让低版本浏览器可以实现渐变效果

需要给代码添加前缀   内核名字

-moz-              firefox

-webkit-          chrome/safari

-o-                   opera

-ms-                IE

background-image:-webkit-linear-gradient(top,色标)

background-image:-moz-linear-gradient(top,色标)

background-image:-o-linear-gradient(top,色标)

background-image:-ms-linear-gradient(top,色标)

方向不能写to   只能直接写起点





文本格式化      (熟练掌握)

1 字体的属性

(1)  font-size  

指定字号大小

px/em/rem                                                                          

(2)字体系列

font-family:宋体,chiller,GiGi,华文彩云,微软雅黑,黑体,jokerman

需要客户端有相对的字体库

为了让客户端有一个比较好的体验

写多个字体用  逗号  分隔,从第一个开始找,找到pc中存在为止

果字体有空格  那么建议 使用  "mv boli"  双引号包裹         



(3)字体粗细

font-weight:

1 normal   普通,不加粗   (常用)

2 bold        加粗               (相对常用)

3 bolder    比粗更粗

4 lighter    细

5 不带单位的数字,必须是100的整倍数,最大1000

300 lighter     400 normal    600 bold    700 bolder



(4)字体样式

font-style:normal/italic;



(5) 小型大写字母   

font-variant:small-caps;



(6) 字体属性的简写方式

font:style  variant  weight size family ; 

全写的话按照顺序去写

最简方式

font:size family;











