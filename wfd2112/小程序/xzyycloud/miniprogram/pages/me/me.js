// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: { // 用于保存用户数据
      nickName:'点击登录'
    },   
    islogin: false,
  },

  /** 点击头像 */
  handleTapAvatar(){
    if(!this.data.islogin){
      return; // 没有登录，直接返回
    }
    // 选择图片
    wx.chooseMedia({ 
      count: 1,  
      mediaType: ["image"],
      success: (res)=>{
        console.log('选择图片', res)
        let path = res.tempFiles[0].tempFilePath
        let userInfo = this.data.userInfo
        userInfo.avatarUrl = path
        this.setData({ userInfo })
        // 将图片上传至云存储空间  更新数据库持久化保存
        this.upload(path)
      }
    })
  },

  /** 上传文件  path:待上传的图片路径 */
  upload(path){ 
    // 需要通过当前文件的路径，生成一个随机文件名，存储在云端
    // path: /xxx/xxxxx/xxx/abcd.jpg
    // cPath:   89as57dfs8ad7f6as9df6asdf870as.jpg
    let ext = path.substring(path.lastIndexOf('.'))
    let cPath = Math.random() + ext
    wx.cloud.uploadFile({
      filePath: path,
      cloudPath: cPath,
      success: (res)=>{
        console.log('上传图片', res)
        // 获取头像的路径
        let fileID = res.fileID
        // 通过用户id，修改用户头像
        this.updateAvatarUrl(fileID)
      }
    })
  },

  /** 通过用户id，更新用户的头像路径 */
  updateAvatarUrl(fileID){
    let db = wx.cloud.database()
    let id = this.data.userInfo._id
    db.collection('users').doc(id).update({
      data: { 
        avatarUrl: fileID
      },
      success: (res)=>{
        console.log('头像修改成功', res)
      }
    })
  },

  /** 点击登录后执行 */
  handleTapLogin(){
    if(this.data.islogin){
      return;  // 若已经登录，则直接返回
    }
    wx.getUserProfile({
      desc: '获取微信信息用于维护会员权益',
      lang: 'zh_CN',
      success: (res)=>{
        console.log('获取用户信息', res)
        // 将用户数据存入data，更新UI
        this.setData({
          islogin: true, 
          userInfo: res.userInfo
        })
        // 去自己家数据库进行查询，看一下当前用户的最新数据
        this.login()
      }
    })
  },

  /** 访问自己家数据库，执行登录业务 
   *  1. 若在users集合中找到用户信息，那么直接更新UI。
   *  2. 若在users集合中没有找到用户信息，执行注册业务。
   */
  login(){
    let db = wx.cloud.database()
    // users集合有权限设置，导致只能查到自己以前添加过的数据
    db.collection('users').get().then(res=>{
      console.log('查询当前用户', res)
      if(res.data.length==0){ // 没有查到用户
        this.regist()
      }else{ // 查到了用户  显示用户的最新数据
        let userInfo = res.data[0]
        this.setData({userInfo})
      }
    })
  },

  /** 注册业务 将userInfo存入users集合 */
  regist(){
    let db = wx.cloud.database()
    db.collection('users').add({
      data: this.data.userInfo,
      success: (res)=>{
        console.log('注册用户', res)
        // 将_id 存入 this.data.userInfo
        this.data.userInfo._id = res._id
      }
    })
  },

  handleDoubletap(){
    console.log('双击么么哒...')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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