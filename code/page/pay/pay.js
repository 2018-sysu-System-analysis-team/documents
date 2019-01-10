// pages/pay/pay.js
Page({

  data: {
    totalPrice:"30",
  },

  onLoad: function (options) {
    var that=this
    that.setData({
      totalPrice: wx.getStorageSync('totalPrice'),
    })
    var state = 1
    wx.showModal({
      title: '确认支付',
      content: "共计"+this.data.totalPrice+"元",
      success: function (res) {
        if(res.confirm == 0) {
          wx.navigateTo({
            url: '../submit/submit',
          })
          console.log('用户取消支付')
        }
        else{
          state = 1 
          console.log('用户确认支付')
        }
      }
    })

    wx.request({
      url: 'http://134.175.97.167:9090/api/Orders/2',//
      data: {
        "orderId": wx.getStorageSync('orderId'),
        "state": state,
        "payment": wx.getStorageSync('payment'),
        "orderItems": wx.getStorageSync('orderItems')
      },
      method: 'put',
      header: {},
    })
  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})