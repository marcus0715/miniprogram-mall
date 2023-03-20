// components/productDetailComps/productSelected/index.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    productInfo: {
      type: Object,
      value: {},
      observer: function (newVal, oldVal) {
        if (Object.keys(newVal).length > 0) {
          this.setData({
            selectCatagory: this.data.productInfo.size[0].catagory
          });
        }
      }
    },
    selectCatagory: {
      type: String,
      value: ''
    },
    selectCount: {
      type: Number,
      value: 1
    },
    showAddrs: {
      type: Boolean,
      value: false
    },
    showSize: {
      type: Boolean,
      value: false
    }
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    selectCatagory: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _productCount: function (e) {
      this.setData({
        selectCount: e.detail
      });
    },
    _showAddrList: function (e) {
      this.setData({
        showAddrs: true
      });
    },
    _showSizeList: function (e) {
      this.setData({
        showSize: true
      });
    }
  }
})
