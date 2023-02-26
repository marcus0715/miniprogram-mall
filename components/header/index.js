// pages/components/header/index.js
const app = getApp();
Component({
  /**
   * Component properties
   */
  options: {
    addGlobalClass: true,
  },
  properties: {
    safeVal: {
      type: Object,
    },
    showBack: {
      type: Boolean,
      value: true,
    },
    showLogo: {
      type: Boolean,
      value: true,
    },
    themBlack: {
      type: Boolean,
      value: false,
    },
    bgWhite: {
      type: Boolean,
      value: false,
    },
    title: {
      type: String,
      value: '',
    },
  },
  /**
   * Component initial data
   */
  data: {
    imagePre: app.globalData.imagePre,
    safeTop: 0,
    safeBottom: 0,
    topNavHeight: 44,
    bgColor: false,
  },
  lifetimes: {
    attached() {},
  },
  observers: {
    safeVal(safeVal) {
      this.setData({
        safeTop: (safeVal && safeVal.top) || 0,
        safeBottom: (safeVal && safeVal.bottom) || 0,
        topNavHeight: (safeVal && safeVal.topNavHeight) || 44,
      });
    },
    bgWhite(bgWhite) {
      this.setData({
        bgColor: bgWhite,
      });
    },
  },
  /**
   * Component methods
   */
  methods: {
    pageBack() {
      const pages = getCurrentPages();
      if (pages[pages.length - 2]) {
        // if has prev page then go back
        wx.navigateBack({
          delta: 1,
        });
      } else {
        wx.switchTab({
          url: '/pages/home/home',
        });
      }
    },
  },
});
