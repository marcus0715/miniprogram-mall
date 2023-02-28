import {productList} from '../mockData/index'
export const getProductList = () => {
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve(productList)
    },200)
  })
}