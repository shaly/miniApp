//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    test:"aaa"
  },
  onLoad: function () {
    console.log("日志信息：" +this.data.test);
    var app = getApp()
    // Get the global data and change it.
    console.log("日志信息：" + app.globalData.userInfo1.name);
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
    console.log("开始调用本地接口！");
    var loc={};
    console.log("接口调用完毕！");
    console.log("开始调用阿里服务器！");
    var obj = {
      //url:'http://dashuasset.dashuasset.com:8081/getListUser',
      url: 'http://localhost:8081/getListUser',
    success: res => {
      console.log("调用阿里服务器返回数据为：" + res.data[0].userName);
      },
      fail: res => {
        console.log("调用阿里服务器失败，返回错误为：" + res);
      },
      complete: res => {
        console.log("调用阿里服务器完毕，返回信息为：" + res);
      }

    };
    wx.request(obj);
  }
})
