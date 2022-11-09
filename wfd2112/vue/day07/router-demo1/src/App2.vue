<template>
  <div class="app-container">
    <h1>App2 组件</h1>

    <hr />
    <!-- 路由链接 以前写法 -->
    <!-- <a href="#/home">去首页</a> -->
    <router-link to="/home">去首页</router-link>
    <router-link to="/about">去关于</router-link>
    <!-- /2保存到变量params.id中 -->
    <router-link to="/movie/2">雷神</router-link>
    <router-link to="/movie/3">复联</router-link>
    <router-link to="/movie/1">白雪公主</router-link>
    <hr>
    <!-- 动态组件显示不同组件内容, 旧版本 -->
    <!-- 路由对象容器:功能和动态组件差不多 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less" scoped>
.app-container {
  background-color: #efefef;
  overflow: hidden;
  margin: 10px;
  padding: 15px;
  > a {
    margin-right: 10px;
  }
}
</style>
