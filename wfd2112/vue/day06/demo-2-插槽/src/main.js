import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//main.js 创建全局自定义指令
//binding update 合在一起
Vue.directive("color2",function(el,binding){
  el.style.color = binding.value
})

new Vue({
  render: h => h(App),
}).$mount('#app')
