// pages/userCenter/index.ts

Page({
  /**
   * Page initial data
   */
  data: {
    isSignIn: false,
    userID: "0001999250",
    userName: "jordan wang",
    userEmail: "jordan.wang@honeywell.com",
    navigationHeight: 44,
    openid:"",
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,
  },
  
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    wx.getUserProfile({
      desc: '用于完善会员资料',
      success: (res) => {
        console.log('getUserProfile######: ', res);
        wx.setStorageSync('userInfo', res.userInfo);
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
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
    wx.setStorageSync('userInfo', {});
    this.setData({
      hasUserInfo: false,
      userInfo: {}
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad() {
    const safeVal = wx.getStorageSync('safeVal')
    this.setData({
        navigationHeight: safeVal.topNavHeight
    })
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
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