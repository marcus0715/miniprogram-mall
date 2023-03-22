// pages/userCenter/index.ts

Page({
  /**
   * Page initial data
   */
  data: {
    userID: "0001999250",
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,
  },
  
   getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    wx.getUserProfile({
      desc: '用于完善会员资料',
      success: async (res) => {
        console.log('getUserProfile: ', res);
        const openInfo = await wx.cloud.callFunction({
          name: 'getOpenId'
        })
        wx.setStorageSync('userInfo', {...res.userInfo, openId: openInfo.result.openid});
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        // 清除页面栈，否则切换toolbar页面不会重新刷新
        wx.reLaunch({
          url: '../userCenter/index',
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onExit(e) {
    wx.removeStorageSync('userInfo');
    this.setData({
      hasUserInfo: false,
      userInfo: {}
    })
    wx.reLaunch({
      url: '../userCenter/index',
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
    const userInfo = wx.getStorageSync('userInfo')
    if(userInfo){
      this.setData({
        userInfo,
        hasUserInfo: true
      })
    }
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {

  }
})