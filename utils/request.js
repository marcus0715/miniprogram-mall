let callFunction = wx.cloud.callFunction

// 全局遮罩， 防止一个页面发送多次请求时，出现多个遮罩
let needLoadingRequestCount = 0

const showFullScreenLoading = () => {
  if (needLoadingRequestCount === 0) {
    wx.showLoading({
      title: '加载中',
      mask: true
    })
  }
  needLoadingRequestCount++;
}

const hideFullScreenLoading = () => {
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0){
    wx.hideLoading()
  }
}

export const request = (option, isNeedAuthorize = false, showloading = true) => {
  if(showloading) {
    showFullScreenLoading()
  }
  return new Promise((resolve, reject) => {
    if(isNeedAuthorize && (!wx.getStorageSync('userInfo') || !wx.getStorageSync('userInfo').openId)){
      // reject({errCode: 1001, errMsg: '用户未授权'});
      if(showloading) {
        hideFullScreenLoading()
      }
      wx.showModal({
        title: '请求失败',
        content: '用户未登录，请前往登录!',
        showCancel: false,
        complete: (res) => {
          if (res.confirm) { 
            wx.switchTab({
              url: '../userCenter/index',
            })
          }
        }
      })
    } else {
      const {name, data} = option
      callFunction({
        name,
        data,
        success: res =>{
            resolve(res)
        },
        fail: err => {
          reject({errCode: err.errCode, errMsg: err.errMsg})
        },
        complete: () => {
          if(showloading) {
            hideFullScreenLoading()
          }
        }
      })
    }
  })
}


// export const request = (options) => {
//   return new Promise((resolve, reject) => {
//     const header = {
//       'Content-Type': 'application/x-www-form-urlencoded',
//     };
//     if (options.isNeedToken) {
//       const hybrisToken = wx.getStorageSync('hybrisToken');
//       header.Authorization = `Bearer ${hybrisToken}`;
//     }
//     wx.request({
//       header,
//       ...options,
//       success(res) {
//         resolve(res);

//         // if(res.statusCode === 200) {
//         //   resolve(res.data)
//         // } else {
//         //   reject(res.data)
//         // }
//       },
//       fail(res) {
//         reject(res.data);
//       },
//     });
//   });
// };