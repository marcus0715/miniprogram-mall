// pages/orderDetail/orderDetail.ts
import {getOrderInfo} from '../../api/orderList'
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    orderInfo: {},
    showMore: false,
    showBack: true,
    showLogo: false,
    title: '订单详情'
  },

  showMoreInfo() {
    this.setData({
      showMore: !this.data.showMore
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(params) {
    await getOrderInfo({orderId: params.orderId}).then((resp)=> {
      let orderDetail = resp.result[0];
      for (let i = 0; i < orderDetail.merchDetail.length; i++) {
        orderDetail.merchDetail[i].showDetail = false;
      }
      this.setData({
        orderInfo: orderDetail
      });
    }, (error)=> {
      wx.showToast({
        title: '加载失败！',
        icon: 'error'
      },1500);
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})