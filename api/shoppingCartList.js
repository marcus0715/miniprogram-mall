import {shoppingCartList, replaceShoppingCartList} from '../mockData/index'
export const getShoppingCartList = () => {
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve(shoppingCartList)
    },200)
  })
}

export const deleteShoppingCartItem = (id) => {
  return new Promise(resolve=>{
    setTimeout(()=>{
      const list = shoppingCartList.filter(item=> item.id !== id)
      replaceShoppingCartList(list)
      resolve(true)
    },0)
  })
}
export const addShoppingNumber = (id, number) =>{
  return new Promise(resolve=>{
    setTimeout(()=>{
      const list = shoppingCartList.map((item)=>item.id === id? {...item, number} : item)
      replaceShoppingCartList(list)
      resolve(true)
    },0)
  })
}
