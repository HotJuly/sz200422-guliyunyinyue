// pages/index/index.js
import request from '../../utils/request.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
      bannerList:[],
      recommendList:[],
      topList:[]
  },
  toRecommendSong(){
    wx.navigateTo({
      url: '/songs/pages/recommendSong/recommendSong',
    })
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
    // let result = await request("http://localhost:3000/banner",{type:2},"GET");
    // let recommendData = await request("http://localhost:3000/personalized");
    // console.log(recommendData.result)
    // // console.log('result',result)
    // this.setData({
    //   bannerList:result.banners,
    //   recommendList: recommendData.result
    // })
    request("/banner", { type: 2 }, "GET")
      .then((res)=>{
        this.setData({
          bannerList: res.banners
        })
      })

    request("/personalized")
      .then((res) => {
        this.setData({
          recommendList: res.result
        })
      })

    //存放需要请求的排行榜序号
    let arr=[2,4,6,10,20,22];
    let index=0;
    let topList=[];
    while (index<arr.length) {
      let res = await request("/top/list", { idx: arr[index++] })
      // .then((res)=>{
        // console.log(res)
        let data={
          name: res.playlist.name,
          tracks: res.playlist.tracks.slice(0,3)
        }
        // console.log(this.data.topList)
        topList.push(data);
        this.setData({
          topList: topList
        })
      // })
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