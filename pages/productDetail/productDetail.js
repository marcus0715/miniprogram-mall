// pages/productDetail/productDetail.ts
import {getProductInfo} from '../../api/productList';
import { getImageUrl } from '../../utils/tools';
import QR from 'qrcode-base64'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productDetail: {},
    selectCount: 0,
    addCartCount: 0,
    showAddrs: false,
    showSize: false,
    qrBase64: '',
  },

  onCloseAddrs: function () {
    this.setData({
      showAddrs: false
    });
  },
  onCloseSize: function () {
    this.setData({
      showSize: false
    });
  },
  onAddCartEvent: function (e) {
    this.onCloseSize();
    const cartPro = e.detail;
    this.setData({
      addCartCount: cartPro.number,
      selectCatagory: cartPro.catagory
    });
  },
  onGenerateQR(){
    const imgData = QR.drawImg(this.data.productDetail._id, {
        typeNumber: 4,
        errorCorrectLevel: 'M',
        size: 300
      })
      this.setData({
        qrBase64: imgData
      })
  },
  onCloseQRModal(){
    this.setData({
      qrBase64: ''
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(params) {
    const requestData = {
      _id: params.id
    };
    getProductInfo(requestData).then((resp)=>  {
        if (!resp.result[0].imgSrcList) {
          resp.result[0].imgSrcList= [getImageUrl(300, 300), getImageUrl(300, 300), getImageUrl(300, 300), getImageUrl(300, 300), getImageUrl(300, 300)]
        }
        this.setData({
          productDetail: resp.result[0]
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