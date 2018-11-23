//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World wechat',
    userInfo: {},
    list:[],
    page:1,
    pid:0
  },
 

  onLoad: function () {

    var that = this
    console.log(this.checkLoginStatu())
    this.updateList()
  },
  onShow:function(){
    if(!this.checkLoginStatu()){
      wx.switchTab({
        url: "/pages/login/login",
      })
    }
  },
  updateList: function () {
    const _this = this;
    const curpage = this.data.page
    const _type = curpage === 1 ? "refresh" : "refresh";

    const pid = this.data.post_id;
    const pid_str = pid === 0 ? "" : "&post_id=" + pid

    wx.request({
      url: 'https://api.tuchong.com/feed-app?type=' + _type + '&page=' + this.data.page,
      success: function (res) {
        if (res.statusCode === 200 && res.data && res.data.result === "SUCCESS") {
          const feedList = res.data.feedList;
          console.log(feedList[0])
          const _pid = feedList[feedList.length - 1].post_id
          _this.setData({
            list: feedList,
            post_id: _pid
          })
        }

      },
      fail: function (err) {
        console.log(err)
      }
    })
  },
  checkLoginStatu:function(){
    return app.data.login;
  }
})
