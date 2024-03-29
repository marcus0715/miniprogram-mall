// pages/productDetail/productDetail.ts
import {getProductInfo} from '../../api/productList';
import {getAddressList} from '../../api/addressList';
import { getImageUrl } from '../../utils/tools';
import {getShoppingCartList} from '../../api/shoppingCartList';
import QR from 'qrcode-base64'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productDetail: {},
    selectCount: 1,
    addCartCount: 0,
    showAddrs: false,
    showSize: false,
    qrBase64: '',
    addressList: [],
    shoppingCartList: [],
    selectAddrs: ''
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
      selectcategory: cartPro
    });
  },
  async onUpdateCartEvent(e) {
    await getShoppingCartList().then( (resp)=> {
      this.setData({
        shoppingCartList: resp.result,
      });
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
  radioChange: function(e) {
    const addressList = this.data.addressList
    for (let i = 0, len = addressList.length; i < len; ++i) {
      addressList[i].checked = addressList[i].addressName === e.detail.value
    }
    this.setData({
      addressList,
      selectAddrs: e.detail.value
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(params) {
    const requestData = {
      _id: params.id
    };
    await getProductInfo(requestData).then((resp)=>  {
      if (!resp.result[0].imgSrcList) {
        resp.result[0].imgSrcList= [getImageUrl(300, 300), getImageUrl(300, 300), getImageUrl(300, 300), getImageUrl(300, 300), getImageUrl(300, 300)]
      }
      this.setData({
        productDetail: resp.result[0],
        selectcategory: resp.result[0].size ? resp.result[0].size[0] : {}
      });
    });
    await getAddressList().then((resp)=> {
      const addressList = resp.result
      addressList[0].checked = true;
      this.setData({
        addressList,
        selectAddrs: resp.result[0].addressName
      });
    });
    if (wx.getStorageSync('userInfo') || wx.getStorageSync('userInfo').openId) {
      await getShoppingCartList().then( (resp)=> {
        this.setData({
          shoppingCartList: resp.result,
          addCartCount: resp.result.length
        });
      }, (error)=> {
        wx.showToast({
          title: '加载cart信息失败',
          icon: 'error'
        },1500);
      });
    }
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