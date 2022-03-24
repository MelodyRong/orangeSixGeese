var app = getApp()

Page({
  data: {
    userId: 'jzp000000001',
    signInImg: '../../images/signIn.png', // 签到图标
    settingImg: '../../images/setting.png', // 设置图标
    messageImg: '../../images/selMessage.png', // 消息图标
    imgList: [
      [{
        imgUrl: '../../images/integral.png',
        text: '积分',
        types: '4'
      },{
        imgUrl: '../../images/giveLike.png',
        text: '点赞',
        types: '5'
      },{
        imgUrl: '../../images/collection.png',
        text: '收藏',
        types: '6'
      },{
        imgUrl: '../../images/fans.png',
        text: '粉丝',
        types: '7'
      },{
        imgUrl: '../../images/focusOn.png',
        text: '关注',
        types: '8'
      },{
        imgUrl: '../../images/footprint.png',
        text: '足迹',
        types: '9'
      }],[{
        imgUrl: '../../images/toPay.png',
        text: '待付款',
        types: '10',
        status: '02'
      },{
        imgUrl: '../../images/toSendGoods.png',
        text: '待发货',
        types: '10',
        status: '03'
      },{
        imgUrl: '../../images/toGoods.png',
        text: '待收货',
        types: '10',
        status: '04'
      },{
        imgUrl: '../../images/toEvaluate.png',
        text: '待评价',
        types: '10',
        status: '05'
      },{
        imgUrl: '../../images/refund.png',
        text: '退款/售后',
        types: '10',
        status: '06'
      }],[{
        imgUrl: '../../images/draft.png',
        text: '我的草稿',
        types: '11'
      },{
        imgUrl: '../../images/posting.png',
        text: '我的发帖',
        types: '12'
      },{
        imgUrl: '../../images/store.png',
        text: '我的店铺',
        types: '13'
      },{
        imgUrl: '../../images/siteIcon.png',
        text: '我的地址',
        types: '14'
      },{
        imgUrl: '../../images/helpFeedback.png',
        text: '帮助反馈',
        types: '15'
      },{
        imgUrl: '../../images/contactUs.png',
        text: '联系我们',
        types: '16'
      }]
    ],
    triangleImg: '../../images/triangle.png' // 全部订单小三角
  },
  onLoad() {
    this.setData({
      userInfo: app.globalData.userInfo
    })
  },
  // 监听页面切换
  onTabItemTap (e) {
    console.log(e, '监听页面切换')
    let that = this
    if (app.globalData.userInfo === null) {
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
                that.setData({
                  userInfo: userInforRes.userInfo
                })
              }
            })
          } else {
            // 用户没有授权，显示授权页面
          }
        }
      })
    }
  },
  // 进入页面
  goNextPage (e) {
    console.log(e.currentTarget.dataset.types, '进入页面')
    let types = e.currentTarget.dataset.types
    if (types === '1') {
      // 签到页面
       wx.navigateTo({
        url: '../query/pages/signInPage/signInPage',
      })
    } else if (types === '2') {
      // 设置页面
      wx.navigateTo({
        url: '../query/pages/settingPage/settingPage',
      })
    } else if (types === '3') {
      // 消息页面
      wx.switchTab({
        url: '../messagePage/messagePage',
      })
    } else if (types === '4') {
      // 积分页面
      wx.navigateTo({
        url: '../query/pages/myIntegralPage/myIntegralPage',
      })
    } else if (types === '5') {
      // 点赞页面
      wx.navigateTo({
        url: '../query/pages/myGiveLikePage/myGiveLikePage',
      })
    } else if (types === '6') {
      // 收藏页面
      wx.navigateTo({
        url: '../query/pages/myCollectionPage/myCollectionPage',
      })
    } else if (types === '7') {
      // 粉丝页面
      wx.navigateTo({
        url: '../query/pages/myFansPage/myFansPage',
      })
    } else if (types === '8') {
      // 关注页面
      wx.navigateTo({
        url: '../query/pages/myFocusOnPage/myFocusOnPage',
      })
    } else if (types === '9') {
      // 足迹页面
      wx.navigateTo({
        url: '../query/pages/myFootprintPage/myFootprintPage',
      })
    } else if (types === '10') {
      // 订单页面
      console.log(e.currentTarget.dataset)
      let status = e.currentTarget.dataset.orderStatus
      if (status === '01') {
        // 全部订单
        wx.navigateTo({
          url: '../mall/pages/orderListPage/orderListPage',
        })
      } else if (status === '02') {
        // 待付款
        wx.navigateTo({
          url: '../mall/pages/orderListPage/orderListPage',
        })
      } else if (status === '03') {
        // 待发货
        wx.navigateTo({
          url: '../mall/pages/orderListPage/orderListPage',
        })
      } else if (status === '04') {
        // 待收货
        wx.navigateTo({
          url: '../mall/pages/orderListPage/orderListPage',
        })
      } else if (status === '05') {
        // 待评价
        wx.navigateTo({
          url: '../mall/pages/orderListPage/orderListPage',
        })
      } else if (status === '06') {
        // 退款/售后
        wx.navigateTo({
          url: '../mall/pages/refundAfterPage/refundAfterPage',
        })
      }
     } else if (types === '11') {
      // 草稿页面
      wx.navigateTo({
        url: '../query/pages/myDraftPage/myDraftPage',
      })
    } else if (types === '12') {
      // 发帖页面
      wx.navigateTo({
        url: '../query/pages/myPostPage/myPostPage',
      })
    } else if (types === '13') {
      // 店铺页面
      wx.navigateTo({
        url: '../mall/pages/myStorePage/myStorePage',
      })
    } else if (types === '14') {
      // 我的地址页面
      wx.navigateTo({
        url: '../query/pages/addressPage/addressPage',
      })
    } else if (types === '15') {
      // 帮助反馈页面
      wx.navigateTo({
        url: '../query/pages/helpFeedbackPage/helpFeedbackPage',
      })
    } else if (types === '16') {
      // 联系我们页面
      wx.navigateTo({
        url: '../query/pages/myContactUsPage/myContactUsPage',
      })
    }
  }
})
