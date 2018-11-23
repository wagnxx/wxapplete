// miniprogram/pages/MyInfo/MyInfo.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    infoList: [{
        name: '年龄'
      },
      {
        name: '资产'
      },
      {
        name: '城市'
      },
      {
        name: '婚否'
      },
      {
        name: '重置'
      },
      {
        name: '返回'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    app.data.from = "info"
  },

 
  checkedItem: function(v) {
    const {
      name
    } = v.detail;

    this.methods.checkedItem(name)
  },

  methods: {
    checkedItem: function(v) {
      console.log(v)
    }
  }
})