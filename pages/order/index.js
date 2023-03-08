// pages/order/index.ts
import {getOrderList} from '../../api/orderList'
Page({
  /**
   * Page initial data
   */
  data: {
    orderList:[],
    orderStates:[
      {
        title: "全部",
        name: "all",
      },
      {
        title: "订单处理中",
        name: "all2",
      },
      {
        title: "进行中",
        name: "all3",
      },
      {
        title: "已预订",
        name: "all4",
      },
      {
        title: "不相关",
        name: "all5",
      },
      {
        title: "部分发货",
        name: "all6",
      },
      {
        title: "部分发货2",
        name: "all7",
      },
    ], 
    loading:false,
    finished:false,
  },

  /**
   * Lifecycle function--Called when page load
   */
  async onLoad() {
    const list = await getOrderList()
    console.log("onLoad---------------");
    this.setData({
      orderList: list
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

  },

  pageScroll: function (e) {
    console.log('pageScroll', e.detail)
  },

  orderNoClick: function(options) {
    console.log("orderNoClick--------------");
    wx.navigateTo({
      url: '../orderDetail/orderDetail'
    })
}
})