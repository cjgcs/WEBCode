<template>
  <div class="left-container">
    <h3>Left 组件{{count}}</h3>
    <button @click="count+=1">+1</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      count:0   //默认情况 组件状态丢失(数据没了)
    }
  },
  //当组件第一次被创建时,既会执行 created生命周期
  //也会执行activated生命周期
  //当组件被激活时候,只会触发 activated生命周期
  //不再会被触发createds
  activated(){console.log('组件被激活了 activated');},
  deactivated(){console.log('组件被缓存了 deactivated');}
}
</script>

<style lang="less">
.left-container {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}
</style>
