<template>
  <div class="app-container">
    <h1 v-color="color">App 根组件</h1>
    <h3 v-color="'pink'">全局指令</h3>
    <button @click="color='pink'">改变color的颜色值</button>
    <hr />
    <Article>
      <template #title> <!--简写 v-slot: #-->
        <h3>这是一首诗</h3>
      </template>
      <template #content="scope">
        <div>
          <p>啊,大海,全是水</p>
          <p>啊,蜈蚣,全是腿</p>
          <p>{{scope.msg}}</p>
          <p>{{scope.user.name}}</p>
        </div>
      </template>
      <template #author>
        <div>作者:jack</div>
      </template>
    </Article>
    <div class="box">
      <!-- 渲染 Left 组件和 Right 组件 -->
      <Left>
        <!-- 最终下面p标签会添加Left.vue组件slot区域 -->
        <p>这是在Left组件内容区域,声明的P标签</p>
      </Left>
      <!-- 调用Left组件没有传递标签给组件,则后备内容生效 -->
      <Left></Left>
    </div>
  </div>
</template>

<script>
import Left from "@/components/Left.vue"
import Article from "@/components/Article.vue"
export default {
  data(){
    return{
      color:"blue"
    }
  },
  components:{
    Left,Article
  },
  //私有自定义指令节点
  directives:{
    //1:定义名称为color指令,指向一个配置对象
    //注意:指令名不要v-开头,vue自动添加
    color:{
      //当指令第一次被绑定到元素上的时候,会立即触发bind函数
      //形参中的el表示当前指令所绑定到的哪个DOM对象
      bind(el,binding){
        //获取DOM元素 el 将其文字修改红色
        el.style.color=binding.value
      },
      //在dom更新的时候,会触发update函数
      update(el,binding){
        el.style.color=binding.value
      }
    }
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
