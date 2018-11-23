// pages/wxml/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: (new Date()).toString() ,
    pullCount:0,
    condition:true,
    objectArray:[1],
    loading:false,
  },
  arrAdd:function(){
    // let _arr=[...this.data.objectArray];
    const len =this.data.objectArray.length
    // this.data.objectArray = this.data.objectArray.concat(len)
    // _arr.push(len);
    this.setData({
      objectArray:[...this.data.objectArray,len],
      loading:true
    })

    wx.showModal({

      title: '标题',

      content: '告知当前状态，信息和解决方法',

      confirmText: '主操作',

      cancelText: '次要操作',

      success: function (res) {

        if (res.confirm) {

          console.log('用户点击主操作')

        } else if (res.cancel) {

          console.log('用户点击次要操作')

        }

      }

    })

  
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    const count=this.data.pullCount+1;
    this.setData({
      pullCount:count
    })
    wx.getNetworkType({
      success:function(res){
        console.log(res)
      }
    })

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (options) {
    console.log(options)
return false
  }
})