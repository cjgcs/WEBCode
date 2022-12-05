// pages/citylist/citylist.js
const map = require('../../libs/map.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    map : map,   // 表示城市列表
    letter: 'A', // 表示当前选中的首字母
    cityname: '未选择', // 表示定位城市
    locSuccess: false,  // 表示是否定位成功
  }, 

  /** 点击定位城市后的业务 */
  handleTapLocCity(){
    // 判断是否定位成功，如果定位成功则：
    // 将当前城市名称，存入globalData，返回即可
    if(this.data.locSuccess){
      getApp().globalData.cityname = this.data.cityname
      wx.navigateBack()
    }else {   // 如果定位失败，则重新定位
      // 应该重新弹窗，提供用户重新赋予定位权限的流程
      this.showAuthDialog()
    }
  },

  /** 重新弹出定位授权对话窗口 */
  showAuthDialog(){
    wx.showModal({
      title: "提示",
      content: "没有赋予小程序定位权限，是否跳转授权？",
      success: (res)=>{
        //res: {confirm: true, cancel: false ....}
        if(res.confirm){  // 用户选择了true
          wx.openSetting({ // 打开小程序权限设置页面
            success: (settingRes)=>{
              console.log('设置', settingRes)
              if(settingRes.authSetting["scope.userLocation"]){
                // 用户又重新赋予了定位权限
                this.loadCurrentCity()
              }
            }
          }) 
        }
      }
    })
  },

  /** 处理点击城市之后的业务 */
  handleTapCity(e){
    let name = e.target.dataset.c // 获取data-c属性值
    console.log('选中的城市：'+name)
    // 将选中的城市名称，存入App.globalData中
    let app = getApp() // 获取app.js中的App对象
    app.globalData.cityname = name
    wx.navigateBack() // 返回首页
  },

  /** 点击右侧导航字母时，触发 */
  handleTapLetter(e){
    let l = e.target.dataset.l // 获取data-l属性值
    console.log('点击了：'+l)
    this.setData({letter: l})
  },

  /** 加载当前城市信息 */
  loadCurrentCity(){
    let QQMapWX = require('../../libs/qqmap-wx-jssdk')
    let qqmapsdk = new QQMapWX({
      key: 'A7CBZ-FZ73U-PUPV7-BINEG-ICD57-KAB6J'
    })
    qqmapsdk.reverseGeocoder({
      success: (res)=>{
        let cityname = res.result.address_component.city
        console.log('逆地址解析：', cityname)
        // 更新data，更新UI
        this.setData({cityname, locSuccess:true})
      },
      fail: (err)=>{ 
        console.warn(err) 
        if(err.status==1000){ // 没有给权限
          this.setData({
            cityname: '定位失败，点击重试'
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(map)
    this.loadCurrentCity() // 重新加载当前定位城市
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})