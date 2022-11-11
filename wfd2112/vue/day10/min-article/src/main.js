import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
//引入vant全部组件库
import Vant from 'vant';
//引入vant单独样式文件
import 'vant/lib/index.css';
//安装vant
Vue.use(Vant);

//import axios from 'axios'
//axios.defaults.baseURL = 'https://www.escook.cn'
//Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
