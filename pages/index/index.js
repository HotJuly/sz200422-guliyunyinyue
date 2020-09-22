// pages/index/index.js
import request from '../../utils/request.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
      bannerList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    /*
      1.在哪发
       onLoad
      2.怎么发
       wx.request({url})
      3.往哪发
        去看接口文档
    */
    // wx.request({
    //   url:"http://localhost:3000/banner",
    //   data:{
    //     type:2
    //   },
    //   success:(res)=>{
    //     //请求成功之后,将数据存放到状态data中,实现动态渲染
    //     this.setData({
    //       bannerList:res.data.banners
    //     })
    //   }
    // })
    let result = await request("http://localhost:3000/banner",{type:2},"GET");
    console.log('result',result)
    this.setData({
      bannerList:result.banners
    })
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})