import {productDetailInfo} from '../mockData/productDetail'
export const getProductInfo = (proId) => {
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve(productDetailInfo)
    },200)
  })
}