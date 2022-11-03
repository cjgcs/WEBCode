<template>
  <div class="right-container">
    <h3>Right 组件--{{count}}</h3>
    <button @click="count += 1">+1</button>
    <button @click="resultCount">重置</button>
  </div>
</template>
<script>
//1:导入eventBus.js 模块
import bus from './eventBus.js'
export default {
  data(){
    return {
      count:0
    }
  },
  methods:{
    resultCount(){this.count = 0}
  },
  created(){
    //2:为BUS绑定自定义事件 19
    bus.$on('share',val=>{
      console.log('Right.vue 接收数据'+val);
    })
  }
}
</script>

<style lang="less">
.right-container {
  padding: 0 20px 20px;
  background-color: lightskyblue;
  min-height: 250px;
  flex: 1;
}
</style>
