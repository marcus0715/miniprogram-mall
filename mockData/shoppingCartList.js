import {getImageUrl} from '../utils/tools'
export let shoppingCartList = [
  {
    id: '1',
    name: '商品1',
    desc: "一个很好很好的商品，一个很好很好的商品，一个很好很好的商品，",
    price: 340,
    orginPrice: 500,
    number: 1,
    thumb: getImageUrl(100, 100),
    tag: '3.8节'
  },
  {
    id: '2',
    name: '商品2',
    desc: "一个很好很好的商品",
    price: 5.63,
    orginPrice: 10,
    number: 2,
    thumb: getImageUrl(100, 100),
    tag: ''
  },
  {
    id: '3',
    name: '商品3',
    desc: "一个很好很好的商品，一个很好很好的商品",
    price: 1242,
    orginPrice: 1500,
    number: 1,
    thumb: getImageUrl(100, 100),
    tag: '促销'
  },
  {
    id: '4',
    name: '商品4',
    desc: "一个很好很好的商品，一个很好很好的商品，一个很好很好的商品，",
    price: 340,
    orginPrice: 500,
    number: 1,
    thumb: getImageUrl(100, 100),
    tag: ''
  },
]
export const replaceShoppingCartList = (list)=>{
  shoppingCartList = list
}