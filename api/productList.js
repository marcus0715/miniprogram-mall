import {productList} from '../mockData/index'
import {productDetailInfo} from '../mockData/productDetail'
export const getProductList = () => {
  return wx.cloud.callFunction({
    name: 'getCatalog'
  })
}
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
      data: proId
    })
  }
  return callProduct;
}