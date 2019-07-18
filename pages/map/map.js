const util = require('../../utils/util.js')
Page({
  data: {
    s_width: '375px',
    x: 121.5156956483,
    y: 31.30016107722
  },
  onLoad: function () {    
    var latitude = 1;
    var longitude = 1;
    wx.getLocation({
      type: 'wgs84',
      success: res =>{
        console.log("地图请求成功返回信息为：" + JSON.stringify(res));
        latitude = res.latitude; // 纬度
        longitude = res.longitude; // 经度
        console.log("1***********" + res.latitude + "===" + res.longitude);
      },
      fail: res => {
        console.log("地图返回错误为：" + JSON.stringify(res));
      },
      complete: res => {
        console.log("地图请求完成返回信息为：" + JSON.stringify(res));
        this.setData({
          x: res.longitude,// 经度
          y: res.latitude// 纬度
        })
      }
    });
    this.setData({
      x: longitude,// 经度
      y: latitude// 纬度
    })
    console.log("第一次加载为：" + JSON.stringify(this.data));
  }
})