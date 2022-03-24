// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (!res.code) {
          wx.navigateTo({
            url: "/pages/registrationProblem/registrationProblem",
          })
        }
      }
    })
    // 获取系统信息
    this.getSystemInfo()
  },
  // 从页面栈中删除数据
  delPageStack(num) {
    
  },
  // 获取系统信息
  getSystemInfo() {
    let that = this
    wx.getSystemInfo({
      success (res) {
        that.globalData.systemInfo = res
      }
    })
  },
  // 公共数据
  globalData: {
    myHomeBgc: '/images/myHomeBgc.jpg', // 背景图片
    userInfo: null, // 用户信息
    systemInfo: null // 系统信息
  }
})
