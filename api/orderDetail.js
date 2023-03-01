import {orderDetailInfo} from '../mockData/orderDetail'
export const getorderInfo = () => {
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve(orderDetailInfo)
    },200)
  })
}