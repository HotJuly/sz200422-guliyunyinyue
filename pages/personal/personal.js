// pages/personal/personal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    moveDistance:0,
    moveTransition:"none"
  },

  handleTouchStart(event){
    //event.touches数组->用于收集当前屏幕上所有的手指信息
    //event.changedTouches数组->用于收集当前屏幕上所有正在移动的手指信息
    // console.log('handleTouchStart')
    //获取当前第一个手指的Y轴坐标
    this.startY = event.touches[0].clientY;
    //二次下拉时,重置transition状态,防止下拉具有过渡效果
    this.setData({
      moveTransition:"none"
    })
    // console.log('startY',event.touches[0].clientY)
  },

  handleTouchMove(event) {
    // console.log('handleTouchMove')
    //获取当前第一个手指的Y轴坐标
    let moveY = event.touches[0].clientY;
    //通过当前手指位置减去起始位置,得到手指移动距离
    let moveDistance=Math.floor(moveY-this.startY);
    //如果手指往上滑动,元素不移动
    //如果手指往下滑动超过80,元素停在80
    if (moveDistance<0)return ;
    if (moveDistance > 80) moveDistance=80;
    this.setData({
      moveDistance
    })
    // console.log(moveDistance)
    // console.log('moveY',event.touches[0].clientY)
  },
  handleTouchEnd(){
    //当手指开启,让元素回到起始位置
    //元素回去的过程需要拥有过渡效果
    this.setData({
      moveDistance:0,
      moveTransition:"transform 400ms"
    })
    // console.log('handleTouchEnd')
  },
  toLogin(){
    wx.navigateTo({
      url: '/pages/login/login',
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