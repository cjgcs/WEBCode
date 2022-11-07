<template>
  <div class="app-container">
    <h1>App 根组件</h1>
    <hr />
    <!--调用指定组件 Article   11:01-->
    <Article>
         <template v-slot:title>
              <h3>这是一首诗</h3>
         </template>
         <template v-slot:content>
             <div>
              <p>啊，大海，全是水</p>
              <p>啊，蜈蚣，全是腿</p>
             </div>
         </template>
         <template v-slot:author>
                 <div>作者：jack</div>
         </template>
    </Article>
    <div class="box">
      <!-- 渲染 Left 组件和 Right 组件 -->
      <Left>
        <!--最终下面p标签会添加Left.vue组件slot区域-->
        <p style="color:red;"> 
          这是在Left组件的内容区域，声明的P标签
        </p>
      </Left>
      <!--调用Left组件没有传递标签给组件，则后备内容生效-->
      <Left></Left>
    </div>
  </div>
</template>

<script>
import Left from "@/components/Left.vue"
import Article from "@/components/Article.vue"
export default {
  components:{
    Left,Article
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
