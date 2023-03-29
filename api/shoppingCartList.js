export const getShoppingCartList = (openId) => {
  return wx.cloud.callFunction({
    name: 'getShoppingCartList',
    data: {
      openId
    }
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
