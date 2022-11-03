<template>
  <div class="app-container">
    <h1>App 根组件</h1>
    <hr />
    <!--完成任务:当显示输入框时立即获取焦点-->
    <input type="text" v-if="inputVisible" ref="myInput">
    <button v-else  @click="showInput">展示输入框</button>
    <div class="box">
      <!-- 渲染 Left 组件和 Right 组件 -->
      <Left></Left>
      <Right ref="myRight"></Right>
      <button @click="set">调用子组件方法</button>
    </div>
  </div>
</template>
<script>
//1:引入right left组件   :注册组件    :调用
import Left from  '@/components/Left.vue'
import Right from '@/components/Right.vue'
export default {
   data(){
     return {
      inputVisible:false
     }
   },
   components:{
    Left,Right
   },
   methods:{
     //点击按钮时显示输入框
     showInput(){
      //1:将控制输入框变量赋值 true 显示
      this.inputVisible = true; //beforeUpdate ... updated 100ms
      //2:当输入框获取焦点
      //console.log(this.$refs.myInput); 1ms
      //this.$refs.myInput.focus()
      //多等一会一定可以获取
      //方法一:偷巧:setTimeout   11:06
      //setTimeout(()=>{
      //  this.$refs.myInput.focus()
      //},110);
      //方法二：vue提供方法,等一会到updated结束再调用函数
      this.$nextTick(()=>{
        this.$refs.myInput.focus()
      })

     },
     set(){
        //通过 ref 调用组件方法
        this.$refs.myRight.resultCount();
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
