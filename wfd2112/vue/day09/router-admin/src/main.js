import Vue from 'vue'
import App from './App.vue'
// 导入样式
import './assets/css/bootstrap.css'
import './index.css'
//引入router实例对象
//在进行模块化导入的时候，如果给定文件夹，则默认
//导入这个文件夹下的名字叫 index.js 文件
import router from '@/router'
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
