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
    const res = await getProductList()
    const catalog = res.result.map(item => {return {...item, url: getImageUrl(300, 300)}})
    this.setData({
      productList: catalog
    })
  },
  scanQr(){
    wx.scanCode({
      scanType: ['qrCode', 'datamatrix'],
      success (res) {
        console.log(res)
        wx.navigateTo({
          url: '../productDetail/productDetail?id=' + res.result,
        })
      },
      fail(err){
        wx.showToast({
          title: err.errMsg,
          icon: "error"
        })
      }
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