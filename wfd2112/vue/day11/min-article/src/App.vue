<template>
  <div class="app-container">
    <!--1:路由占位符-->
    <router-view></router-view>
    <!--2：底部tabbar-->
    <van-tabbar route>
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>