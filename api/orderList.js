import {orderList} from '../mockData/index';
export const getOrderList = () => {
  let callProduct;
  if (getApp().globalData.isMocked) {
    callProduct = new Promise(resolve=>{
      setTimeout(()=>{
        resolve(orderList)
      },200)
    })
  } else {  
    callProduct = wx.cloud.callFunction({
      name: 'getOrderList'
    })
  }
  return callProduct;
}
export const getOrderInfo = (orderId) => {
  return wx.cloud.callFunction({
    name: 'getOrderInfo',
    data: orderId
  })
}

export const addToOrderList = (productInfo) => {
  return wx.cloud.callFunction({
    name: 'addProductsToOrderList',
    data: {
      productInfo
    }
  }, true)
}
