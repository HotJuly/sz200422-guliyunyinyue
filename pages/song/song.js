// pages/song/song.js
import request from '../../utils/request.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlaying:false,
    songObj:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    //路由传参可以从options中获取
    console.log(options)
    let { songId } = options;
    // console.log(song)
    // console.log(JSON.parse(song))
    let result = await request('/song/detail', { ids: songId});
    let songObj = result.songs[0];
    this.setData({
      songObj
    })
    wx.setNavigationBarTitle({
      title:songObj.name
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