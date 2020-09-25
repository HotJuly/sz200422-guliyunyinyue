// pages/song/song.js
import request from '../../utils/request.js';
let appInstance = getApp();
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
    // let backgroundAudioManager = wx.getBackgroundAudioManager();
    //this.setData是同步修改data中的数据,所以该处可以直接读取
    // console.log(this.data.isPlaying) 
    if (this.data.isPlaying) {
      //给背景音频播放器实例设置src和title,就能实现音频播放
      this.backgroundAudioManager.src = this.data.musicUrl;
      this.backgroundAudioManager.title = this.data.songObj.name;
      //在app实例对象上,存储当前背景音频正在播放的歌曲状态以及id
      appInstance.globalData.playState = true;
      appInstance.globalData.audioId = this.data.songId;
    }else{
      //通过背景音频播放器实例上的pause方法,暂停背景音频播放
      this.backgroundAudioManager.pause();
      appInstance.globalData.playState = false;
    }
  },
  addAudioListener(){
    //监听背景音频播放器的是否进入播放状态
    this.backgroundAudioManager.onPlay(() => {
      // console.log('onPlay')
      this.setData({
        isPlaying: true
      })
      appInstance.globalData.playState = true;
    })
    //监听背景音频播放器的是否进入暂停状态
    this.backgroundAudioManager.onPause(() => {
      // console.log('onPlay')
      this.setData({
        isPlaying: false
      })
      appInstance.globalData.playState = false;
    })
    //监听背景音频播放器的是否进入停止状态
    this.backgroundAudioManager.onStop(() => {
      // console.log('onPlay')
      this.setData({
        isPlaying: false
      })
      appInstance.globalData.playState = false;
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    //getApp()可以获取到全局唯一的app实例,可以在上面任意添加属性,修改属性值
    // console.log('appInstance', appInstance)
    // console.log('appInstance',appInstance.globalData.msg)
    // appInstance.globalData.msg = "我是修改之后的数据"
    // console.log('appInstance', appInstance.globalData.msg)

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

    //当用户进入song页面的时候,如果背景音频正在播放的是当前的这首歌,页面C3效果自动进入播放状态
    let {playState,audioId} =appInstance.globalData;
    if (playState&&audioId===songId){
      this.setData({
        isPlaying:true
      })
    }

    //绑定背景音频播放器相关监听
    this.backgroundAudioManager = wx.getBackgroundAudioManager();
    this.addAudioListener();

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