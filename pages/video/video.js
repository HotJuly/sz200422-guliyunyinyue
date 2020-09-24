// pages/video/video.js
import request from '../../utils/request.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList:[],
    currentId: null,
    videoList:[]
  },
  async changeId(event){
    // console.log('changeId')
    //标签属性的值一定是字符串类型
    //自定义属性的值的类型,你传给他什么,他就是什么
    // console.log(event.currentTarget.dataset.id)
    // console.log(event.currentTarget.id)
    

    //同步设置data中的currentId
    this.setData({
      currentId: event.currentTarget.id*1,
      videoList:[]
    })

    //显示loading提示框
    wx.showLoading({
      title:"正在加载,请稍后..."
    })

    //等待请求结束,不加await,此处不会等待请求回来
    await this.getVideoListData();
    // console.log(2)

    //隐藏loading提示框
    wx.hideLoading();
  },
  async getVideoListData(){
    let videoListData = await request('/video/group', { id: this.data.currentId })
    // console.log('videoListData',videoListData)
    this.setData({
      videoList: videoListData.datas
    })
    // console.log(1)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    let listData = await request('/video/group/list');
    // console.log(listData)
    this.setData({
      navList: listData.data.slice(0,14),
      currentId: listData.data[0].id
    })

    //发送请求获取videoList数据
    this.getVideoListData();
    // let videoListData = await request('/video/group', { id: 58100})
    // // console.log('videoListData',videoListData)
    // this.setData({
    //   videoList: videoListData.datas
    // })
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