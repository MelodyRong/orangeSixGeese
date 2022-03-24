var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  // 点击用户授权
  userAuthorization (e) {
    // 查看用户是否授权
    wx.getSetting({
      success: function (res) {
        console.log(res, '查看是否授权')
        if (res.authSetting['scope.userInfo']) {
          wx.getUserProfile({
            desc: '用于完善资料',
            success: (userInforRes) => {
              console.log(userInforRes,'用户信息')
              app.globalData.userInfo = userInforRes.userInfo
              // 跳转到首页
              wx.switchTab({
                url: '../index/index',
              })
            }
          })
        } else {
          // 用户没有授权，显示授权页面
        }
      }
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