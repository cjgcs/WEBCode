<template>
  <div class="about-container">
    <h3>About 组件</h3>
    <!-- 1:子路由链接 -->
    <router-link to="/about/tab1">tab1</router-link>
    <router-link to="/about/tab2">tab2</router-link>
    <hr>
    <!-- 2:子路由占位符,用于显示子组件 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="less" scoped>
.about-container {
  min-height: 200px;
  background-color: skyblue;
  padding: 15px;
  > a {
    margin-right: 10px;
  }
}
</style>
