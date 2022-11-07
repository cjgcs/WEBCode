<template>
  <div class="goods-container">
    <!-- 左侧图片 -->
    <div class="thumb">
      <div class="custom-control custom-checkbox">
        <!-- 复选框 -->
        <input type="checkbox"
         class="custom-control-input"
          id="cb1" :checked="state" @change="stateChange"/>
        <label class="custom-control-label" for="cb1">
          <!-- 商品的缩略图 -->
          <img :src="pic" alt="" />
        </label>
      </div>
    </div>
    <!-- 右侧信息区域 -->
    <div class="goods-info">
      <!-- 商品标题 -->
      <h6 class="goods-title">{{title}}</h6>
      <div class="goods-info-bottom">
        <!-- 商品价格 -->
        <span class="goods-price">￥{{price}}</span>
        <!-- 商品的数量 -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //子组件接收父组件传递数据
  props:{
    //商品的id
    //为啥在这里要封一个id属性
    //原因:将来，子组件中商品勾选状态变化后，需要通过子->父形式
    //通知父组件根据id修改对应商品勾选状态
    id:{
      required:true,//必须的
      type:Number
    },
    //要渲染商品标题
    title:{
      default:'',
      type:String
    },
    //商品图片   14:20
    pic:{
      default:'',
      type:String
    },
    //商品价格
    price:{
     default:0,
     type:Number
    },
    //商品前复选框状态
    state:{
      default:true,
      type:Boolean
    },
    //商品购买数量
    count:{
      default:1,
      type:Number
    }
  },
  methods:{
    //子组件Goods.vue  ->发送->  父元素 App.vue
    //去修改id:1 state:false
    //1:孩子 
    //触发事件 this.$emit('state-change',{id,state})
    //2:父亲 App.vue
    //2.1 <Goods @state-change="getNewState"></Goods>
    //2.2 getNewState(e){e.id  e.value}
    stateChange(e){
       //1:获取当前勾选状态
       const newState = e.target.checked
       //2:获取当前商品id
       var gid = this.id
       //3:触发事件 state-change给父元素
       this.$emit('state-change',{id:gid,value:newState})
    }
  }
}
</script>

<style lang="less" scoped>
.goods-container {
  + .goods-container {
    border-top: 1px solid #efefef;
  }
  padding: 10px;
  display: flex;
  .thumb {
    display: flex;
    align-items: center;
    img {
      width: 100px;
      height: 100px;
      margin: 0 10px;
    }
  }

  .goods-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    .goods-title {
      font-weight: bold;
      font-size: 12px;
    }
    .goods-info-bottom {
      display: flex;
      justify-content: space-between;
      .goods-price {
        font-weight: bold;
        color: red;
        font-size: 13px;
      }
    }
  }
}
</style>
