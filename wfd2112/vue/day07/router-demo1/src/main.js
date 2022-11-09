import Vue from 'vue'
import App from './App.vue'
import App2 from './App2.vue'

// 导入 bootstrap 样式
import 'bootstrap/dist/css/bootstrap.min.css'
// 全局样式
import '@/assets/global.css'

Vue.config.productionTip = false
//引入router实例对象
//在进行模块话导入的时候,如果给定文件夹,则默认
//导入这个文件夹下的名字较index.js 文件
import router from '@/router'

new Vue({
  render: h => h(App2),
  router
}).$mount('#app')
