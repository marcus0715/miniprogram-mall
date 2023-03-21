import {categoryList} from '../mockData/categoryList'
export const getCategoryList = (categoryId) => {
  let callProduct;
  if (getApp().globalData.isMocked) {
    callProduct = new Promise(resolve=>{
      setTimeout(()=>{
        resolve(categoryList)
      },200)
    })
  } else {
    callProduct = wx.cloud.callFunction({
      name: 'getProductsList',
      data: categoryId
    })
  }
  return callProduct;
}