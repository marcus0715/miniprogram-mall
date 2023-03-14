// components/productDetailComps/productSelected/index.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    productInfo: {
      type: {},
      value: {}
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
    _productCount: function (e) {
      const finalCount = e.detail;
      this.triggerEvent('countevent', finalCount)
    }
  }
})
