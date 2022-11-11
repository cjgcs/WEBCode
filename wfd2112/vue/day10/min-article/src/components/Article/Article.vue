   <template>
     <div>
       <van-cell>
         <!-- 标题区域的插槽 -->
         <template #title>
           <div class="title-box">
             <!-- 标题 -->
             <span>{{title}}</span>
             <!-- 单张图片 -->
             <img :src="conver.images[0]" v-if="conver.type>0" alt="" class="thumb">
           </div>
           <!-- 三张图片 -->
           <div class="thumb-box">
             <img :src="item" v-for="(item,i) in conver.images" :key="i" alt="" class="thumb">
           </div>
         </template>
         <!-- label 区域的插槽 -->
         <template #label>
           <div class="label-box">
             <span>作者 {{author}} 0评论 &nbsp;&nbsp; 
              发布日期 {{time}}</span>
             <!-- 关闭按钮 -->
             <van-icon name="cross" />
           </div>
         </template>
       </van-cell>
     </div>
   </template>

<script>
export default {
    props:{
      title:{type:String,default:''},  // 文章的标题
      author:{type:String,default:''},  //作者名称
      time:{type:String,default:''},  //发表时间
      //文章封面信息对象 type图片数量
      conver:{type:Object,default:function(){
          return{type:0}
        }
      }, 
    }
}
</script>

<style lang="less">
 .label-box {
     display: flex;
     justify-content: space-between;
     align-items: center;
   }
   .thumb {
     // 矩形黄金比例：0.618
     width: 113px;
     height: 70px;
     background-color: #f8f8f8;
     object-fit: cover;
   }
   
   .title-box {
     display: flex;
     justify-content: space-between;
     align-items: flex-start;
   }
   
   .thumb-box {
     display: flex;
     justify-content: space-between;
   }
</style>