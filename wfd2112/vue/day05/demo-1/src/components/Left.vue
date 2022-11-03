<template>
  <div class="left-container">
    <h3 ref="myh3">Left 组件</h3>
    <button @click="send">发送</button>
    <hr>
    <button @click="find">查看</button>
  </div>
</template>
<script>
//导入 eventBus模块
import bus from './eventBus.js'
export default {
  data(){
    return {
      msg:"长安镇"
    }
  },
  methods:{
    send(){
        //通过eventBus发送数据
        bus.$emit('share',this.msg)
        console.log(123)
    },
    find(){
      console.log(this.$refs.myh3);
      this.$refs.myh3.style.color = "red"
    }
  }
}
</script>

<style lang="less">
.left-container {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}
</style>
