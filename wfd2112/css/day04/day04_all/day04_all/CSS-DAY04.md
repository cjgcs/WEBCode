# CSS-DAY04

可以设置外边距的元素

1 块级元素

可以设置宽高,单独成行

默认宽:父元素宽度100%

默认高:靠内容撑开,没有内容,高度为0

4个方向外边距都生效

2 行内元素

设置宽高无效

默认 宽/高,都是被内容撑开的,没有内容,就没有宽高

只有左右外边距生效,上下外边距无效,与其他行内元素和行内块共用一行

3 行内块

可以设置宽高,与其他行内元素和行内块共用一行

浏览器会自动给宽高,但是,不同的浏览器给的宽高不一样,

通常会选择将所有宽高和内外边距以及边框还有轮廓清空   CSS reset

4个方向外边距都生效,改变上下外边距,会连同同一行其它行内元素和行内块元素移动



自带外边距的元素

body,button,dd,dl,dt,form,h1,h2,h3,h4,h5,h6,hr,input,li,ol,p,pre,td,th,ul,textarea,fieldset,legend

外边距透明的



特殊情况

为子元素设置上外边距,会作用在父元素上

产生要求   :      1   父元素没有上边框

​						  2  子元素内容区域的上边沿和父元素内容区域的上边沿重合

1  在父元素加上边框 会增加元素所占区域,不太合理

2 为父元素加内边距  也会增加元素所占区域,不太合理

3 在第一个兄弟的位置加`<br>`  多了一行

4 给父级元素添加overflow:hidden/auto   但是如果要溢出显示,就不行

5 在第一个元素的位置处,添加一个空  table   浏览器就默认认为上下边沿分开了



内边距 padding

padding:数值

改变内边距,感觉改变元素的大小

但是实际,元素内容区域没有变,变化的是边框到内容区域的距离

内边距的颜色同元素背景色

使用场合   把元素撑大,让文字与边框有距离感,然后整个元素能更好的显示

padding   内边距   是内容到边框的距离

padding:v1

v1 设置4个内边距

单独设置某个内边距

padding-top

padding-left

padding-right

padding-bottom

取值      1  以px为单位的数字

​			 2  %   以父元素的宽度的百分度

​			 3   没有auto

padding:v1 v2

v1  上下内边距    v2  左右内边距

padding: v1 v2 v3

v1  上内边距     v2  左右内边距    v3下内边距

padding: v1  v2   v3  v4

v1  上内边距   v2  右内边距   v3  下内边距    v4   左内边距





改变盒子模型的计算方式

左外边距 + 左边框 + 左内边距 + 内容(设置width) + 右内边距 + 右边框 + 右外边距

改变当前元素的盒子模式的计算方式

box-sizing:content-box   默认的盒子模式的计算方式

​					border-box   左外边距   +    设置width   +  右外边距

​					在此模式之下    width变为   左边框 + 左内边距  +  内容区域  +   右内边距 + 右边框  



练习     四张图片  摆放



HTML元素的显示模式

1 无  display:none

元素隐藏不显示   

2 块级  display:block

布局时独占一行,可以通过width/height改变宽高

3 行内    display:inline

布局时可以与其他内容共处一行

无法使用 width/height设置宽高

4 行内块   display:inline-block

可以共处一行,可以改变width/height 可以设置竖直和水平方向上的margin/padding





背景

背景颜色

background-color:red;

背景图片

background-image:url(图片路径)

默认情况下

当图片所在内容区域小于图片,只显示部分图片

当图片所在内容区域大于图片,会进行图片平铺

平铺设置

background-repeat

默认值  

repeat   平铺

no-repeat  不平铺

repeat-x    x轴平铺

repeat-y    y轴平铺



背景图片的定位

background-position:

取值     1个值   同时设置x轴和y轴的位置

​						 如果只设置一个值,另外的值会自动补充center

​			2个值   分别设置x轴和y轴的位置

1 以px为单位的取值

2 % 

3 关键字 x:left/center/right      y:top/center/bottom





背景图片的尺寸

background-size:

取值     1个值   同时设置宽高

​			2个值    分别设置宽高

1 以px为单位的数字

2 % 

3 cover 让背景图片充满这个容器,哪怕图片显示不全也没关系,不在乎

4 contain 让图片完全在容器中显示(等比例缩放)哪怕容器有空白,也没关系





背景图片固定

background-attachment

取值    默认值  scroll  背景图片随着窗口滚动,离开可视区域

​		                 fixed   固定  背景图不会随着窗口滚动条滚动,

​												不离开可视区域,但是只会在本容器中的范围内显示

背景图片固定同时背景图片定位

背景图的定位是相对于body左上角的



背景的图片的简写方式

background: color image repeat attachment position

简写方式没有size

最简的方式

background: color/image;

重写已存在的简写方式的样式,必须进行单独属性定义,不能使用简写方式去重写,否则会全覆盖



学子商城登录页

http://doc.canglaoshi.org/tstore_v1/web/login.html



















