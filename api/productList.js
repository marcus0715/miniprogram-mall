import {productList} from '../mockData/index'
export const getProductList = () => {
  return wx.cloud.callFunction({
    name: 'getCatalog'
  })
}