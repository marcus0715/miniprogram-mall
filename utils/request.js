export const request = (options) => {
  return new Promise((resolve, reject) => {
    const header = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    if (options.isNeedToken) {
      const hybrisToken = wx.getStorageSync('hybrisToken');
      header.Authorization = `Bearer ${hybrisToken}`;
    }
    wx.request({
      header,
      ...options,
      success(res) {
        resolve(res);

        // if(res.statusCode === 200) {
        //   resolve(res.data)
        // } else {
        //   reject(res.data)
        // }
      },
      fail(res) {
        reject(res.data);
      },
    });
  });
};
export const wxPromise = (api) => {
  function func(options, ...params) {
    return new Promise((resolve, reject) => {
      api(
        {
          ...options,
          success: (res) => {
            resolve(res);
          },
          fail: reject,
        },
        ...params
      );
    });
  }
};
