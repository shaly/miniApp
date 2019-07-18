const util = require('../../utils/util.js')

Page({
  data: {
    phoneInfo:[],
    safeArea:"",
    title: '手机信息'
  },
  onLoad: function () {
    const res = wx.getSystemInfoSync();
    console.log("*******" + (res.safeArea == null ? "空" : JSON.stringify(res.safeArea)))
    this.setData({
      phoneInfo: JSON.stringify(res).split(",")
      , safeArea: res.safeArea == null ? "空" : JSON.stringify(res.safeArea)
    })
  }
})