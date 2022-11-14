<template>
  <div class="home-container">
    <van-nav-bar title="达达头条" fixed />

      <van-pull-refresh 
      v-model="isLoading" @refresh="onRefresh">


      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <!--新闻列表-->
        <Article
          v-for="item in list"
          :key="item.id"
          :title="item.title"
          :author="item.aut_name"
          :time="item.pubdate"
          :conver="item.cover"
        >
        </Article>
      </van-list>

      </van-pull-refresh>
  </div>
</template>
<script>
import datalist from "./list";
import Article from "@/components/Article/Article.vue";
import { getArticleList } from "@/api/articleAPI.js";
export default {
  data() {
    return {
      list: [],
      page: 1, //页码
      limit: 10, //一页有多少行数据

      //上拉加载更多
      //是否正在加载下一页数据，如果loading 为true 表示数据正在加载中
      //则不会触发 load 事件
      //每当下一页数据请求回来之后，千万记得把loading从
      //true改为false
      loading:true,
      //所有数据是否加载完毕了，如果不没有更多 的数据一定把
      //findised改true
      finished:false,

      //下拉刷新
      isLoading:false
    };
  },
  created() {
    this.initArticleList();
  },
  components: {
    Article,
  },
  methods: {
    //发送请求获取分页文章函数
    async initArticleList() {
      const { data: res } = await getArticleList(this.page, this.limit);
      //保留旧数据 拼接新数据 最简单打散字符串
      this.list = [...this.list, ...res];
      //将加载状态改成己完成!!-可以进行下一页加载
      //当前数据己经加载完成 false
      this.loading = false
      //如果没有返回正确数据
      if(res.length === 0){
        //没有下一页数据
        this.finished = true
      }
    },
    //下拉刷新加载更多--加载下一页
    onRefresh() {
      this.page++;
      this.initArticleList();
    },
    //上拉加载更多
    onLoad(){
      this.page++;
      this.initArticleList();
    }
  },
};
</script>

<style scoped>
/*临时覆盖组件专用样式...*/
.van-nav-bar {
  background-color: #007bff;
}
/deep/.van-nav-bar__title {
  color: #fff;
}

.home-container{
  padding:46px 0 50px 0;
}
</style>