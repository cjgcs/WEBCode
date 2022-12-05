// app.js  该js仅执行一次，全局单例
App({

  /** 小程序启动时，自动调用该生命周期方法 */
  onLaunch(){
    // 初始化云环境  指定env 这样代码中就不需要再
    // 指定env参数了
    wx.cloud.init({
      env: "cloud2012-9gl0qd6g8dc72b1c"
    })
  },

  // globalData是App对象的属性，用于存储全局数据
  globalData:{
    cityname: '未选择'
  }

})






