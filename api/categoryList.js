import {categoryList} from '../mockData/categoryList'
export const getCategoryList = () => {
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve(categoryList)
    },200)
  })
}