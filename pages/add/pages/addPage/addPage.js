var app = getApp()
import a from './addPage'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: false,
    autoplay: false,
    currentNum: 0, // 选中数据的当前位置
    imgList: [], // 选中数据的总长度
    fixType: 'widthFix', // 图片展示比例
  },

  /**
   * 生命周期函数--监听页面加载
   */
 
  onLoad: function (options) {
    // 发布类型
    let type = wx.getStorageSync('postType')
    this.setData({
      type: type
    })
    // 视口宽度
    let windowWidth = app.globalData.systemInfo.windowWidth
    // 视口高度
    let windowHeight = app.globalData.systemInfo.windowHeight
    // 选择的图片数据
    let addImgList = JSON.parse(wx.getStorageSync('addDataList'))
    addImgList.forEach((e, index) => {
      wx.getImageInfo({
        src: e.tempFilePath,
        success (imgRes) {
          let imgHeigth93 = ((imgRes.height)/100)*93 // 图片的93比例
          if (imgRes.width >= windowWidth && imgHeigth93 >= windowHeight) {
            // 宽高都大于，宽度不变，高度自适应
            console.log(imgRes.width, windowWidth, '/111')
            console.log(imgRes.height, imgHeigth93, windowHeight, '/111')
            e.displayMode = false
          } else if (imgRes.width < app.windowWidth && imgHeigth93 > windowHeight) {
            // 宽大于，高不大于，宽度不变，高度自适应
            console.log(imgRes.width, windowWidth, '/222')
            console.log(imgRes.height, imgHeigth93, windowHeight, '/222')
            e.displayMode = false
          } else if (imgRes.width > windowWidth && imgHeigth93 < windowHeight) {
            // 宽不大于，高大于，宽度不变，高度自适应
            console.log(imgRes.width, windowWidth, '/333')
            console.log(imgRes.height, imgHeigth93, windowHeight, '/333')
            e.displayMode = true
          } else {
            // 宽高都不大于
            console.log(imgRes.width, windowWidth, '/444')
            console.log(imgRes.height, imgHeigth93, windowHeight, '/444')
            e.displayMode = true
          }
        }
      })
    })
    console.log(addImgList, '处理后的数据')
    // 图片展示
    this.setData( {
      currentNum: 1,
      imgList: addImgList
    })
  },

  // 监听tab事件
  onTabItemTap(item) {
    console.log(item)
  },

  // 图片滑动监听
  swiperChange (e) {
    console.log(e)
    this.setData({
      currentNum: e.detail.current + 1 // 当前图片位置
    })
  },

  // 下一步
  nextStep (e) {
    // 将图片缓存
    wx.setStorageSync('addPostList', JSON.stringify(this.data.imgVidoeList))
    wx.navigateTo({
      url: '/pages/query/pages/addPostDetailsPage/addPostDetailsPage',
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