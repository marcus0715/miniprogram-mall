import {request} from '../../utils/request'
import {classificationCategory,classification} from '../../mockData/index'

export const getCategories = async(option, isMock = false) =>{
  if(isMock){
    return Promise.resolve(classificationCategory)
  }
  const categories = await request(option)
  return Promise.resolve(categories)
}

export const getClassifications = async(option, isMock = false) =>{
  if(isMock){
    return Promise.resolve(classification)
  }
  const classifications = await request(option)
  return Promise.resolve(classifications)
}