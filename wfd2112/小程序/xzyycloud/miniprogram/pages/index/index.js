// index.js
Page({

  data:{
    cityname: '未选择', // 用于绑定城市名称
    cid: 1,       // 描述当前顶部导航选中项的类别ID
    movies: [],   // 电影列表
  },

  /** 更新导航时，触发该事件 */
  handleChangeNav(e){
    let id = e.target.dataset.id
    this.setData({cid: id}) // 将data中的cid，改为选中项的ID
    // 判断，缓存中是否已经存过该id对应的数组，
    // 如果有，则直接拿来用，不发请求了
    // 如果没有，在发请求，拿到结果后存入缓存
    wx.getStorage({ 
      key: id,
      success:(res)=>{
        console.log('缓存中找到了',res)
        this.setData({movies: res.data})
      },
      fail: (err)=>{
        console.warn('缓存中找不到', err)
        // 发送https请求，加载当前选中项类别的首页电影数据
        this.loadData(id, 0).then(data=>{
          this.setData({movies: data})
          // 将data存入缓存, key是类别ID
          wx.setStorage({
            key: id,
            data: data 
          })
        }) 
      }
    })
  },

  /**
   * 封装异步发送请求，获取某类别下电影列表的业务
   * @return Promise<[]Object>  返回电影列表
   */
  loadData(cid, offset){
    return new Promise((resolve, reject)=>{
      // 弹出等待框
      wx.showLoading({ title: '加载中...' })
      // 发请求
      wx.request({
        url: 'https://api.tedu.cn/index.php',
        method:'GET',
        data: {cid, offset},
        success: (res)=>{
          console.log('列表加载结果',res)
          // 调用resolve回调方法，将res.data电影列表返回给调用者
          resolve(res.data)
        },
        fail: (err)=>{
          reject(err)
        },
        complete: ()=>{  // 无论成功或失败都会执行
          wx.hideLoading()
        }
      })
    })
  },

 
  /** 生命周期方法， 页面加载时执行 */
  onLoad(){
    // 加载当前城市
    this.loadCurrentCity() 

    // 发送https请求，加载热映类别下的首页数据
    this.loadData(1, 0).then(data=>{
      // data 就是promise通过resolve(xxx)方法返回的电影列表
      this.setData({movies: data})
    })
  },

  /** 当从其他页面返回到当前页时执行 */
  onShow(){
    // 获取globalData中的城市名称，更新左上角即可
    let cityname = getApp().globalData.cityname
    console.log('首页onShow获取城市:'+cityname)
    this.setData({cityname})
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
        this.setData({cityname})
        // 更新globalData
        getApp().globalData.cityname = cityname
      },
      fail: (err)=>{ 
        console.warn(err) 
      }
    })
  },


  /** 当页面滚到底时执行 */
  onReachBottom(){
    console.log('滚到底了...')
    // cid     offset
    let cid = this.data.cid  // 当前类别ID
    let offset = this.data.movies.length // 下标位置
    // 发送请求，加载当前类别的下一页数据
    this.loadData(cid, offset).then(data=>{
      this.setData({
        movies: this.data.movies.concat(data)
      })
    })
  },

  /** 该方法用于监听下拉刷新操作 */
  onPullDownRefresh(){
    console.log('下拉刷新...')
    // 更新当前类别的首页电影列表
    let cid = this.data.cid  // 当前类别ID
    this.loadData(cid, 0).then(data=>{
      // 更新当前列表
      this.setData({movies: data})
      // 停止下拉刷新
      wx.stopPullDownRefresh()
      // 将最新数据存入缓存
      wx.setStorage({
        key: cid+'', // key需要字符串，转成字符串后再存
        data: data
      })
    })
  }

})




