import {orderList} from '../mockData/index'
export const getOrderList = () => {
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve(orderList)
    },200)
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
