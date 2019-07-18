const util = require('../../utils/util.js')

Page({
  data: {
    picUrls: [ // 所有图片的URL列表，数组格式
      'https://img1.gtimg.com/10/1048/104857/10485731_980x1200_0.jpg',
      'https://img1.gtimg.com/10/1048/104857/10485726_980x1200_0.jpg',
      'https://img1.gtimg.com/10/1048/104857/10485729_980x1200_0.jpg'
    ],
    title: '图片信息'
  },
  onLoad: function () {
    // const res = wx.getSystemInfoSync();
    // console.log("*******" + (res.safeArea == null ? "空" : JSON.stringify(res.safeArea)))
    // this.setData({
    //   phoneInfo: JSON.stringify(res).split(",")
    //   , safeArea: res.safeArea == null ? "空" : JSON.stringify(res.safeArea)
    // })


  }
})