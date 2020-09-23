// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:"123",
    password:"123"
  },

  handleChange(event){
    //获取用户输入数据event.detail.value
    // console.log(event.detail.value)
    // {
    //   name:"xiaoming"
    // }
    // return function (event) {
    //   this.setData({
    //     [type]: event.detail.value
    //   })
    // }
    // console.log('handlePhone')
    // console.log(event)
    //向事件回调函数内部传参,需要通过标签属性或者自定义属性
    let type = event.currentTarget.id;
    this.setData({
        [type]: event.detail.value
      })
  },

  handlePassword(event) {
    // console.log(event.detail.value)
    this.setData({
      password: event.detail.value
    })
    // console.log('handlePassword')
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