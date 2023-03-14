// pages/home/home.ts
import {getImageUrl} from '../../utils/tools'
import {getProductList} from '../../api/productList'
Page({

  /**
   * Page initial data
   */
  data: {
      logoUrl: getImageUrl(1000, 410),
      searchVal: '',
      messageCount: 9,
      productList: []
  },
  search(event) {
    console.log(event.detail)
  },
  /**
   * Lifecycle function--Called when page load
   */
  async onLoad() {
    // const list = await getProductList()
    // this.setData({
    //   productList: list
    // })
    wx.cloud.callFunction({
      name: 'getCatalog',
    }).then(res => {
      const catalog = res.result.map(item => {return {...item, url: getImageUrl(300, 300)}})
      this.setData({
        productList: catalog
      })
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