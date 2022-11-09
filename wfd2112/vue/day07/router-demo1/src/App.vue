<template>
  <div class="app-container">
    <h1>App 根组件</h1>

    <a href="#/home">首页</a>
    <a href="#/movie">电影</a>
    <a href="#/about">关于</a>
    <hr />
    <!-- 动态组件:切换不同组件来显示 -->
    <component :is="comName"></component>
  </div>
</template>

<script>
// 导入组件
import Home from '@/components/Home.vue'
import Movie from '@/components/Movie.vue'
import About from '@/components/About.vue'

export default {
  name: 'App',
  data(){
    return{
      comName:"Home"
    }
  },
  //只要当前App组件一被创建,就立好监听window对象的
  //onhashchange事件 hash地址变化触发事件
  // #/home -> #/about
  created(){
    window.onhashchange=()=>{
      // console.log(123);
      switch(location.hash){
        case '#/home':this.comName='Home';break;
        case '#/about':this.comName='About';break;
        case '#/movie':this.comName='Movie';break;
      }
    }
  },
  // 注册组件
  components: {
    Home,
    Movie,
    About
  }
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
