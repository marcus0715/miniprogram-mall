import {shoppingCartList, replaceShoppingCartList} from '../mockData/index'
export const getShoppingCartList = () => {
  return wx.cloud.callFunction({
    name: 'getShoppingCartList'
  }, true)
}

export const changeShoppingNumber = (productId, number) => {
  return wx.cloud.callFunction({
    name: 'changeNumberInShoppingCart',
    data: {
      _id: productId,
      number
    }
  })
}

export const addProductsToCart = (requstData) => {
  return wx.cloud.callFunction({
    name: 'addProductsToCart',
    data: requstData
  }, true)
}

export const removeShoppingCartItem = (productId) => {
  return wx.cloud.callFunction({
    name: 'removeProductInShoppingCart',
    data: {
      _id: productId
    }
  })
}
// export const addShoppingNumber = (id, number) =>{
//   return new Promise(resolve=>{
//     setTimeout(()=>{
//       const list = shoppingCartList.map((item)=>item.id === id? {...item, number} : item)
//       replaceShoppingCartList(list)
//       resolve(true)
//     },0)
//   })
// }
