// pages/navigate/navigate.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "kong",
    phone: '',
    password: ''
  },



  // 获取输入账号 
  phoneInput: function(e) {
    this.setData({
      phone: e.detail.value
    })
  },

  // 获取输入密码 
  passwordInput: function(e) {
    this.setData({
      password: e.detail.value
    })
  },

  // 登录 
  login: function() {

    if (this.data.phone.length == 0 || this.data.password.length == 0) {
      wx.showToast({
        title: '用户名和密码不能为空',
        icon: 'loading',
        duration: 2000
      })
    } else {
      // 这里修改成跳转的页面 
      wx.showToast({
        title: '登录成功',
        icon: 'success',
        duration: 2000
      })
      setTimeout(function() {
        app.data.login = true

        wx.switchTab({
          url: "/pages/index/index",
        })
      }, 2000)
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.checkLoginStatuAndDir()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function(options) {
    this.checkLoginStatuAndDir()

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    app.data.from = "my"
  },


  checkLoginStatuAndDir: function() {
    const {
      from
    } = app.data;
    let url = ""
    

    url = app.data.login && from !== "info" ? "/pages/MyInfo/MyInfo" : "/pages/navigate/navigate"
    if (app.data.login && from !== "info"){
      wx.navigateTo({
        url: "/pages/MyInfo/MyInfo"
      })
    } else if (from === "info"){
      wx.switchTab({
        url: "/pages/navigate/navigate"
      })
    }
    
     
  }
})