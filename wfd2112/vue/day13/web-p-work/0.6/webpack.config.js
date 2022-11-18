const path = require("path")
const HtmlPlugin = require("html-webpack-plugin")

const htmlPlugin = new HtmlPlugin({
  template:'./src/index.html',
  filename:'./index.html'
})
module.exports = {
  mode : 'development', //development production
  entry:path.join(__dirname,'./src/index.js'),
  output:{
    path:path.join(__dirname,'./dist'),
    filename:"bundle.js"
  },
  plugins:[htmlPlugin]
}

//module.exports = {
//  mode: 'development'
//}