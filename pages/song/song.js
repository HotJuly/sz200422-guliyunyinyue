// pages/song/song.js
import request from '../../utils/request.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlaying:false,
    songObj:{},
    musicUrl:"",
    songId:null
  },
  async handlePlay(){
    //如果当前已经拥有音频地址,我们就不发送请求
    if (!this.data.musicUrl) {
      //获取音频地址
      let musicUrlData = await request('/song/url', { id: this.data.songId });
      // console.log(musicUrlData)
      this.setData({
        musicUrl: musicUrlData.data[0].url
      })
    }


    // console.log('handlePlay')
    //让页面C3效果动起来->页面C3效果进入播放状态
    this.setData({
      isPlaying:!this.data.isPlaying
    })

    //播放音频
    //获取背景音频播放器
    let backgroundAudioManager = wx.getBackgroundAudioManager();
    //this.setData是同步修改data中的数据,所以该处可以直接读取
    // console.log(this.data.isPlaying) 
    if (this.data.isPlaying) {
      //给背景音频播放器实例设置src和title,就能实现音频播放
      backgroundAudioManager.src = this.data.musicUrl;
      backgroundAudioManager.title = this.data.songObj.name;
    }else{
      //通过背景音频播放器实例上的pause方法,暂停背景音频播放
      backgroundAudioManager.pause();
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    //路由传参可以从options中获取
    // console.log(options)
    let { songId } = options;
    // console.log(song)
    // console.log(JSON.parse(song))
    let result = await request('/song/detail', { ids: songId});
    let songObj = result.songs[0];
    this.setData({
      songObj,
      songId
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