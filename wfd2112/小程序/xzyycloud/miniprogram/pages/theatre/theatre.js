// pages/theatre/theatre.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cityname: '未选择',
    theatreList: []    //保存影院列表
  },

  /** 点击列表项后触发 */
  handleTapItem(e){
    // e.target获取的是点击的最底层的事件源对象
    // let i = e.target.dataset.i
    // e.currentTarget获取的就是绑定事件的事件源对象
    let i = e.currentTarget.dataset.i
    console.log('选中项的下标：' + i)
    // 调用小程序提供的方法，以地图方式显示位置
    let t = this.data.theatreList[i]  // 当前影院对象
    wx.openLocation({
      latitude: t.location.lat, 
      longitude: t.location.lng,
      scale: 15,
      name: t.title,
      address: t.address
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


  },

  onShow(){
    // 获取globalData.cityname   更新左上角
    let cityname = getApp().globalData.cityname
    this.setData({cityname})
    // 加载当前城市的影院列表
    let QQMapWX = require('../../libs/qqmap-wx-jssdk')
    let qqmapsdk = new QQMapWX({
      key: 'A7CBZ-FZ73U-PUPV7-BINEG-ICD57-KAB6J'
    })
    qqmapsdk.search({
      keyword: '电影院',   // 关键字
      region: cityname,   // 城市名称
      page_size:20,       // 每页20条
      success: (res)=>{
        console.log('加载影院列表', res)
        // 对res.data进行处理  添加新属性 _dis
        res.data.forEach(item=>{
          item._dis = (item._distance/1000).toFixed(2)
        })
        // 将res.data存入this.data.theatreList
        this.setData({
          theatreList: res.data
        })
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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