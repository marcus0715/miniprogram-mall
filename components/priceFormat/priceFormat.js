// components/priceFormat/priceFormat.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    priceInfo: {
      type: String,
      value: '',
      observer: function(newVal, oldVal) {
        let price, dollar, point;
        if (newVal.length > 0) {
          price = newVal.split('.');
          dollar = price[0];
          point = price[1];
          this.setData({
            priceDollar: dollar,
            pricePoint: point
          });
        };
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    priceDollar: '',
    pricePoint:''
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
