# min-article

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

(5)封装 axios 请求
--创建文件 src/utils/request.js 指定项目根目录
--创建文件 src/api/articleAPI.js 完成发送请求任务
  请求所有新闻
  请求某一页新闻
  删除新闻
  恢复新闻
--Home.vue articleAPI 调用定义方法
