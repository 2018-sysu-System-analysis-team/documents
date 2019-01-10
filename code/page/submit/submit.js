// pages/pay/pay.js
Page({
  data: {
      orderItems:[],
      totalPrice:0,
      totalNum:0,
      UserId: '2', //wx.getStorageSync('UserId')
    },


  onLoad: function () {
    var that=this
    that.setData({
      orderItems: wx.getStorageSync('data'),
      totalPrice: wx.getStorageSync('totalPrice'),
      totalNum: wx.getStorageSync('totalNum')
    })
    //console.log(that.data.totalPrice)
  },

  
  to_pay: function () {
    wx.request({
      url: 'http://134.175.97.167:9090/api/Orders?UserId=2',//
      data: {
        "state": 0,
        "payment": this.totalPrice,
        "orderItems": this.orderItems
      },
      method: 'POST',
      header: {},
      success: function () {
        //console.log(res)
        wx.setStorageSync('orderId', res["orderId"])
        wx.setStorageSync('payment', res["payment"])
        wx.setStorageSync('orderItems', res["orderItems"])

        wx.navigateTo({
          url: '../pay/pay'
        })
      },
      fail: function () {
        wx.navigateTo({
          url: '../pay/pay',
        })
      }
    })
  },



})
