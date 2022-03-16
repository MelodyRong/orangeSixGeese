// pages/classificationPage/classificationPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navTabIndex: 0, // 选中的分类默认为0
    navigationTabList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    wx.request({
      url: 'http://192.168.1.6:8080/navContentList.json',
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res.data)
        that.setData({
          navigationTabList: res.data
        })
      }
    })
  },

  // 选择分类
  selNavTab(e) {
    console.log(e.currentTarget)
    this.setData({
      navTabIndex: e.currentTarget.dataset.index
    })
  },

  // 进入分类列表
  goClassDetailsList (e) {
    console.log(e.currentTarget.dataset)
    wx.navigateTo({
      url: '/pages/mall/pages/classDetailsList/classDetailsList',
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