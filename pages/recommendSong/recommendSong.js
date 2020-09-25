// pages/recommendSong/recommendSong.js
import request from '../../utils/request.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    month:"",
    day:"",
    recommendList:[]
  },
  toSong(event){
    //将歌曲id传递给song页面,song页面接受之后,发送请求,获取歌曲详情
    // console.log(event.currentTarget.dataset.item)
    let { id } =  event.currentTarget.dataset;
    // console.log(item)
    wx.navigateTo({
      // url: '/pages/song/song?song='+ JSON.stringify(item),
      url: '/pages/song/song?songId=' + id
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // console.log(new Date().getDate())
    // console.log(new Date().getMonth()+1)
    //获取当前最新时间,并更新到状态中
    this.setData({
      day: new Date().getDate(),
      month: new Date().getMonth() + 1
    })
    if (wx.getStorageSync("cookies")) {
      let result = await request('/recommend/songs');
      // console.log(result)
      this.setData({
        recommendList: result.recommend
      })
    }else{
      wx.showModal({
        title:"请先登录",
        content:"该功能需要登录帐号",
        cancelText:"回到首页",
        confirmText:"去登录",
        success(res){
          console.log('res',res)
          //如果点击确定按钮,就跳转到登录页面
          //如果是取消按钮,就跳转回首页
          if (res.confirm){
            wx.redirectTo({
              url:"/pages/login/login"
            })
          }else{
            wx.navigateBack();
          }
        }
      })
    }
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