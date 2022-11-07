<template>
   <div class="article-container">
    <!-- 创建组件:演示具名插件-->
    <h3>Article组件</h3>
    <!--下面三个div文章标题  文章内容  文章作者-->
    <div class="header-box">
        <slot name="title"></slot> <!--具名插槽-->
    </div>
    <div class="content-box">
         <slot name="content"></slot>
    </div>
    <div class="footer-box">
        <slot name="author"></slot>
    </div>
   </div>
</template>
<script>
export default {
}
</script>
<style lang="less" scoped>
   .article-container{
    >div{
        min-height:150px;
    }
    .header-box{background-color: pink;}
    .content-box{background-color: lightblue;}
    .footer-box{background-color: aquamarine;}
   }
</style>