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
      value: 0,
      observer: function (newVal, oldVal) {
        const cartNum = newVal;
        this.setData({
          cartCount: this.data.cartCount + cartNum
        });
        this.setData({
          addCartCount: 0
        });
      }
    },
    selectCount: {
      type: Number,
      value: 0,
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    cartCount: 0,
    addCartCount: 0
  },
  /**
   * 组件的方法列表
   */
  methods: {
    _addToCart: function (e) {
      this.setData({
        cartCount: this.data.cartCount + this.data.selectCount
      });
    },
    _enterCart: function (e) {
      wx.reLaunch({
        url: './../shoppingCart/shoppingCart',
      })
    }
  }
})
