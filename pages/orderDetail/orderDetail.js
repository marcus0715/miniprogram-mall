// pages/orderDetail/orderDetail.ts
import {getorderInfo} from '../../api/orderDetail'
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    orderInfo: {},
    showMore: false
  },

  showMoreInfo() {
    this.setData({
      showMore: !this.data.showMore
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad() {
      let orderDetail = await getorderInfo();
      for (let i = 0; i < orderDetail.merchDetail.length; i++) {
        orderDetail.merchDetail[i].showDetail = false;
      }
      this.setData({
        orderInfo: orderDetail
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