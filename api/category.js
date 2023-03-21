export const getCategoryLevel = () => {
  return wx.cloud.callFunction({
    name: 'getCategoryLevel'
  })
}
export const getCategory = (data) => {
  return wx.cloud.callFunction({
    name: 'getCategory',
    data
  })
}