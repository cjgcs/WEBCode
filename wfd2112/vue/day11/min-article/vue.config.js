



//vue cli 脚手架底层用到了webpack,webpack底层用到了node.js
//因此在vue.config.js 配置文件中,可以导入node.js核心模块
const path = require('path')
const themePath = path.join(__dirname,'./src/theme.less')


const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath:'',    //项目可以保留在任意目录下
  transpileDependencies: true,
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            // 方法一:直接覆盖变量
            // 'nav-bar-title-font-size': '23px',
            // 'bnav-bar-title-text-color': 'red',
            // 'nav-bar-background-color':'#007bff'
            // 方法二:或者可以通过 less 文件覆盖（文件路径为绝对路径）
            hack: `true; @import "${themePath}";`,
          },
        },
      },
    },
  },
})
