// pages/login/login.js
import request from '../../utils/request.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:"17688197776",
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

  async handleLogin(){
    // console.log('handleLogin')
    //1.收集数据
    let {phone,password} =this.data;
    //2.前端表单验证
    let phoneReg = new RegExp(/^1[0-9]{10}/);
    let pwdReg = new RegExp(/[a-zA-Z0-9]{6}/);
    // console.log(reg.test(phone))
    if (!phoneReg.test(phone)){
      wx.showToast({
        title: '手机号格式不正确',
        icon:"none"
      })
      return;
    }
    if (!pwdReg.test(password)) {
      wx.showToast({
        title: '密码格式不正确',
        icon: "none"
      })
      return;
    }
    //3.后端表单验证
    /*
      发送请求
      手机号错误:提示400,
      密码错误:提示502
      成功:提示200
    */
    let result = await request('/login/cellphone',{phone,password});
    // console.log(result);
    wx.showToast({
      title: '登陆成功',
      icon:"success"
    })
    wx.switchTab({
      url: '/pages/personal/personal'
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