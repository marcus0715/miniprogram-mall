export function apiLogin(data) {
  signIn = wx.cloud.callFunction({
    name: 'signIn',
    data: {
      code: data.code
    },
    complete: res => {
      console.log('callFunction signIn result: ', res)
    }
  })
  return signIn;
}
