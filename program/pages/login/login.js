// login.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
     buttonText:"登录",
     phone:"",
     pwd:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  /**
   * 登录操作
   */
  login:function(e){
    wx.request({
      url: app.globalData.HttpServer +'login', //仅为示例，并非真实的接口地址
      data: {
        phone: this.data.phone,
        pwd: this.data.pwd
      },
      success: function (res) {
        console.log(res);
        if (res.statusCode == 200){
          if (res.data.res == 0) {
            wx.navigateTo({
              url: '../artlist/artlist',
            });
          } else {
            wx.showToast({
              title: res.data.message,
              icon: 'success',
              duration: 2000
            });

          }
        }else{
          wx.showToast({
            title: "网络错误",
            icon: 'fail',
            duration: 2000
          });
        }
          
        
      }
    })

  },
  inputPhone:function(e){
    this.setData({
      phone: e.detail.value
    });
  },
  inputPwd:function(e){
    this.setData({
      pwd: e.detail.value
    });
  }

})