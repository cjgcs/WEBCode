//src/router/index.js   文件名不要改(默认导入路径)
// 1:引入Vue 和VueRouter 组件
import Vue from 'vue'
import VueRouter from 'vue-router'
//1.2:导入需要的组件
import Home from "@/components/Home.vue"
import About from "@/components/About.vue"
import Movie from "@/components/Movie.vue"

import Tab1 from '@/component/tabs/Tab1.vue'
import Tab2 from '@/component/tabs/Tab1.vue'
// 2:将VueRouter安装Vue实例中
Vue.use(VueRouter)
// 3:创建路由实例对象
const router = new VueRouter({
  //router 是一个数组,作用:定义 hash地址与组件对应关系
  routes:[
    //启动项目时 / 立即查看 /home组件 解决重定向
    {path:'/',redirect:'/home'},
    {path:'/home',component:Home},
    {path:'/about',
      component:About,
      children:[
      //子路由规则
      //默认子路由:如果children数据中,某个路由规则的
      //path为空字符串,则这条路由规则,叫'默认子路由'
      {path:'tab1',component:Tab1},
      {path:'tab2',component:Tab2}
      ]
    },
    {   //创建变量id接收组件传递参数
        path:'/movie/:id',
        component:Movie
    }
  ]
})
// 4:向外导出实例对象
export default router
