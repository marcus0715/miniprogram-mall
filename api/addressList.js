export const getAddressList = () => {
  return wx.cloud.callFunction({
    name: 'getAddressList'
  })
}