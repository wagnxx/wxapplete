// pages/navigate/navigate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "kong",
    list: [],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    page: 1,
    post_id: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    this.updateList()

  },
  nextpage: function() {
    const that = this;
    const curpage = this.data.page + 1;
    this.setData({
      page: curpage
    }, function() {
      console.log(that.data.page)
      that.updateList()
    })
  },
  updateList: function() {
    const _this = this;
    const curpage = this.data.page
    const _type = curpage === 1 ? "refresh" : "loadmore";

    const pid = this.data.post_id;
    const pid_str = pid === 0 ? "" : "&post_id=" + pid

    wx.request({
      url: 'https://api.tuchong.com/feed-app?type=' + _type + '&page=' + this.data.page + pid_str,
      success: function(res) {
        if (res.statusCode === 200 && res.data && res.data.result === "SUCCESS") {
          const feedList = res.data.feedList;
          const _pid = feedList[feedList.length - 1].post_id
          _this.setData({
            list: feedList,
            post_id: _pid
          })
        }

      },
      fail: function(err) {
        console.log(err)
      }
    })
  },

 

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})