const util = require('../../utils/util.js')

Page({
  data: {
    motto: '欢迎泊车...',
    books:[
      { id: 111, name: "飘", price: 99, count: 100, url:"https://img1.gtimg.com/10/1048/104857/10485731_980x1200_0.jpg"},
      { id: 222, name: "苏菲的世界", price: 88, count: 50, url: "https://img1.gtimg.com/10/1048/104857/10485731_980x1200_0.jpg" },
      { id: 333, name: "简爱", price: 77, count: 10, url: "https://img1.gtimg.com/10/1048/104857/10485731_980x1200_0.jpg" }
      ],
    userInfo: {},
    objectArray: [
      { id: 5, unique: 'unique_5' },
      { id: 4, unique: 'unique_4' },
      { id: 3, unique: 'unique_3' },
      { id: 2, unique: 'unique_2' },
      { id: 1, unique: 'unique_1' },
      { id: 0, unique: 'unique_0' },
    ],
    numberArray: [1, 2, 3, 4],
    hasUserInfo: true,
    test:"",
    logs: []
  },
  onLoad: function () {
    var app = getApp()
    app.userInfoReadyCallback = res => {
      this.setData({
        userInfo: res.userInfo,
        hasUserInfo: true
      })
    }
    var books = {
      url: app.globalData.commonInfo.ip+'/book/list',
      success: res => {
        console.log("调用阿里服务器返回数据为：" + JSON.stringify(res));
        this.data.books = res.data;
        this.setData({
          books: res.data
        })
      },
      fail: res => {
        console.log("调用阿里服务器失败，返回错误为：" + res);
      },
      complete: res => {
        console.log("调用阿里服务器完毕，返回信息为：" + res);
      }
    };
    wx.request(books);
    //扫描二维码
    // wx.scanCode({
    //   success: (res) => {
    //     console.log(res)
    //   }
    // })
  }
})