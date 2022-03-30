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
        goodsNum: 0,
        totalAmount: 222
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
        this.setData({
            selGoodsList: wx.getStorageSync('selCardData')
        })
    },

    // 选择收货地址
    selAddress () {
        wx.navigateTo({
          url: '/pages/query/pages/addressPage/addressPage',
        })
    },

    // 查看配送服务详情
    postageWin () {
        console.log('查看配送服务弹窗')
    },

    // 查看订单备注详情
    orderRemarkWin () {
        console.log('查看和输入订单备注')
    },

    // 确认订单支付
    confirmPayment () {
        console.log('确认订单并支付')
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