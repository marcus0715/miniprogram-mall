// components/imageSwipe/index.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imageList: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    currentIdx: 1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _updateItemData: function (e) {
      this.setData({
        currentIdx: e.detail.current + 1
      });
   }
  }
})
