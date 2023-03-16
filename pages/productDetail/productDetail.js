// pages/productDetail/productDetail.ts
import {getProductInfo} from '../../api/productDetail';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productDetail: {},
    addCartCount: 1
  },

  onCountEvent(e) {
    this.setData({
      addCartCount: e.detail
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    const evenChannel = this.getOpenerEventChannel();
    evenChannel.on('productDataForDetail', (data) => {
      getProductInfo(data._id).then((resp)=>  {
        this.setData({
          productDetail: resp.result[0]
        });
      });
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