// pages/query/pages/addressPage/addressPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    noAddressIcon: '/images/noAddressIcon.png', // 无地址数据icon
    addressList: [
      {
        addressId: '', // 地址id
        userId: '', // 用户id
        areaCode: '', // 区号
        name: '', // 地址名称
        phone: '', // 地址电话
        provinceCode: '', // 省份code码
        province: '', // 地址省份
        cityCode: '', // 城市code码
        city: '', // 地址城市
        countyCode: '', //区县code码
        county: '' , // 区县
        townCode: '', //村镇code码
        town: '', // 村镇
        detailedAddress: '', // 详细地址
      }
    ], // 地址信息列表
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  // 添加/编辑新地址
  addAddress () {
    wx.navigateTo({
      url: '/pages/query/pages/addEditaddressPage/addEditaddressPage',
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