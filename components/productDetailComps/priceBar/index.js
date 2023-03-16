// components/productDetailComps/priceBar/index.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    productInfo: {
      type: Object,
      value: {},
      observer: function(newVal, oldVal) {
        let price, dollar, point;
        if (Object.keys(newVal).length > 0) {
          price = newVal.price;
          price = price.split('.');
          dollar = price[0];
          point = price[1];
          newVal.dollar = dollar;
          newVal.point = point;
          this.setData({
            productInfo: newVal
          });
        };
      }
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
    }
  }
})
