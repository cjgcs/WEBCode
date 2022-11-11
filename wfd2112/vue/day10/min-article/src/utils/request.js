//src/utils/request.js  axios 请求工具函数
// 1:引入axios组件
import axios from "axios"
// 2:调用axios.create函数创建axios实例对象
  // 并且指定baseURL
const request =axios.create({
  baseURL:'https://www.escook.cn'
})
// 3:导出对象
export default request