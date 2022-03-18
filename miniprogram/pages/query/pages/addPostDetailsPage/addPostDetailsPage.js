var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    addPostList: [], // 选中的数据
    showImgOper: false, // 点击图片显示操作栏
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let addPostList = JSON.parse(wx.getStorageSync('addDataList'))
    this.setData({
      addPostList: addPostList // 选中的数据
    })
    console.log(this.data.addPostList, '选中的数据')
  },

  // 添加新图
  thumbnailAdd () {
    let that = this
    wx.chooseMedia({
      count: 9 - this.data.addPostList.length,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      maxDuration: 30,
      camera: 'back',
      success(res) {
        console.log(res.tempFiles, '再次选中的图片资源')
        that.setData({
          addPostList: that.data.addPostList.concat(res.tempFiles) // 选中的数据
        })
        // 更新缓存中图片数据
        wx.setStorageSync('addPostList', JSON.stringify(this.data.addDataList))
      },
      fail(failRes) {

      }
    })
  },

  // 点击图片预览大图，或删除
  popup(e){
    console.log(e)
    this.setData({
      previewImg:e.currentTarget.dataset.imgUrl,
      selIndex: e.currentTarget.dataset.index
    })
    this.selectComponent('#bottomFrame').showFrame()
  },
  // 关闭图片操作弹窗
  hideFrame() {
    this.selectComponent('#bottomFrame').hideFrame()
  },
  // 查看大图
  previewImg() {
    let that = this
    let imgList = []
    this.data.addPostList.forEach(e =>{
      imgList.push(e.tempFilePath)
    })
    wx.previewImage({
      current: that.data.previewImg, // 当前显示图片的http链接
      urls: imgList // 需要预览的图片http链接列表
    })
  },
  // 显示确认删除图片弹窗
  delImg() {
    this.selectComponent('#bottomFrame').hideFrame()
    this.selectComponent('#contentFrame').showFrame()
  },
  // 取消删除图片
  delCancel() {
    this.selectComponent('#bottomFrame').showFrame()
    this.selectComponent('#contentFrame').hideFrame()
  },
  // 确认删除图片
  delConfirm() {
    console.log(this.data.addPostList.splice(this.data.selIndex, 1), '删除后的数据')
    let newPostList = this.data.addPostList.splice(this.data.selIndex, 1)
    this.setData({
      addPostList: newPostList
    })
    console.log(this.data.addPostList)
    // 更新缓存中图片数据
    wx.setStorageSync('addPostList', JSON.stringify(this.data.addDataList))
    // 关闭删除弹窗
    this.selectComponent('#contentFrame').hideFrame()
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