const safeValue = () => {
  const res = wx.getSystemInfoSync();
  const res2 = wx.getMenuButtonBoundingClientRect();
  const {
    screenHeight,
    statusBarHeight,
    safeArea: { bottom },
  } = res;
  // 自定义导航栏高度，padding-top==safeTop
  const capsuleHeight = res2.top;
  const topNavHeight =
    statusBarHeight + res2.height + (res2.top - statusBarHeight) * 2;
  // const topNavHeight = pxToRpx(windowWidth, topNavHeightPx)

  wx.setStorageSync('safeVal', {
    bottom: screenHeight - bottom,
    top: statusBarHeight,
    topNavHeight,
    capsuleHeight,
  });
  if (screenHeight && bottom) {
    return {
      bottom: screenHeight - bottom,
      top: statusBarHeight,
      topNavHeight,
      capsuleHeight,
    };
  }
};

module.exports = {
  safeValue,
};
