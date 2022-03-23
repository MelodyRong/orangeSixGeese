// pages/query/pages/messagePage/messagePage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    aboutMyIcon: '../../images/aboutMy1.png',
    commentsImgIcon: '../../images/commentsImg.png',
    giveLikeIcon: '../../images/giveLike.png',
    mesHeaderIcon: '../../images/systemMsg.png', // 消息头像
    triangleImg: '../../images/triangle.png', // 右三角
    mesNum: 3,
    mesList: [
      {
        mesHeaderImg: '../../images/simon.jpg', // 消息头像
        mesName: '龚俊Simon', // 消息名称
        mewTime: '17:01', //最后一条消息的时间(今天的显示今天时分（24小时制），昨天的显示昨天，前天至今年年初的显示月日，今年以前的显示年月日)
        isPlacedTop: '1', //消息置顶
        unreadNume: '10', // 未读条数
        lastMesSenderName: '', // 最后一条消息的发送人名称（群消息的时候显示）
        lastMesSendeContent: '耶耶生日快乐', // 最后一条消息的内容
        mesType: '01' // 消息类型（系统消息，个人消息，关注他人自动恢复消息）
      },
      {
        mesHeaderImg: '../../images/fengzi.jpg', // 消息头像
        mesName: '张哲瀚疯子', // 消息名称
        mewTime: '11:29', //最后一条消息的时间(今天的显示今天时分（24小时制），昨天的显示昨天，前天至今年年初的显示月日，今年以前的显示年月日)
        isPlacedTop: '1', //消息置顶
        unreadNume: '10', // 未读条数
        lastMesSenderName: '', // 最后一条消息的发送人名称（群消息的时候显示）
        lastMesSendeContent: '张哲瀚，我好想你啊', // 最后一条消息的内容
        mesType: '01' // 消息类型（系统消息，个人消息，关注他人自动恢复消息）
      }
    ]
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