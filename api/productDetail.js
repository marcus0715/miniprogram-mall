import {productDetailInfo} from '../mockData/productDetail'
export const getProductInfo = (proId) => {
  let callProduct;
  if (getApp().globalData.isMocked) {
    callProduct = new Promise(resolve=>{
      setTimeout(()=>{
        resolve(productDetailInfo)
      },200)
    })
  } else {  
    callProduct = wx.cloud.callFunction({
      name: 'getCurrentPro',
      data: {
        _id: proId
      }
    })
  }
  return callProduct;
}