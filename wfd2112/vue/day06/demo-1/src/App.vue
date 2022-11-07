<template>
  <div class="app-container">
    <h1>App 根组件</h1>
    <hr />
    <button @click="comName">展示left</button>
    <button @click="comName">展示right</button>
    <div class="box">
      <!-- 渲染 Left 组件和 Right 组件 -->
      <!-- <Left></Left>
      <Right></Right> -->
      <!-- 渲染left组件和right组件 -->
      <!-- 1:components标签是vue内置的,作用:组件占位符 -->
      <!-- 2:is属性的值,表示要渲染的组件名称 -->
      <!-- 3:is属性的值,应该是组件在compnents节点下注册名称 -->

      <!-- keeplive 会把内部组件进行缓存,而不销毁组件 -->
      <!-- include 指定哪些组件需要被缓存 -->
      <!-- exclude 指定哪些组件'不'需要被缓存 -->
      <!-- 注意不要同时使用include exclude -->
      <keep-alive exclude="Left">
        <component :is="comName"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Left from "@/components/Left.vue"
import Right from "@/components/Right.vue"
export default {
  data(){
    return{
      comName:"Right"
    }
  },
  components:{
    Left,Right
  }
}
</script>

<style lang="less">
.app-container {
  padding: 1px 20px 20px;
  background-color: #efefef;
}
.box {
  display: flex;
}
</style>
