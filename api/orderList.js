import {orderList} from '../mockData/index'
export const getOrderList = () => {
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve(orderList)
    },200)
  })
}
