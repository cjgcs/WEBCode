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
  plugins:[htmlPlugin],
  devServer:{
    open:true,
    host:'127.0.0.1',
    port:80
  },
  module:{
    rules:[
      {test:/\.css$/,use:['style-loader','css-loader']}
    ]
  }
}

//module.exports = {
//  mode: 'development'
//}