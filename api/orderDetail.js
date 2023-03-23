import {orderDetailInfo} from '../mockData/orderDetail'
export const getOrderInfo = () => {
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve(orderDetailInfo)
    },200)
  })
}