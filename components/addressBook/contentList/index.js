// components/addressBook/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
  },

  lifetimes: {
    ready: function() {
      let that = this;
      let query = wx.createSelectorQuery().in(this);

      query.select('#item-content-id').boundingClientRect().exec(function(res) {
        const contentHeight = { contentHeight: res[0]?.height + 10 };

        that.triggerEvent("GetHeight", contentHeight);
      })
    },

    detached: function() {

    },
  },
})
