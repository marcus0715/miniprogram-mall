// app.js
import { apiLogin } from './api/user';
import { safeValue } from './utils/wxSys'
import { request } from './utils/request'
App({
  onLaunch() {
    const _this = this;
    wx.getSystemInfo({
      success(res) {
        wx.setStorageSync('systemInfo', res);
        _this.globalData.SystemInfo = res;
      },
    });
    wx.cloud.init({
      env: "mall-2gkjgi8hceaa6fc5",
      traceUser: true
    })
    wx.cloud.callFunction = request
    safeValue()
  },
  globalData: {
    userInfo: null,
    SystemInfo: '',
  },
  onShow() {
    this.update();
  },
  update() {
    // notify user new version
    if (wx.canIUse('getUpdateManager')) {
      const updateManager = wx.getUpdateManager();
      updateManager.onCheckForUpdate(function (res) {
        // callback after new version information
        if (res.hasUpdate) {
          updateManager.onUpdateReady(function () {
            wx.showModal({
              title: '更新提示',
              content: '新版本已经准备好，是否重启应用？',
              success(res) {
                // res: {errMsg: "showModal: ok", cancel: false, confirm: true}
                if (res.confirm) {
                  // new version is ready and invoke "applyUpdate" to upgrade and restart
                  updateManager.applyUpdate();
                }
              },
            });
          });
          updateManager.onUpdateFailed(function () {
            // fail on download new version
            wx.showModal({
              title: '已经有新版本了哟~',
              content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开',
            });
          });
        }
      });
    }
  },


  loadFontFace() {
    const _this = this;

    wx.loadFontFace({
      global: true,
      family: 'ff-regular',
      source: `url("${_this.globalData.h5_domain}${_this.globalData.fonts.ff_regular}")`,
      success: (res) => {},
      fail(res) {
        console.log('font load failed.');
      },
    });

    wx.loadFontFace({
      global: true,
      family: 'ff-HoneywellSansWeb',
      source: `url("${_this.globalData.h5_domain}${_this.globalData.fonts.ff_HoneywellSansWeb}")`,
      success: (res) => {},
      fail(res) {
        console.log('font load failed.');
      },
    });
  },
});
