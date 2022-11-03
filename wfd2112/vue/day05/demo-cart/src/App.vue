<template>
  <!--App.vue-->
  <div class="app-container">
    <!-- Header头部区域-->
    <Header title="东方购物车"></Header>
    <!--Goods商品信息-->
    <Goods v-for="item in list"  
    :key="item.id"
    :id="item.id"
    :title="item.goods_name"
    :pic="item.goods_img"
    :price="item.goods_price"
    :state="item.goods_state" 
    :count="item.goods_count"
    @state-change="getNewState">
    </Goods>
    <Footer></Footer>
  </div>
</template>

<script>
import axios from "axios"
//1:导入需要组件
import Header from "@/components/Header/Header.vue"
import Goods from "@/components/Goods/Goods.vue"
import Footer from "@/components/Footer/Footer.vue"
export default {
  components:{
    Header,Goods,Footer
  },
  created(){
    //当组件创建成功后，发送ajax请求获取服务器端数据
    this.initCartList();
  },
  data(){
    return {
       list:[]   //一会保存服务器返回购物车列表
    }
  },
  computed:{
    amt(){
      //己勾选商品总价格
      this.list.filter(item=>item.goods_state)
      .reduce((total,item)=>(total+=item.goods_price*
      item.goods_count),0)
    }
  },
  methods:{
    async initCartList(){
      //调用axios 的get方法，请求列表数据
      var url = "https://www.escook.cn/api/cart"
      const {data:res} = await axios.get(url);
      //只要请求回来的数据，在页面渲染期要用，则必须存储data中
      //console.log(res);
      if(res.status === 200){
          this.list = res.list
      }
    },
    getNewState(e){
      //console.log(this.list);
      //console.log(e.id,e.value);
      //16:20 完成任务 把数组中 id==eid state=e.value
      this.list.some(item=>{
          if(item.id == e.id){
            item.goods_state = e.value
            //终止循环
            return true
          }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.app-container {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>
