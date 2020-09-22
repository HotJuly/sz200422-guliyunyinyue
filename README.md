# sz200422-guliyunyinyue

# 项目第一天
## 1.首页轮播图模块:静态效果(重点:swiper组件使用)
  1)观察项目<br/>
  2)创建新项目，从0写起<br/>
  3)做好准备工作，引入静态资源<br/>
  4)了解并使用swiper组件和swiper-item组件<br/>


## 2.头部导航栏模块
  1)实现简单布局样式<br/><br/>
  2)iconfont使用方法<br/>
  3)使用图标文件,通过@import引入css文件，出现问题!!!<br/>
	问题:小程序wxss文件引入css文件报错<br/>
	解决:将css文件后缀改为wxss<br/>
  4)完善样式<br/>


## 3.推荐歌曲模块:静态效果(重点:scroll-view使用)
  1)实现推荐区域header静态效果<br/>
  2)了解并使用scroll-view组件<br/>
  3)开启flex布局，想让内部子元素横向排列，出现问题!!!<br/>
	问题:display:flex无效<br/>
	原因:scroll-view组件不能直接开启flex布局,需要配置<br/>
	解决:根据警告修改代码，给组件标签添加属性enable-flex<br/>
  4)布局效果实现,出现问题!!!<br/>
	问题:无法滑动<br/>
	原因:scroll-view组件想要滚动需要单独配置<br/>
	解决:添加标签属性scroll-x,允许横向滚动<br/>
  5)完善布局,实现文本溢出省略,出现问题!!!<br/>
	问题:无法实现多行文本溢出省略<br/>
	解决:<br/>
		overflow:hidden；<br/>
		text-overflow:ellipsis；<br/>
		display:-webkit-box；//开启webkit内核的盒模型<br/>
		-webkit-box-orient:vertical；  //设置子元素对齐方式<br/>
		-webkit-line-clamp:2  //设置为2行文本溢出隐藏<br/>


## 4.首页轮播图模块:数据请求(重点:前后端交互)
  1)分析前后端流程，稍微说明下硅谷云音乐server的情况<br/>
  2)说明下如何启动服务器，以及txt文件，并尝试请求/banner<br/>
  3)讲述wx.request的使用方式，在onLoad中发送请求，出现问题：请求失败，需要提前配置域名<br/>
  4)观看wx.request的文档，讲解：<br/>
	最高并发数为10个<br/>
	默认超时时间和最大超时时间都是60s<br/>
	只能请求https域名，分析下http和https的区别<br/>
	上线之后需要的服务器域名配置<br/>
  5)解决方法：在本地设置中关闭域名验证<br/>


## 5.首页轮播图模块:动态渲染(重点:列表渲染)
  1)查询文档wx:for，使用时与v-for进行对比<br/>
  2)页面效果出来之后，说明控制台警告：wx:key<br/>
  3)查询文档wx:key，并且讲解通过wx:for-item和wx:for-index设置默认变量名和下标名<br/>


## 6.封装发送请求功能函数
  1)分析封装函数的核心思想<br/>
	保留公共部分，提取动态部分<br/>
	1.封装函数<br/>
	  1)将重复出现的代码保留下来(公共代码)<br/>
	  2)将需要动态传入的数据,提取成形参<br/>
	  3)谁调用谁动态传入数据<br/>
	2.封装组件<br/>
	  1)将重复出现的代码保留下来(template,css)<br/>
	  2)将需要动态传入的数据,提取成props<br/>
	  3)谁使用组件,谁动态传入props<br/>
  2)将url,data,method提取成功形参,并添加形参默认值<br/>
  3)请求成功,出现问题!!!<br/>
	问题:如何将数据交给组件<br/>
	解决:通过promise配合then获取到请求回来的参数<br/>
  4)优化代码,改成使用async和await实现效果<br/>
  5)再次解耦,提取出配置文件,用于配置host<br/>


## 7.推荐歌曲模块:动态效果
  1)根据接口文档,使用封装好的函数发送请求,将请求到的数据更新到data中<br/>
  2)使用data数据实现列表渲染(wx:for),将页面的效果改成动态渲染<br/>
  3)出现问题!!!<br/>
	问题:由于业务逻辑中,我们对发送的请求没有先后的要求,使用async和await不合适<br/>
	解决:将async和await改回then函数<br/>


## 8.排行榜模块:头部导航(重点:自定义组件)
  1)分析什么是组件<br/>
	面试题:用html描述组件一下什么是组件<br/>
  2)通过新建Component创建组件文件,将wxml结构和样式转移过来,生成静态组件<br/>
  3)对页面配置进行设置,usingComponents<br/>
  4)组件使用成功之后,发现问题!!!<br/>
	问题:页面第二个头部组件找不到<br/>
	原因:虽然scroll-view组件开启了flex布局,但是scroll-view组件布局高度以开启flex布局之前计算,<br/>
	解决方法:手动设置scroll-view的高度<br/>
  5)通过properties实现动态渲染组件<br/>


## 9.排行榜模块:轮播列表
  1)使用swiper组件和swiper-item组件实现底部轮播列表静态效果<br/>
  2)出现问题!!!<br/>
	问题:如何让下一个swiper-item的内容漏出来一些,提前看到<br/>
	解决:给swiper组件添加一个next-margin标签属性<br/>


## 10.排行榜模块:动态效果
  1)通过/top/list接口请求数据,数据量很大,需要对数据进行处理(我们需要的列表数据在playlist内的tracks中)<br/>
  2)通过while循环请求ids从0-3的数据,取出内部的榜单名称以及每个榜单的前三条数据<br/>
  3)对代码进行优化,当每次数据请求回来之后立马更新状态,提高首屏渲染速度<br/>
  

# 项目第二天
## 11.底部导航(重点:tabbar配置设置)
  1)创建personal页面和video页面<br/>
  2)根据小程序开发文档,在app.json中配置tabbar配置<br/>
	注意:<br/>
	       1.list数组对少需要配置2个对象,对多只能配置5个对象<br/>
	       2.pagePath的路径不能设置成绝对路径<br/>
	       3.iconPath和selectedIconPath都不支持网络图片<br/>


## 12.个人中心模块(C3效果实现)
  1)使用已有的personal页面结构和样式<br/>
  2)通过给cover-container组件绑定touchstart事件获取手指起始坐标startY,<br/>
     绑定touchmove事件获取用户滑动时手指坐标moveY,并计算出滑动距离moveDistance<br/>
  3)给cover-container组件添加行内样式,通过transform控制组件移动,<br/>
     将moveDistance作为组件状态,动态控制组件transform位置<br/>
  4)对位移距离进行临界值判断,不允许往上移动,往下移动到某个位置禁止继续往下移动<br/>
  5)绑定touchend事件,当用户松手时,让cover-container组件回到初始位置,并动态添加行内样式transition实现过渡效果,出现问题!!!<br/>
	问题:虽然松开返回时有过渡效果,但是之后过渡效果一直存在<br/>
	解决:在touchstart事件触发的时候,将transition关闭<br/>


## 13.个人中心模块(其他布局)
  1)使用scroll-view组件实现最近播放<br/>
  2)根据业务场景,用户可能没有播放记录,scroll-view组件不显示,显示提示文本<br/>


## 14.用户登录模块
  1)对页面窗口进行局部配置,将头部中的"硅谷音乐"改为"登录"<br/>
  2)区分input的change和input事件,绑定事件实现对用户输入的数据进行实时收集,出现问题!!!<br/>
	问题:如何得到用户输入的数据<br/>
	解决:event.detail.value<br/>
  3)理解target和currentTarget的区别,target是代表触发事件的对象,currentTarget代表绑定事件的事件源<br/>
	什么是事件委托<br/>
	事件委托有什么好处<br/>
	事件委托的原理<br/>
	事件委托中触发事件的是谁<br/>
	如何事件委托中触发事件的对象<br/>
  4)了解并使用自定义属性(dataset)<br/>
  5)优化代码!!!<br/>
	问题:只声明一个回调函数,实现对两个input组件分别收集数据,<br/>
	       但是无法区分触发当前函数的是username还是password的input组件<br/>
	解决:通过currentTarget可以获取到事件源标签上的标签属性(包括dataset自定义属性),给组件标签设置特定的自定义属性,用于区分<br/>
  6)进行前端表单验证,如果不符合要求,弹出提示窗口提示用户<br/>


## 15.用户登录模块(请求数据)
  1)测试接口是否有效,状态码:<br/>
	400	代表手机号错误<br/>
	502	代表密码错误<br/>
	200	代表登录成功<br/>
  2)使用封装好的请求函数request请求接口,并传入所需要的数据phone和password<br/>
  3)请求之后,根据结果显示不同情况的提示窗口<br/>
  4)页面跳转回个人中心页面,出现问题!!!<br/>
	问题:无论使用wx.navigateTo或者wx.redirectTo都无法成功跳转到个人中心页面<br/>
	原因:wx.navigateTo或者wx.redirectTo都不支持跳转注册为tabbar的页面<br/>
	解决:使用专门跳转tabbar页面的API,wx.switchTab进行页面跳转<br/>
  5)根据业务逻辑进行修改,当用户已经登录,应该无法再次通过点击头像进入登录页面<br/>

## 16.用户登录模块(重点:本地存储)
  1)使用本地存储,将用户数据存储到Storage中<br/>
  2)个人中心页面加载时,自动去读取Storage中的用户信息<br/>
  3)将读取到的用户信息存储到personal页面状态中,出现问题!!!<br/>
	问题:从登录页面跳转回当前页面,用户信息没有更新到personal页面状态中<br/>
	原因:之前跳转登录页面,使用的是wx.navigateTo方法,导致personal页面被保留,并未销毁,所以不会再次出发onLoad<br/>
	解决:使用wx.redirectTo方法跳转登录页面<br/>
  4)通过状态中的用户数据,动态显示用户头像以及用户昵称<br/>


## 17.个人中心模块(最近播放完成)
  1)测试接口是否有效<br/>
  2)通过从已有的用户信息中获取到userId,成功发送请求,并将数据动态渲染到页面上<br/>


## 18.视频模块(导航条静态效果)
  1)实现头部静态效果,出现问题!!!<br/>
	问题:如何实现左右元素宽度固定,中间元素宽度自适应撑满父元素<br/>
	解决:给父元素开启flex,左右元素宽度写死,中间元素写上flex-grow:1<br/>
  2)调整input组件placeholder的文字样式,出现问题!!!<br/>
	解决:可以通过placeholder-style和placeholder-class标签属性对其进行控制<br/>
  3)使用scroll-view组件实现导航条<br/>
	注意：scroll-view的子标签如果不设置高度，会自动继承父元素的高度<br/>


## 19.视频模块(导航条动态效果)
  1)测试接口,请求导航条数据,截取前14条数据<br/>
  2)给标签动态添加active类名,控制下边框的显示隐藏<br/>
  3)绑定点击事件,并通过自定义属性,实现向事件内传参<br/>
  4)获取自定义属性的值,更新页面状态,从而实现点击哪个元素,哪个元素添加类名,出现问题!!!<br/>
	问题:点击组件,状态已经发生变化,但是无法切换类名<br/>
	原因:标签属性的数据类型永远都是字符串,而对象中的id是数字,类型不同,===需要连类型都相同<br/>
	解决:对数据进行数据类型转换再做对比<br/>


## 20.视频模块(视频列表请求数据)
  1)封装函数请求视频列表,出现问题!!!<br/>
	问题:由于该接口需要用到用户Cookies,所以请求失败<br/>
	解决:用户的Cookies在登录的时候才会存在,在响应内部会有,需要修改封装好的request函数<br/>
  2)给request函数添加判断,如果传入的data中有isLogin属性并且为true,就将用户Cookies存储至本地<br/>
  3)给wx.request配置对象的header中添加上cookies属性,并同步读取本地存储的cookies<br/>
  
  
# 项目第三天
## 21.视频模块(视频列表动态效果)
  1)使用scroll-view创建视频列表容器
  2)测试接口数据是否可以播放
  3)使用video组件显示视频,并给scroll-view组件开启竖向滚动,出现问题!!!
	问题:scroll-view组件开启scroll-y属性,不生效
	原因:当前scroll-view高度由内容撑开,并不存在溢出情况
	解决:给scroll-view设置固定高度(屏幕总高度-头部高度-导航栏高度)
  4)完成视频列表剩余样式,实现点击导航条切换视频列表显示内容,
     将请求视频数据的请求代码封装成函数,在navItem的点击事件中再次请求视频数据
  5)增加用户体验
	1.在视频列表数据没回来之前显示提示框,数据回来之后隐藏提示框
	2.在请求其他页面数据之前,清空已有视频列表数据,让用户感受到切换的过程


## 22.视频模块(常见功能)
  下拉刷新功能:
  1)通过scroll-view组件的标签属性refresher-enabled开启下拉刷新
  2)绑定refresherrefresh事件,用于监听用户下拉刷新的操作
  3)当用户下拉时,发送请求,请求最新数据
  4)数据返回之后,将下拉的效果还原,出现问题!!!
	问题:当前都是用户手动还原,如何用代码还原状态
	解决:refresher-triggered的值设置为状态,用状态控制

  上拉加载功能:
  5)绑定scrolltolower事件,监听用户上拉触底的操作
  6)由于没有真实的上拉加载更多接口,需要自己模拟数据,并将模拟的数据与旧数据合并,更新到状态中

  导航条内容滑动
  7)使用scroll-into-view标签属性,实现点击某个选项,让其移动到最前面
	注意:scroll-into-view的值必须是某个选项的id,id的值必须要以字母开头
  8)提升用户体验,使用scroll-with-animation标签属性给移动效果添加动画


## 23.视频模块(解决bug)
  问题:页面可以同时有多个视频进行播放
  1)给video标签绑定play事件的监听,监视视频的播放状态
  2)通过wx.createVideoContent方法得到video的上下文对象,此处需要使用到对应的video标签的id
  3)通过event对象,获取video标签的id
  4)通过生成的上下文对象调用stop方法可以停止视频播放,出现问题!!!
	问题:通过执行上下文对象调用stop方法,只能停止对应id的视频,如何停止上一个视频
	解决:将上一个视频的上下文对象,存储在页面实例对象身上,每次触发play事件时,先调用上一次创建的上下文对象的stop方法
  5)通过上面的方法我们可以实现停止上一个播放视频,但是又出现问题!!!
	问题:如果上一次播放的视频跟本次播放的是同一个视频,将会出现视频刚播放就立马停止的情况,
	       要如何区分上次播放的视频是不是本次的视频
	解决:每次生成上下文对象的同时,将video标签的id也存储在页面实例对象身上


## 24.视频模块(性能优化)
  问题:官方建议通个页面不超过3个video组件,但是我们项目中视频列表明显不符合
  解决:可以用image列表替换成视频列表,当用户点击某个的image组件的时候在将他切换成video组件,进行视频播放
  1)通过给video组件添加标签属性poster,实现视频默认显示某个画面
  2)新增一个image组件,显示与视频相同的图片,并设置相同样式
  3)页面刚显示时,默认显示image组件,video组件隐藏(image组件和video组件显示切换用状态控制)
  4)给image组件绑定点击事件,当用户点击image组件,隐藏当前image组件,显示对应的video组件
  5)效果完成,提升用户体验!!!
	问题:目前点击image组件会切换显示video组件,但是还需要再点击video组件,才能进行播放
	解决:创建videoContext,调用play方法进行,实现video组件自动播放
  6)优化代码!!!
	需求:将handlePlay与image的handleTrigger合并为一个函数
  7)提升用户体验!!!
	问题:当前video组件内显示的画面左右有黑色"边框",并未填充完整,与image组件切换时有些突兀
	解决方案1(效果较差):将video组件上的标签属性object-fit设置为fill		缺点:会使部分竖屏视频效果会被拉伸是去原有比例,效果较差
	解决方案2(效果较好):将video标签宽度和高度的比例设置的跟图片原有高度相同,通过video标签宽度计算高度


## 25.视频模块(分享功能)
  1)需要注意,由于项目还在开发期间,分享小程序给好友,好友必须要有体验权限才可以点开(可以在小程序开发中心设置)
  2)通过给button组件添加标签属性open-type,设置为share,点击之后就会自动触发页面的事件函数onShareAppMessage
  3)在onShareAppMessage中,return对象,自定义标题等数据
  4)通过event.target的值区分当前的分享功能的来源
	到底是点击右上角的分享触发的,还是点击button触发的
	  1.如果是右上角分享的就显示默认的小程序截图
	  2.如果是点击button触发的,就分享按钮对应的图片以及标题


## 26.每日推荐模块
  1)完成静态页面
  2)请求推荐列表数据,将数据存储到状态中,并通过列表渲染生成动态列表


## 27.播放歌曲模块(C3效果)
  1)创建标题,并引入指针和唱片图片,通过flex使他们垂直排布,并水平居中
  2)设置图片宽高,出现问题!!!
	问题:网易云音乐官方指针头部是一个完整的圆形,由于资源限制,我们的图片是半圆的
	解决:创建一个标签,画成圆形,并将指针头部与其重叠
  3)给指针设置用于旋转的类名,并改变旋转的中心点
  4)给唱片设置旋转动画
  5)通过页面状态控制指针和唱片的播放效果
  6)给播放按钮绑定tap事件,控制页面状态isPlay的切换,从而控制页面
  
  
  
# 项目第四天
## 28.每日推荐模块(重点:路由传参)
  1)给每个recommendItem绑定tap事件,当点击之后跳转页面至播放歌曲页面
  2)当页面进行跳转时候,要显示对应歌曲内容的播放歌曲页面,出现问题!!!
	问题1:如何将即将播放歌曲的数据对象,从每日推荐页面传递至播放歌曲页面
	解决:以query格式进行路由传参,播放歌曲页面通过onLoad的形参options接收
	
	问题2:经过问题1,我们成功将数据对象传给了播放歌曲页面,但是由于url长度限制,数据无法完整传到播放歌曲页面
	解决:思路出错,更换思路
  3)由于能传的数据量有限,所以我们将传的数据从歌曲对象换成歌曲的id
  4)在播放歌曲页面的onLoad函数中获取到歌曲的id,并发送请求到服务器,请求数据,并保存到状态中
  5)使用状态数据实现页面动态渲染,通过wx.setNavigationBarTitle设置播放歌曲页面标题


## 29.播放歌曲模块(重点:音乐播放)
  1)由于我们请求回来的歌曲数据中没有音频资源的地址,所以需要再请求另一个专门用户获取音频资源地址的接口
  2)将请求得到的音频资源数据保存至页面状态
  3)优化代码!!!
	问题:用户可能点击每日推荐的某个选项,但是跳转到song页面之后并不播放
	解决:等用户真的有播放歌曲的意愿,再发送请求(点击播放按钮时)
  4)通过wx.getBackgroundAudioManager,获得背景音频的播放器实例
  5)给实例添加属性src和title,当src的值为新值时候,背景音频会自动播放,出现问题!!!
	问题:控制台报错提示,该功能需要配置才能使用
	解决:在app.json中配置requiredBackgroundModes属性

## 30.播放歌曲模块(播放状态显示BUG-1,重点:跨页面通信)
  问题:当song页面开始播放音乐,然后用户返回上个页面,再次进入song页面,当前显示的播放状态不对
  解决方法:
  1)需要将歌曲的播放状态保存起来,分析需求!!!
	需求:如果当前页面展现的歌曲的ID跟上次处于播放状态的歌曲ID相同,你当前页面应该是播放状态
	细化拆分:
		1.需要知道上一首歌是否处于播放状态
		2.需要知道上一首歌到底是哪一首
  2)已知我们需要保存的数据,出现问题!!!
	问题:数据保存在哪里
	知识点:可以通过getApp方法可以获取到App的实例对象
	理解:此时App的globalData效果类似于React中的context和Vuex的state,可以存储数据,也可以实现跨页面通信
	解决:将数据储存在App的实例对象的globalData属性上
  3)当用户点击播放按钮时,需要去修改globalData中存储的播放状态
  4)当song页面加载时,我们需要去判断当前是否有歌曲在播放,并且播放的是不是当前song页面显示的歌曲
	如果当前有歌曲在播放并且就是当前song页面显示的歌曲,将song页面的isPlay状态改成正确状态
	如果没有歌曲播放或者不是当前显示的歌曲,不做处理


## 31.播放歌曲模块(播放状态显示BUG-2)
  问题:修改音频播放状态方法,除了用户在小程序的song页面操作,还可以通过手机任务栏等其他地方进行修改,
         然而这些地方的修改我们并未做出相应的处理
  1)由于用户有多种途径修改背景音频的播放状态,我们需要去监听歌曲的播放状态
  2)当用户改变了歌曲的播放状态,我们也要同步去修改song页面的播放状态和globalData中的播放状态
  3)效果实现,看似完美,出现问题!!!
	问题:首先进入song页面播放歌曲,退出之后,再次进入该页面,用任务栏控制背景音频播放,页面状态没反应
	原因:由于我们每次进入song页面,都会重新生成新的Page实例,并且重新渲染,所以this指向不对,无法更改当前的song页面实例
	解决1:每次onLoad时,将this保存至globalData,在背景音频的监听回调中获取最新的this
	解决2:每次onLoad时,都重新绑定背景音频的监听


## 32.播放歌曲模块(重点:npm包使用,页面通信)
  需求:实现上一首和下一首功能
  1)我们需要知道上一首和下一首歌曲的musicId,通过musicId去请求新歌的数据,出现问题!!!
	问题:song页面只有当前一首歌的数据,无法请求新歌数据
	思路:数据都在每日推荐页面,可以让两个页面进行通信,通知每日推荐页面当前需要的是上一首还是下一首歌曲的musicId
  2)使用npm包PubSub可以实现,出现问题!!!
	问题:小程序中如何使用npm包
	解决:word文档中有写明步骤
  3)安装完PubSub,在每日推荐页面订阅消息,在song页面发布消息,通知每日推荐页面,当前需要的是什么类型的musicId
  4)准备工作:对toSong函数进行修改,在跳转之前记录下当前所点击的列表项的index
  5)如果需要获取的是下一首歌的musicId就将index+1,反之则-1;
  6)通过index从列表数据中读取到对应歌曲的musicId,通过PubSub发送消息传递给song页面
  7)song页面通过订阅消息接收到的musicId,请求对应数据进行显示
  8)优化代码!!!
	问题:当用户切换的歌曲次数越多,页面订阅的switchType次数越来越多
	解决:将switchType消息的订阅放到onLoad中,防止多次订阅
  9)根据业务逻辑,优化代码!!!
	问题:当前歌曲正在播放,用户进行歌曲切换,页面C3效果明显卡顿
	解决:当点击歌曲切换时,将当前页面播放状态切换成暂停
 10)出现问题!!!
	问题:当处于第一首歌时,点击上一首,控制台出现报错(最后一首歌,点下一首也会)
	解决:对index进行判断,如果当前已经是第一首歌,返回最后一首歌的musicId

## 33.播放歌曲模块(进度条功能实现)
  1)绘制静态页面
  2)在data中常见两个状态分别存储当前时间和总时间,实现页面时间动态显示
  3)下载moment插件,将时间格式转换成分秒格式
  4)通过backgroundAudioManager实例身上获取currentTime属性,可以知道当前播放时间,
     配合onTimeUpdate事件,实现定时获取播放时间效果
  5)通过当前播放时间除以总时长得到当前播放的百分比进度,并保存至状态中,动态控制进度条前进
  6)使用wxs实现过滤器效果


## 34.播放歌曲模块(自动切换,性能优化)
  1)需求:当本次歌曲播放完毕,自动播放下一首
	分析:1.如何确定歌曲是否播放完毕,
	       2.如何让song页面播放下一首
  2)问题:每次点击播放都会重新发送请求,但是实际数据都是一样的
  思路:如果没有数据才需要发送请求,请求音频资源地址,如果有数据,只需要将暂停的状态切换成播放状态


## 35.对项目进行分包

