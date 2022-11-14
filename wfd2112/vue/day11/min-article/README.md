1:创建项目 min-article
 vue create min-article
2:vant 组件库[vue 2 3 小程序]
 (1)下载安装 npm i vant@latest-v2 -S
 (2)配置 按需加载配置  全部加载 main.js
  import Vue from 'vue'; ##不用上面有
  import Vant from 'vant';#引入组件库
  import 'vant/lib/index.css'; #引入组件库样式
  Vue.use(Vant);                #安装组件库插件
  (3)使用
  <van-button type="primary">主要按钮</van-button>
  (4)修改组件默认样式  (临时) 
   --找元素选择器直接覆盖
   --样式穿透  /deep/ .con...
  (5)封装axios请求
  --创建文件src/utils/request.js  指定项目根目录
  --创建文件src/api/articleAPI.js 完成发送请求任务
    请求所有新闻
    请求某一页新闻
    删除新闻
    回复新闻...
  --Home.vue                      调用定义方法