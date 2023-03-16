// components/customFooter/index.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    productInfo: {
      type: {},
      value: {}
    },
    addCartCount: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    cartCount: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _addToCart: function (e) {
      this.setData({
        cartCount: this.data.cartCount + this.data.addCartCount
      });
    }
  }
})
