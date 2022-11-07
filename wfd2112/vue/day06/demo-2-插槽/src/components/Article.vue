<template>
  <div class="article-container">
    <!-- 创建组件:演示具名插槽 -->
    <h3>Article组件</h3>
    <!-- 下面三个div是文章标题 文章内容 文章作者 -->
    <div class="header-box">
      <slot name="title"></slot>
    </div>
    <div class="content-box">
      <!-- 在封装组件时,为预留的<slot> -->
      <!-- 提供对应的值,这种用法,叫做"作用域插槽" -->
      <slot name="content" msg="hello vue.js" :user="userinfo"></slot>
    </div>
    <div class="footer-box">
      <slot name="author"></slot>
    </div>

  </div>

</template>

<script>
export default{
  name:"Article", //组件名字
  data(){
    return{
      //用户信息对象
      userinfo:{
        name:"zs",
        age:20
      }
    }
  }

}
</script>
<style lang="less" scoped>
  .article-container{
    >div{
      min-height: 90px;
    }
    .header-box{background-color: pink;}
    .content-box{background-color: lightblue;}
    .footer-box{background-color: aquamarine;}
  }
</style>