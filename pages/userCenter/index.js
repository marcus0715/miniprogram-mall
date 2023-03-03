// pages/userCenter/index.ts
Page({

  /**
   * Page initial data
   */
  data: {
    userID: "0001999250",
    userName: "jordan wang",
    userEmail: "jordan.wang@honeywell.com",
    navigationHeight: 44
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad() {
    const safeVal = wx.getStorageSync('safeVal')
    this.setData({
        navigationHeight: safeVal.topNavHeight
    })
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