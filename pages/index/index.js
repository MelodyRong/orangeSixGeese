const app = getApp()

Page({
  data: {
    userInfo: {}, // 用户信息
    sliderList: [
      {
        text: '关注',
        sliderId: '01'
      },
      {
        text: '发现',
        sliderId: '02'
      },
      {
        text: '话题',
        sliderId: '03'
      }
    ], // 顶部slider数据
    selSilderIndex: 0, // 选中标签
    background: [
      {
        dec: '关注'
      },{
        dec: '发现'
      },{
        dec: '话题'
      }],
    indicatorDots: false,
    vertical: false,
    autoplay: false
  },
  onLoad() {
    this.setData({
      userInfo: app.globalData.userInfo // 用户信息
    })
  },
  // 登录
  logoIn() {
    let that = this
    // 查看用户是否授权
    wx.getSetting({
      success: function (res) {
        console.log(res, '查看是否授权')
        if (res.authSetting['scope.userInfo']) {
          wx.getUserProfile({
            desc: '用于完善资料',
            success: (userInforRes) => {
              console.log(userInforRes,'用户信息')
              app.globalData.userInfo = userInforRes.userInfo // 缓存用户数据
              that.setData({
                userInfo: userInforRes.userInfo // 用户信息
              })
            }
          })
        } else {
          // 用户没有授权，显示授权页面
        }
      }
    })
  },
  onShow(){
    this.setData({
      userInfo: app.globalData.userInfo // 用户信息
    })
  },
  // 顶部slider滑动
  scroll (e) {
    console.log(e)
  },
  // 页面切换
  swiperChange (e) {
    console.log(e)
    this.setData({
      selSilderIndex: e.detail.current
    })
  },
  // 发帖
  addPost (e) {
    this.selectComponent('#bottomFrame').showFrame()
  },
  // 获取相册数据
  getPhotoAlbum (obj) {
    const that = this
    let type = this.data.type
    let {count,
    mediaType,
    sourceType} = obj
    wx.chooseMedia({
      count: count,
      mediaType: mediaType,
      sourceType: sourceType,
      maxDuration: 30,
      camera: 'back',
      success(res) {
        console.log(res.tempFiles, '选中的资源')
        // 缓存选中数据
        wx.setStorageSync('addDataList', JSON.stringify(res.tempFiles))
        // 关闭发帖弹窗
        that.selectComponent('#bottomFrame').hideFrame()
        // 页面跳转
        if (type === '1' || type === '3') {
          // 图片跳转
          wx.navigateTo({
            url: '/pages/add/pages/addPage/addPage',
          })
        } else if (type === '2') {
          // 视频跳转
          wx.navigateTo({
            url: '/pages/query/pages/addVideoDetailsPage/addVideoDetailsPage',
          })
        }
      },
      fail(failRes) {

      }
    })
  },
  
  // 发帖类型
  release (e) {
    let type = e.currentTarget.dataset.type
    // 存储发帖类型
    this.setData ({
      type: type
    })
    wx.setStorageSync('postType', type)
    if (type === '1'){
      // 图片
      this.getPhotoAlbum({count:18,mediaType:['image'],sourceType:['album', 'camera']})
    } else if (type === '2') {
      // 视频
      this.getPhotoAlbum({count:1,mediaType:['video'],sourceType:['album']})
    } else if (type === '3') {
      // 帖子
      this.getPhotoAlbum({count:18,mediaType:['image'],sourceType:['album', 'camera']})
    } else if (type === '4') {
      // 取消
      this.selectComponent('#bottomFrame').hideFrame()
    }
  }
})
