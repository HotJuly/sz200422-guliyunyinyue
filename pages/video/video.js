// pages/video/video.js
import request from '../../utils/request.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList:[],
    currentId: null,
    videoList:[],
    trigger:false,
    videoId: null
  },
  async changeId(event){
    // console.log('changeId')
    //标签属性的值一定是字符串类型
    //自定义属性的值的类型,你传给他什么,他就是什么
    // console.log(event.currentTarget.dataset.id)
    // console.log(event.currentTarget.id)
    

    //同步设置data中的currentId
    this.setData({
      currentId: event.currentTarget.dataset.id,
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
  async refresherRefresh(){
    /*下拉刷新操作
      1.开启下拉动画->refresher-enabled
      2.监听用户下拉动作->事件名refresherrefresh
      3.在事件回调函数内部,发送请求,获取当前最新数据
      4.将数据更新到data中

      问题:数据请求回来了,但是下拉动画不消失
      解决:通过状态,控制标签属性refresher-triggered属性的切换
    */
    // console.log('refresherRefresh')
    await this.getVideoListData();
    this.setData({
      trigger:false
    })
  },
  scrollToLower(){
    console.log('scrollToLower')
    //请求接下来的数据,并与旧数据进行合并
    let data;
    setTimeout(()=>{
      data = [
          {
            "type": 1,
            "displayed": false,
            "alg": "onlineHotGroup",
            "extAlg": null,
            "data": {
              "alg": "onlineHotGroup",
              "scm": "1.music-video-timeline.video_timeline.video.181017.-295043608",
              "threadId": "R_VI_62_57B282070780439AB8B7EEBADA7B0BF4",
              "coverUrl": "https://p1.music.126.net/9rQe8QvlonyK_6gjUs-KBw==/109951163405417082.jpg",
              "height": 720,
              "width": 1280,
              "title": "Wake (Live ) - Hillsong Young & Free",
              "description": "该回来的，总会回来",
              "commentCount": 116,
              "shareCount": 356,
              "resolutions": [
                {
                  "resolution": 240,
                  "size": 34912508
                },
                {
                  "resolution": 480,
                  "size": 58638761
                },
                {
                  "resolution": 720,
                  "size": 81994785
                }
              ],
              "creator": {
                "defaultAvatar": false,
                "province": 1000000,
                "authStatus": 0,
                "followed": false,
                "avatarUrl": "http://p1.music.126.net/yX7jUxKx0MQsKKHm09TdKQ==/109951162889224877.jpg",
                "accountStatus": 0,
                "gender": 1,
                "city": 1002700,
                "birthday": 809712000000,
                "userId": 250935934,
                "userType": 0,
                "nickname": "DJGrandMother",
                "signature": "心情如歌",
                "description": "",
                "detailDescription": "",
                "avatarImgId": 109951162889224880,
                "backgroundImgId": 109951164570679090,
                "backgroundUrl": "http://p1.music.126.net/lnHCc8D-vLK3E7AphhCO6w==/109951164570679086.jpg",
                "authority": 0,
                "mutual": false,
                "expertTags": null,
                "experts": null,
                "djStatus": 0,
                "vipType": 11,
                "remarkName": null,
                "avatarImgIdStr": "109951162889224877",
                "backgroundImgIdStr": "109951164570679086",
                "avatarImgId_str": "109951162889224877"
              },
              "urlInfo": {
                "id": "57B282070780439AB8B7EEBADA7B0BF4",
                "url": "http://vodkgeyttp9.vod.126.net/vodkgeyttp8/P8DZRued_1777476644_shd.mp4?ts=1600919817&rid=67045BE5AADF7E81410E9AF64893300E&rl=3&rs=owHvOhzRHwjbLkDlIdLYmEYcpddxViic&sign=33d87cbee10371f85374a1f2bea82a9f&ext=MbQfiMjsqTjGUrkgAnxbxsSylRxH5VhHzFV5ThhjfyiSCkcYqls2QnMPFzPFNGf2TzxMdlMd3x85Re1upgk5GucHgnVYTYzUr%2BxJl2GJta0KMD2nLWP%2BHVZ3D0Kpgp%2BFprsHzNg%2F0k3A8ZmrhP57eQRGhbFLB%2BDO4NukIn%2BPPUcgxDMeBXvSSet8RB2N86GBR%2F0dG%2FSoju1XlcCQhMHVQtP3pMZpRL9aYLx%2Bg8qHbKJqZUsE8IvZefqWchakvvSO",
                "size": 81994785,
                "validityTime": 1200,
                "needPay": false,
                "payInfo": null,
                "r": 720
              },
              "videoGroup": [
                {
                  "id": 57106,
                  "name": "欧美现场",
                  "alg": "groupTagRank"
                },
                {
                  "id": 59108,
                  "name": "巡演现场",
                  "alg": "groupTagRank"
                },
                {
                  "id": 1100,
                  "name": "音乐现场",
                  "alg": "groupTagRank"
                },
                {
                  "id": 58100,
                  "name": "现场",
                  "alg": "groupTagRank"
                },
                {
                  "id": 5100,
                  "name": "音乐",
                  "alg": "groupTagRank"
                }
              ],
              "previewUrl": null,
              "previewDurationms": 0,
              "hasRelatedGameAd": false,
              "markTypes": null,
              "relateSong": [],
              "relatedInfo": null,
              "videoUserLiveInfo": null,
              "vid": "57B282070780439AB8B7EEBADA7B0BF4",
              "durationms": 279173,
              "playTime": 131625,
              "praisedCount": 1308,
              "praised": false,
              "subscribed": false
            }
          }
      ]
      this.setData({
        videoList:[...this.data.videoList,...data]
      })
    },2000)
  },
  //用于播放当前视频时候,自动暂停上一个视频
  handlePlay(event){
    // console.log('handlePlay')
    //当第二个视频播放的时候,停止上一个视频
    //播放第一个视频时,this.vid没有值,播放第二个视频时,this.vid存储着上一个视频的id
    // console.log(this.vid)
    let { id } = event.currentTarget;
    if (this.vid && this.vid !== id) {
      let preVideoContext = wx.createVideoContext(this.vid);
      preVideoContext.pause();
    }
    // console.log(id)
    //覆盖上一次视频的id,存储当前视频id
    this.vid=id;
  },
  //用于测试视频停止api是否好使
  testAPI(){
    console.log('testAPI')
    let videoContext = wx.createVideoContext('01A3989AFDE38CB8561D9BDDCFC8AD88');
    videoContext.pause();
  },
  //用于切换image组件和video组件,并自动播放视频
  changeVideoId(event){
    // console.log(event)
    let {id} =event.currentTarget;
    this.setData({
      videoId:id
    })
    let videoContext = wx.createVideoContext(id);
    videoContext.play();
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
  onShareAppMessage: function ({from,target}) {
    /*区分当前触发回调函数的方式
      1)通过右上角转发按钮触发->分享整个小程序的效果
      2)通过button按钮触发->分享当前视频的截图以及标题
      通过return一个对象,可以自定义转发的内容
    */
    // console.log('onShareAppMessage')
    // console.log(from, target)
    if(from==="button"){
      // 2)通过button按钮触发 -> 分享当前视频的截图以及标题
      // console.log(target)
      //target内存储着button组件的事件对象
      let { title,imageurl }= target.dataset;
      return {
        title,
        path:"/pages/video/video",
        imageUrl: imageurl
      }
    } else if (from === "menu") {
      // 1)通过右上角转发按钮触发 -> 分享整个小程序的效果
      return {
        title:"硅谷云音乐",
        path:"/pages/index/index",
        imageUrl:"/static/images/logo.png"
      }
    }
  }
})