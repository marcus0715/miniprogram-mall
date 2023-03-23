// components/productDetailComps/priceBar/index.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    productInfo: {
      type: Object,
      value: {}
    },
    selectcategory: {
      type: Object,
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
    _collected: function (e) {
      this.data.productInfo.productCollect = !this.data.productInfo.productCollect;
      this.setData({
        productInfo: this.data.productInfo
      });
    },
    _generateQR(){
      this.triggerEvent('generateQR')
    }
  }
})
