const util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    noCardListData: '../../images/noCardListData.png', // 购物车无数据图标
    num: 0, // 编辑栏背景色渐变值
    cardTotalNum: 0, //购物车总数
    isSelectAll: false, // 是否全选
    totalAmount: 0, //购物车总金额
    isEdit: false, // 购物车编辑
    selCardNum: 0, // 购物车选中数量
    triangleImg: '../../images/triangle.png', // 右三角
    selAll: '../../images/selAll.png', // 全选中
    noSelAll: '../../images/notChoose.png', // 全不选（灰色）
    noSelAllW: '../../images/notChooseWhite.png', // 全不选（白色）
    addIcon: '../../images/addIcon.png', // 数量加
    subtractIcon: '../../images/subtractIcon.png', //数量减
    selCardData:[], // 选中的购物车数据
    cardList: [
      {
        storeId: "01", // 店铺id
        stroeName: '俊哲小铺', // 店铺名称
        isSelStore: false, // 该店铺数据是否全选中
        postage: '快递，免邮',
        goodsList: [
          {
            goodsId: "0101", // 商品id
            isSelGoods: false, // 该商品是否选中
            goodsImg: '/images/tiger.jpeg', // 商品图片
            goodsName: '橘栀虎虎珍珠斜跨链包', //商品名称
            goodsNum: 1, //商品数量
            goodsSpecification: '橘栀虎虎，玫瑰绒，金色', // 商品规格
            goodsPrice: 51.1, // 商品价格
          },
          {
            goodsId: "0102", // 商品id
            isSelGoods: false, // 该商品是否选中
            goodsImg: '/images/baby.jpeg', // 商品图片
            goodsName: '君至归来棉花娃娃', //商品名称
            goodsNum: 2, //商品数量
            goodsSpecification: '正常体，裸娃，普毛', // 商品规格
            goodsPrice: 5112.9, // 商品价格
          },{
            goodsId: "0103", // 商品id
            isSelGoods: false, // 该商品是否选中
            goodsImg: '/images/baby.jpeg', // 商品图片
            goodsName: '君至归来棉花娃娃', //商品名称
            goodsNum: 3, //商品数量
            goodsSpecification: '正常体，裸娃，高温丝', // 商品规格
            goodsPrice: 5.11, // 商品价格
          }
        ]
      },
      {
        storeId: "02", // 店铺id
        stroeName: '俊哲小铺', // 店铺名称
        isSelStore: false, // 该店铺数据是否全选中
        postage: '快递，免邮',
        goodsList: [
          {
            goodsId: "0201", // 商品id
            isSelGoods: false, // 该商品是否选中
            goodsImg: '/images/tiger.jpeg', // 商品图片
            goodsName: '橘栀虎虎珍珠斜跨链包', //商品名称
            goodsNum: 2, //商品数量
            goodsSpecification: '橘栀虎虎，玫瑰绒，金色', // 商品规格
            goodsPrice: 11.29, // 商品价格
          },
          {
            goodsId: "0202", // 商品id
            isSelGoods: false, // 该商品是否选中
            goodsImg: '/images/baby.jpeg', // 商品图片
            goodsName: '君至归来棉花娃娃', //商品名称
            goodsNum: 1, //商品数量
            goodsSpecification: '正常体，裸娃，普毛', // 商品规格
            goodsPrice: 511, // 商品价格
          },{
            goodsId: "0203", // 商品id
            isSelGoods: false, // 该商品是否选中
            goodsImg: '/images/baby.jpeg', // 商品图片
            goodsName: '君至归来棉花娃娃', //商品名称
            goodsNum: 3, //商品数量
            goodsSpecification: '正常体，裸娃，高温丝', // 商品规格
            goodsPrice: 5.11, // 商品价格
          }
        ]
      },
      {
        storeId: "03", // 店铺id
        stroeName: '俊哲小铺', // 店铺名称
        isSelStore: false, // 该店铺数据是否全选中
        postage: '快递，免邮',
        goodsList: [
          {
            goodsId: "0301", // 商品id
            isSelGoods: false, // 该商品是否选中
            goodsImg: '/images/tiger.jpeg', // 商品图片
            goodsName: '橘栀虎虎珍珠斜跨链包', //商品名称
            goodsNum: 2, //商品数量
            goodsSpecification: '橘栀虎虎，玫瑰绒，金色', // 商品规格
            goodsPrice: 5112.9, // 商品价格
          },
          {
            goodsId: "0302", // 商品id
            isSelGoods: false, // 该商品是否选中
            goodsImg: '/images/baby.jpeg', // 商品图片
            goodsName: '君至归来棉花娃娃', //商品名称
            goodsNum: 4, //商品数量
            goodsSpecification: '正常体，裸娃，普毛', // 商品规格
            goodsPrice: 51.12, // 商品价格
          },{
            goodsId: "0303", // 商品id
            isSelGoods: false, // 该商品是否选中
            goodsImg: '/images/baby.jpeg', // 商品图片
            goodsName: '君至归来棉花娃娃君至归来棉花娃娃君至归来棉花娃娃', //商品名称
            goodsNum: 5, //商品数量
            goodsSpecification: '正常体，裸娃，高温丝', // 商品规格
            goodsPrice: 511.29, // 商品价格
          }
        ]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 购物车数据
    this.getCardList()
  },

  // get购物车数据
  getCardList () {
    let cardTotalNum = 0
    this.data.cardList.forEach((e, index) => {
      e.goodsList.forEach(i => {
        cardTotalNum++
      })
    })
    this.setData({
      cardTotalNum: cardTotalNum
    })
  },

  // 购物车无数据，点击去逛逛
  goBrowse () {
    wx.switchTab({
      url: '../index/index',
    })
  },

  // 购物车编辑
  cardEdit () {
    if (this.data.isEdit) { //文字是完成
      this.setData({
        isEdit: !this.data.isEdit
      })
    } else { // 文字是编辑
      if (this.data.cardTotalNum === 0 && this.data.cardList.length === 0) {
        wx.showModal({
          content: '购物车暂无数据呦!去逛逛吧',
          success (res) {
            if (res.confirm) {
              wx.switchTab({
                url: '../index/index',
              })
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      } else {
        this.setData({
          isEdit: !this.data.isEdit
        })
      }
    }
  },

  // 购物车结算/删除数据
  handleBtn () {
    const that = this
    // 判断购物车是否选中数据
    if (that.data.selCardNum === 0) {
      wx.showToast({
        title: '还没有选中商品呦！',
        icon: 'none',
        duration: 2000
      }) 
    }else {
       if (this.data.isEdit) {
        wx.showModal({
          title: '提示',
          content: '确定删除选中的' + that.data.selCardNum + '件商品吗？',
          success (res) {
            if (res.confirm) {
              // 如果该店铺商品全选，将该店铺数据全部删除
              let newCardList = that.data.cardList.filter(i => {
                if (i.isSelStore===true) {
                  that.data.cardTotalNum = that.data.cardTotalNum - i.goodsList.length
                  i = null
                }
                return !!i
              })
              that.data.cardList = newCardList
              newCardList.forEach((e, index) => {
                let screenGoodsList = e.goodsList.filter(i => {
                  if (i.isSelGoods===true) {
                    that.data.cardTotalNum--
                    i = null
                  }
                  return !!i
                })
                e.goodsList = screenGoodsList
              })
              that.setData({
                cardList: that.data.cardList, // 购物陈数据更新
                cardTotalNum: that.data.cardTotalNum, // 购车总数更新
                totalAmount: 0.00, // 购物车金额更新
                selCardNum: 0, // 购物车被选中总数更新
                isSelectAll: false, // 是否全选
                selCardData:[] // 本地缓存数据更新
              })
              wx.setStorageSync('selCardData', that.data.selCardData)
              // 服务器数据变更（发接口）
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      } else {
        console.log('结算')
        wx.navigateTo({ // 跳转商品结算页
          url: '/pages/mall/pages/goodsSettlementPage/goodsSettlementPage'
        })
      }    
    }
  },

  // 购物车全选和全不选
  selectAll () {
    this.setData( {
      isSelectAll: !this.data.isSelectAll
    })
    // 并且选中/不选中购物车全部数据
    if (this.data.isSelectAll) {
      this.data.cardList.forEach((e, index) => {
        if (!e.isSelStore) { // 未选中的店铺数据
          e.isSelStore = true
          if (e.goodsList.findIndex(t => t.isSelGoods === true) === -1) {
            // 该店铺未有数据被选中,将该店铺数据全部加入本地缓存数据
            console.log('验证通过')
            this.data.selCardData.push(e)
          } else {
            // 该店铺已有数据被选中，将该店铺未选中数据加入本地缓存数据
            console.log('验证不通过')
            this.data.selCardData.forEach((f, fIndex) => {
              if (e.storeId === f.storeId) {
                this.data.selCardData.splice(fIndex, 1)
                this.data.selCardData.push(e)
              }
            })
          }
          e.goodsList.forEach((i, iIndex) => {
            if (!i.isSelGoods) {
              i.isSelGoods = true
              this.data.selCardNum = this.data.selCardNum + 1 // 计算总数
              this.data.totalAmount = (Number(this.data.totalAmount) + Number(i.goodsNum * i.goodsPrice)).toFixed(2) // 计算金额
            }
          })
        }
      })
      wx.setStorageSync('selCardData', this.data.selCardData)
      this.setData({
        cardList: this.data.cardList, // 更新购物车数据
        selCardData: this.data.selCardData, // 购物车选中数据
        selCardNum: this.data.selCardNum, // 购物车选中数量
        totalAmount: Number(this.data.totalAmount) //购物车总金额
      })
      console.log(this.data.selCardData, '购物车全选更新选中数据')
    } else {
      this.data.cardList.forEach((e, index) => {
        e.isSelStore = false
        e.goodsList.forEach((i, index) => {
          i.isSelGoods = false
        })
      })
      wx.setStorageSync('selCardData', [])
      // 不选中的状态下，购物车总金额和总数以及选中数据都要归零
      this.setData({
        cardList: this.data.cardList, // 更新购物车数据
        selCardData: [], // 购物车选中数据
        selCardNum: 0, // 购物车选中数量
        totalAmount: 0 //购物车总金额
      })
      console.log(this.data.selCardData, '购物车全不选更新选中数据')
    }
  },

  // 店铺全选/全不选（同时将该店铺下的购物车商品全部选中）
  storeSelAll (e) {
    const that = this
    const {stroeIndex} = e.currentTarget.dataset
    // 是否全选取反值
    this.data.cardList[stroeIndex].isSelStore = !this.data.cardList[stroeIndex].isSelStore
    // 将该店铺下的所有商品都选中/不选中，并计算选中金额和数量
    if (this.data.cardList[stroeIndex].isSelStore) {
      let isSelData = false
      this.data.selCardData.forEach((e, index) => {
        if (e.storeId === this.data.cardList[stroeIndex].storeId) {
          this.data.selCardData.splice(index,1)
          this.data.selCardData.push(this.data.cardList[stroeIndex])
          isSelData = true
        }
        return isSelData
      })
      if (!isSelData) { // 如果是FALSE，则说明当前店铺数据是新加的
        this.data.selCardData.push(this.data.cardList[stroeIndex])
      }
      this.data.cardList[stroeIndex].goodsList.forEach((e, index) => {
        if (!e.isSelGoods) {
          // 如果某一商品已被选中不作处理，如果未选中则选中，计算数量和金额
          e.isSelGoods = true
          that.data.selCardNum = that.data.selCardNum + 1
          that.data.totalAmount = (Number(that.data.totalAmount) + e.goodsNum * e.goodsPrice).toFixed(2)
        }
      })
      wx.setStorageSync('selCardData', that.data.selCardData)
      this.setData({
        cardList: this.data.cardList,
        selCardNum: that.data.selCardNum,
        totalAmount: Number(that.data.totalAmount),
        selCardData: that.data.selCardData
      })
      console.log(this.data.selCardData, '店铺全选更新选中数据')
    } else {
      this.data.selCardData.forEach((e, index) => {
        if (e.storeId === this.data.cardList[stroeIndex].storeId) {
          this.data.selCardData.splice(index,1)
        }
      })
      this.data.cardList[stroeIndex].goodsList.forEach((e, index) => {
        e.isSelGoods = false
        that.data.selCardNum = that.data.selCardNum - 1
        that.data.totalAmount = (Number(that.data.totalAmount) - (e.goodsNum * e.goodsPrice).toFixed(2)).toFixed(2)
      })
      console.log(this.data.totalAmount, '购物车选中商品总金额')
      wx.setStorageSync('selCardData', that.data.selCardData)
      this.setData({
        cardList: this.data.cardList,
        selCardNum: that.data.selCardNum,
        totalAmount: Number(that.data.totalAmount),
        selCardData: that.data.selCardData
      })
      console.log(this.data.selCardData, '店铺全不选更新选中数据')
    }
    // 同时查询购物车全部数据是否全部选中，如果全部选中，则购物车全选按钮选中，否则取反
    this.data.isSelectAll = that.data.cardList.findIndex(e => (e.isSelStore===false)) === -1 ? true : false
    this.setData({
      isSelectAll: this.data.isSelectAll
    })
  },

  // 商品选中/不选
  goodsSelAll (e) {
    const {storeIndex, goodsIndex} = e.currentTarget.dataset
    let goodsData = this.data.cardList[storeIndex].goodsList[goodsIndex]
    let goodsPrice = goodsData.goodsPrice
    let goodsNum = goodsData.goodsNum
    // 当前商品选中/不选
    goodsData.isSelGoods = !goodsData.isSelGoods
    let isSelGoods = goodsData.isSelGoods
    // 当前商品选中状态变化后判断该店铺购物车商品是否全选
    this.data.cardList[storeIndex].isSelStore = this.data.cardList[storeIndex].goodsList.findIndex(e => (e.isSelGoods === false))=== -1 ? true : false
    // 判断购物车店铺是否全部选中，改变购物车全选状态
    this.data.isSelectAll = this.data.cardList.findIndex(e => (e.isSelStore===false)) === -1 ? true : false
    // 计算购物车金额
    this.data.totalAmount = isSelGoods ? Number(this.data.totalAmount + goodsNum * goodsPrice).toFixed(2) : Number(this.data.totalAmount - goodsNum * goodsPrice).toFixed(2)
    // 更新购物车选中数量
    this.data.selCardNum = goodsData.isSelGoods ? parseInt(this.data.selCardNum) + 1 : parseInt(this.data.selCardNum) - 1
    // 更新购物车选中数据
    if (isSelGoods) { // 该商品被选中
      let isSelData = false
      this.data.selCardData.forEach((e, index) => {
        if (e.storeId === this.data.cardList[storeIndex].storeId) {
          isSelData = true
        }
        return isSelData
      })
      if (isSelData) { // 当前选中数据中有该商品所在店铺的数据
        this.data.selCardData.forEach((e, index) => {
          if (e.storeId === this.data.cardList[storeIndex].storeId) {
            console.log('当前选中数据中有该商品所在店铺的数据')
            e.goodsList.push(goodsData)
            return
          }
        })
      } else { // 当前选中数据中无该商品所在店铺数据
        let newSelData = JSON.parse(JSON.stringify(this.data.cardList[storeIndex]))
        newSelData.goodsList = [goodsData]
        this.data.selCardData.push(newSelData)
      }
    } else { // 该商品被取消选中
      // 当前取消商品的店铺中还有其余商品被选中
      this.data.selCardData.forEach((e, index) => {
        e.goodsList.forEach((i, indexs) => {
          if (i.goodsId === goodsData.goodsId) {
            e.goodsList.splice(indexs, 1)
            if (e.goodsList.length === 0) { // 当前商品取消选中后该店铺中若无其余所选数据则将该店铺数据删除
              this.data.selCardDat.splice(index, 1)
            }
          }
        })
      })
    }
    wx.setStorageSync('selCardData', this.data.selCardData)
    this.setData({
      cardList: this.data.cardList,
      isSelectAll: this.data.isSelectAll,
      totalAmount: Number.parseFloat(this.data.totalAmount),
      selCardNum: this.data.selCardNum,
      selCardData: this.data.selCardData
    })
    console.log(this.data.selCardData, '商品选中新数据')
  },

  // 商品数量增加/减少
  goodsNumChange (e) {
    let that = this
    const {storeIndex, goodsIndex, type, goodsNum} = e.currentTarget.dataset
    if (type === '0') {
      // 数量减
      if (goodsNum === 1) {
        wx.showToast({
          title: '数量不能再减了呦',
          image: '../../images/plaintIcon.png',
          duration: 2000
        })        
      } else {
        // 如果当前商品被选中待结算，商品数量减一的同时还要计算被结算金额，以及更新本地和服务器的选中数据
        if (that.data.cardList[storeIndex].goodsList[goodsIndex].isSelGoods) {
          // 购物车金额减一个商品的金额
          that.data.totalAmount = (that.data.totalAmount - that.data.cardList[storeIndex].goodsList[goodsIndex].goodsPrice).toFixed(2)
          // 数量减一,更新本地数据
          this.data.selCardData.forEach((e, index) => {
            if (e.storeId === that.data.cardList[storeIndex].storeId) {
              e.goodsList.forEach((i, index) => {
                if (i.goodsId === that.data.cardList[storeIndex].goodsList[goodsIndex].goodsId) {
                  i.goodsNum--
                }
              })
            }
          })
          // 更新服务器数据（发接口）
        } else {
          // 如果当前商品未选中，商品数量减一的同时发送接口变更服务器数据
          that.data.cardList[storeIndex].goodsList[goodsIndex].goodsNum--
        }
        wx.setStorageSync('selCardData', this.data.selCardData)
        this.setData({
          selCardData: this.data.selCardData
        })
      }
    } else if (type === "1") {
      // 数量加(数量增加时要考虑商品库存),还需要考虑当前商品是否选中待结算，如果选中待结算数量增加的同时需要更新选中的购物车金额，以及更新选中的本地数据和服务器数据
      if (that.data.cardList[storeIndex].goodsList[goodsIndex].isSelGoods) { // 该商品已被选中待结算
        // 选中金额增加
        that.data.totalAmount = (Number(that.data.totalAmount) + Number(that.data.cardList[storeIndex].goodsList[goodsIndex].goodsPrice)).toFixed(2)
        // 更新本地数据
        // 数量加一,更新本地数据
        this.data.selCardData.forEach((e, index) => {
          if (e.storeId === that.data.cardList[storeIndex].storeId) {
            e.goodsList.forEach((i, index) => {
              if (i.goodsId === that.data.cardList[storeIndex].goodsList[goodsIndex].goodsId) {
                i.goodsNum++
              }
            })
          }
        })
        // 更新服务器数据(发接口)
      } else {
        that.data.cardList[storeIndex].goodsList[goodsIndex].goodsNum++
        // 更新服务器数据(发接口)
      }
      wx.setStorageSync('selCardData', this.data.selCardData)
      this.setData({
        selCardData: this.data.selCardData
      })
    }
    this.setData({
      cardList: this.data.cardList,
      totalAmount: Number(this.data.totalAmount),
      selCardData: this.data.selCardData
    })
    console.log(this.data.selCardData, '新数据')
  },

  // 进入商品详情
  goGoodsDetails (e) {
    console.log(e, '进入商品详情')
    wx.navigateTo({
      url: '../mall/pages/goodsDetailsPage/goodsDetailsPage',
    })
  },

  // 进入店铺
  goStore (e) {
    console.log(e, '进入店铺')
  },

  // 监听页面滚动
  onPageScroll (e) {
    if (e.scrollTop > 5) {
      // 开始渐变为白色
      this.setData({
        num: e.scrollTop / 5
      })
    } else {
      // 回复为透明
      this.setData({
        num: 0
      })
    }
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