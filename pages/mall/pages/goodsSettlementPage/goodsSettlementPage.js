// pages/mall/pages/goodsSettlementPage/goodsSettlementPage.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isDefultAddress: true, // 是否有默认地址
        addressDetails: {}, // 收货地址
        selGoodsList: [], // 商品数据
        storeHeaderImg: '/images/orange.png', // 店铺头像
        selAll: '/images/selAll.png', // 全选中
        selAll: '', // 选中图案
        goodsNum: 0, // 商品总数
        totalAmount: 0, // 商品总价
        postage: '', // 当前商品配送服务情况
        orderRemark: '', // 订单备注内容
        orderRemarkIndex: 0, // 订单备注位置
        orderRemarklength: 0, // 订单备注长度
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.addressDetails() // 渲染默认收货地址
        this.getSelGoodsList() // 渲染选中商品数据
    },

    // 渲染默认收货地址
    addressDetails () {
        // 获取选择的收货地址，若无选择地址则加载默认地址，若无默认地址，则展示请选择地址
        if (wx.getStorageSync('addressData')) {
            this.setData({
                addressDetails: wx.getStorage('addressData')
            })
        } else {
            const addressDetails = {
                name: '橘六雁',
                phone: '12345678909',
                address: '北京市朝阳区巴巴爸爸吧巴'
            }
            if (addressDetails) { // 这里是请求接口得来的结果
                this.setData({
                    addressDetails: addressDetails,
                    isDefultAddress: true
                })
            } else {
                this.setData({
                    isDefultAddress: false
                })
            }
        }
    },

    // 渲染选中商品数据
    getSelGoodsList () {
        const selGoodsList = wx.getStorageSync('selCardData')
        let totalAmount = 0
        let totalNum = 0
        let newSelGoodsList = []
        selGoodsList.forEach((e, index) => {
            e['orderRemark'] = ''
            e.goodsList.forEach(i => {
                totalNum = totalNum + i.goodsNum
                totalAmount = Number(totalAmount) + Number(i.goodsNum * i.goodsPrice)
            })
            console.log(e, 'e')
        });
        this.setData({
            selGoodsList: selGoodsList ,
            goodsNum: totalNum, // 商品总数
            totalAmount: totalAmount.toFixed(2) // 商品总价
        })
    },

    // 选择收货地址
    selAddress () {
        wx.navigateTo({
          url: '/pages/query/pages/addressPage/addressPage',
        })
    },

    // 查看配送服务详情
    postageWin (e) {
        this.selectComponent('#postageDetailsWinWrap').showFrame()
        console.log(e)
        const postage = e.currentTarget.dataset.postage
        this.setData({
            postage: postage
        })
    },

    // 关闭配送服务弹窗
    postageAffirmBtn () {
        this.selectComponent('#postageDetailsWinWrap').hideFrame()
        this.setData({
            postage: ''
        })
    },

    // 查看订单备注详情
    orderRemarkWin (e) {
        console.log(e.currentTarget.dataset)
        const orderRemark = e.currentTarget.dataset.orderRemark
        const orderRemarkIndex = e.currentTarget.dataset.orderRemarkIndex
        this.setData({
            orderRemark: orderRemark === '无备注' ? '' : orderRemark,
            orderRemarkIndex: orderRemarkIndex
        })
        this.selectComponent('#orderRemarkWinWrap').showFrame()
    },

    // 订单备注输入时字数长度
    orderRemarkInp (e) {
        this.setData({
            orderRemark: e.detail.value,
            orderRemarklength: e.detail.value.length
        })
    },

    // 关闭订单备注详情
    orderRemarkAffirmBtn () {
        console.log(this.data.orderRemark, 'this.data.orderRemark')
        console.log(this.data.selGoodsList)
        this.data.selGoodsList[this.data.orderRemarkIndex].orderRemark = this.data.orderRemark
        this.setData({
            selGoodsList: this.data.selGoodsList, // 订单备注赋值
            orderRemarklength: 0 // 订单备注数量归零
        })
        this.selectComponent('#orderRemarkWinWrap').hideFrame()
    },

    // 确认订单支付
    confirmPayment () {
        console.log('确认订单并支付')
        /**
         * 支付前需要判断是否选择收货地址
         * 该商品是否已下架，
         * 是否有库存，
         * 库存数量是否大于购买数量，
         * 然后再下单，生成订单后调支付接口，
         * 支付成功后跳转订单详情页面，
         * 支付失败跳转支付失败页面
         * **/
        wx.navigateTo({
          url: '/pages/mall/pages/orderDetailsPage/orderDetailsPage',
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