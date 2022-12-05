// pages/movie/movie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isOpen: false,    // 表示是否打开详情描述
    movieInfo: null,  // 表示电影详细信息
    comments: [],     // 表示电影评论数组
  },

  /** 处理预览剧照图片列表 */
  handlePreviewImage(e){
    let i = e.target.dataset.i // 获取data-i参数值
    if(i==undefined){
      return;  // 没有点到图片，方法直接返回
    }

    let thumb = this.data.movieInfo.thumb
    // 将thumb中每个路径的@后的内容删掉
    let urls = []
    thumb.forEach(url => {
      urls.push(
        url.substring(0, url.lastIndexOf('@'))
      )
    })
    wx.previewImage({
      urls,
      current: urls[i]
    })
  },

  /** 处理点击电影简介，切换收起与展开效果 */
  handleTapIntro(){
    this.setData({
      isOpen: !this.data.isOpen
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    // https://api.tedu.cn/detail.php?id=xxx
    wx.request({
      url: 'https://api.tedu.cn/detail.php',
      method: 'GET',
      data: {id: options.id},
      success:(res)=>{
        console.log('电影详情', res)
        // 将res.data 电影详情数据，存入data.movieInfo
        this.setData({
          movieInfo: res.data
        })
      }
    })
    // 加载评论信息
    this.loadComments(options.id)
  },

  /** 加载相应电影的评论数据  查询云数据库 */
  loadComments(id){
    console.log('查询相应id的电影评论数据', id)
    let db = wx.cloud.database()
    db.collection('comments').where({
      movieid: id
    })
    .skip(5)   // 跳过前5条
    .limit(5)  // 向后查5条
    .get().then(res=>{
      console.log('查询结果', res)
      // 将评论列表存入data
      this.setData({
        comments: res.data
      })
    })
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