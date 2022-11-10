//src/router/index.js  文件名不要改
//1:引入Vue 和 VueRouter 组件
import Vue from 'vue'
import VueRouter  from 'vue-router'
import Login from "@/components/MyLogin.vue"
import Home from "@/components/MyHome.vue"

//配置home二级路由
import Users from '../components/menus/MyUsers.vue'
import Rights from '../components/menus/MyRights.vue'
import Goods from '../components/menus/MyGoods.vue'
import Orders from '../components/menus/MyOrders.vue'
import Settings from '../components/menus/MySettings.vue'
import Detail from '../components/menus/MyDetail.vue'

import pathArr from "./pathArr.js"
//2:将VueRouter插件安装Vue
Vue.use(VueRouter)
//3:创建路由对象
const router = new VueRouter({
  routes:[
    {path:'/login',component:Login},
    {path:'/home',component:Home,
     children:[
      {path:'users',component:Users},
      {path:'rights',component:Rights},
      {path:'goods',component:Goods},
      {path:'orders',component:Orders},
      {path:'settings',component:Settings},
      {path:'userinfo/:id',component:Detail},
     ]
    },
  ]
})
//3.1:创建全局前置路由守卫
//如果用户访问 /home 或者 /home/users 或者 /home/rights
//必须有token
//（2）如果没有去登录组件
//（3）其他放行


//演示示例流程
//1:要拿用户将要访问hash地址
//2:判断hash地址是否等于 /main  #/main 后台有手环可以访问
//2.1:如果等于 /main 并且有token 放行 next()
//2.2:如果等于 /main 并且没有token 强制去 login登陆组件
//2.3:如果不等于 /main 直接访问
router.beforeEach((to,from,next)=>{
  // 判断用户导航路由是否在列表中
  if(pathArr.indexOf(to.path) !== -1){
      //要访问后台,需要判断是否有token令牌
      const token = localStorage.getItem("token")
      if(token){
          next()
      }else{  //没有登陆,强制转到登陆页面
          next('/login')
      }
  }else{
      next()
  }
})





//4:导出路由对象
export default router

