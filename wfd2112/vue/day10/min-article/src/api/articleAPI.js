//src/api/articleAPI.js 文章相关功能接口,都封装到这个模块中
// 1:引入request对象
import request  from "@/utils/request.js";
// 2:向外导出一个API函数 getArticleList
//_page 第几页 1 2 3
//_limit 一页几行 10 5
export const getArticleList=function(_page,_limit){
    return request.get('/articles',{
      params:{_page,_limit}
    })
}
