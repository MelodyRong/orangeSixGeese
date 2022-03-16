const util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
        storeId: "1111", // 店铺id
        stroeName: '俊哲小铺', // 店铺名称
        isSelStore: false, // 该店铺数据是否全选中
        goodsList: [
          {
            goodsId: 1111, // 商品id
            isSelGoods: false, // 该商品是否选中
            goodsImg: '../../images/tiger.jpeg', // 商品图片
            goodsName: '橘栀虎虎珍珠斜跨链包', //商品名称
            goodsNum: 2, //商品数量
            goodsSpecification: '橘栀虎虎，玫瑰绒，金色', // 商品规格
            goodsPrice: 511.29, // 商品价格
          },
          {
            goodsId: 1111, // 商品id
            isSelGoods: false, // 该商品是否选中
            goodsImg: '../../images/baby.jpeg', // 商品图片
            goodsName: '君至归来棉花娃娃', //商品名称
            goodsNum: 2, //商品数量
            goodsSpecification: '正常体，裸娃，普毛', // 商品规格
            goodsPrice: 511.29, // 商品价格
          },{
            goodsId: 1111, // 商品id
            isSelGoods: false, // 该商品是否选中
            goodsImg: '../../images/baby.jpeg', // 商品图片
            goodsName: '君至归来棉花娃娃', //商品名称
            goodsNum: 2, //商品数量
            goodsSpecification: '正常体，裸娃，高温丝', // 商品规格
            goodsPrice: 511.29, // 商品价格
          }
        ]
      },
      {
        storeId: "1111", // 店铺id
        stroeName: '俊哲小铺', // 店铺名称
        isSelStore: false, // 该店铺数据是否全选中
        goodsList: [
          {
            goodsId: 1111, // 商品id
            isSelGoods: false, // 该商品是否选中
            goodsImg: '../../images/tiger.jpeg', // 商品图片
            goodsName: '橘栀虎虎珍珠斜跨链包', //商品名称
            goodsNum: 2, //商品数量
            goodsSpecification: '橘栀虎虎，玫瑰绒，金色', // 商品规格
            goodsPrice: 511.29, // 商品价格
          },
          {
            goodsId: 1111, // 商品id
            isSelGoods: false, // 该商品是否选中
            goodsImg: '../../images/baby.jpeg', // 商品图片
            goodsName: '君至归来棉花娃娃', //商品名称
            goodsNum: 2, //商品数量
            goodsSpecification: '正常体，裸娃，普毛', // 商品规格
            goodsPrice: 511.29, // 商品价格
          },{
            goodsId: 1111, // 商品id
            isSelGoods: false, // 该商品是否选中
            goodsImg: '../../images/baby.jpeg', // 商品图片
            goodsName: '君至归来棉花娃娃', //商品名称
            goodsNum: 2, //商品数量
            goodsSpecification: '正常体，裸娃，高温丝', // 商品规格
            goodsPrice: 511.29, // 商品价格
          }
        ]
      },
      {
        storeId: "1111", // 店铺id
        stroeName: '俊哲小铺', // 店铺名称
        isSelStore: false, // 该店铺数据是否全选中
        goodsList: [
          {
            goodsId: 1111, // 商品id
            isSelGoods: false, // 该商品是否选中
            goodsImg: '../../images/tiger.jpeg', // 商品图片
            goodsName: '橘栀虎虎珍珠斜跨链包', //商品名称
            goodsNum: 2, //商品数量
            goodsSpecification: '橘栀虎虎，玫瑰绒，金色', // 商品规格
            goodsPrice: 511.29, // 商品价格
          },
          {
            goodsId: 1111, // 商品id
            isSelGoods: false, // 该商品是否选中
            goodsImg: '../../images/baby.jpeg', // 商品图片
            goodsName: '君至归来棉花娃娃', //商品名称
            goodsNum: 2, //商品数量
            goodsSpecification: '正常体，裸娃，普毛', // 商品规格
            goodsPrice: 511.29, // 商品价格
          },{
            goodsId: 1111, // 商品id
            isSelGoods: false, // 该商品是否选中
            goodsImg: '../../images/baby.jpeg', // 商品图片
            goodsName: '君至归来棉花娃娃', //商品名称
            goodsNum: 2, //商品数量
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

  // 购物车编辑
  cardEdit () {
    this.setData({
      isEdit: !this.data.isEdit
    })
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
        console.log('删除')
        wx.showModal({
          title: '提示',
          content: '确定删除选中的' + that.data.selCardNum + '商品吗？',
          success (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      } else {
        console.log('结算')

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
        e.isSelStore = true
        e.goodsList.forEach((i, index) => {
          i.isSelGoods = true
          // 计算总数
          this.data.selCardNum = this.data.selCardNum + 1
          // 计算金额
          this.data.totalAmount = (parseInt(this.data.totalAmount) + (i.goodsNum * i.goodsPrice).toFixed(2)).toFixed(2)
          // 记录选中数据
          this.data.selCardData.push(i)
          console.log(this.data.totalAmount, '购物车选中商品总金额')
        })
      })
      this.setData({
        cardList: this.data.cardList, // 更新购物车数据
        selCardData: this.data.selCardData, // 购物车选中数据
        selCardNum: this.data.selCardNum, // 购物车选中数量
        totalAmount: this.data.totalAmount //购物车总金额
      })
    } else {
      this.data.cardList.forEach((e, index) => {
        e.isSelStore = false
        e.goodsList.forEach((i, index) => {
          i.isSelGoods = false
        })
      })
      // 不选中的状态下，购物车总金额和总数以及选中数据都要归零
      this.setData({
        cardList: this.data.cardList, // 更新购物车数据
        selCardData: [], // 购物车选中数据
        selCardNum: 0, // 购物车选中数量
        totalAmount: 0 //购物车总金额
      })
    }
  },

  //  进入店铺
  goStore (e) {
    console.log(e, '进入店铺')
  },

  // 店铺全选/全不选（同时将该店铺下的购物车商品全部选中）
  storeSelAll (e) {
    const that = this
    const {stroeIndex} = e.currentTarget.dataset
    // 是否全选取反值
    this.data.cardList[stroeIndex].isSelStore = !this.data.cardList[stroeIndex].isSelStore
    // 将该店铺下的所有商品都选中/不选中，并计算选中金额和数量
    if (this.data.cardList[stroeIndex].isSelStore) {
      this.data.cardList[stroeIndex].goodsList.forEach((e, index) => {
        console.log(typeof that.data.totalAmount, that.data.totalAmount, e.goodsNum * e.goodsPrice, typeof (e.goodsNum * e.goodsPrice), (that.data.totalAmount + e.goodsNum * e.goodsPrice), typeof (that.data.totalAmount + e.goodsNum * e.goodsPrice))
        e.isSelGoods = true
        that.data.selCardNum = that.data.selCardNum + 1
        that.data.totalAmount = (that.data.totalAmount + e.goodsNum * e.goodsPrice).toFixed(2)
        that.data.selCardData.push(e)
      })
      console.log(this.data.totalAmount, '购物车选中商品总金额')
      this.setData({
        cardList: this.data.cardList,
        selCardNum: that.data.selCardNum,
        totalAmount: Number(that.data.totalAmount),
        selCardData: that.data.selCardData
      })
    } else {
      this.data.cardList[stroeIndex].goodsList.forEach((e, index) => {
        e.isSelGoods = false
        that.data.selCardNum = that.data.selCardNum - 1
        that.data.totalAmount = (parseInt(that.data.totalAmount) - (e.goodsNum * e.goodsPrice).toFixed(2)).toFixed(2)
        that.data.selCardData.splice(e, 1)
      })
      console.log(this.data.totalAmount, '购物车选中商品总金额')
      this.setData({
        cardList: this.data.cardList,
        selCardNum: that.data.selCardNum,
        totalAmount: that.data.totalAmount,
        selCardData: that.data.selCardData
      })
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
    let goodsPrice = this.data.cardList[storeIndex].goodsList[goodsIndex].goodsPrice
    let goodsNum = this.data.cardList[storeIndex].goodsList[goodsIndex].goodsNum
    // 当前商品选中/不选
    this.data.cardList[storeIndex].goodsList[goodsIndex].isSelGoods = !this.data.cardList[storeIndex].goodsList[goodsIndex].isSelGoods
    let isSelGoods = this.data.cardList[storeIndex].goodsList[goodsIndex].isSelGoods
    // 当前商品选中状态变化后判断该店铺购物车商品是否全选
    this.data.cardList[storeIndex].isSelStore = this.data.cardList[storeIndex].goodsList.findIndex(e => (e.isSelGoods === false))=== -1 ? true : false
    // 判断购物车店铺是否全部选中，改变购物车全选状态
    this.data.isSelectAll = this.data.cardList.findIndex(e => (e.isSelStore===false)) === -1 ? true : false
    // 计算购物车金额
    this.data.totalAmount = isSelGoods ? Number(this.data.totalAmount + goodsNum * goodsPrice).toFixed(2) : Number(this.data.totalAmount - goodsNum * goodsPrice).toFixed(2)
    // 更新购物车选中数量
    this.data.selCardNum = this.data.cardList[storeIndex].goodsList[goodsIndex].isSelGoods ? parseInt(this.data.selCardNum) + 1 : parseInt(this.data.selCardNum) - 1
    // 更新购物车选中数据

    this.setData({
      cardList: this.data.cardList,
      isSelectAll: this.data.isSelectAll,
      totalAmount: Number.parseFloat(this.data.totalAmount),
      selCardNum: this.data.selCardNum
    })
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
        that.data.cardList[storeIndex].goodsList[goodsIndex].goodsNum--
      }
    } else if (type === "1") {
      // 数量加(数量增加时要考虑商品库存)
      that.data.cardList[storeIndex].goodsList[goodsIndex].goodsNum++
    }
    this.setData({
      cardList: this.data.cardList
    })
  },

  // 进入商品详情
  goGoodsDetails (e) {
    console.log(e, '进入商品详情')
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