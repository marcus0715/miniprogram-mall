// components/categoryList/index.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    categoryList: {
      type: Array,
      value: []
    },
    displayMode:{
      type: String,
      value: 'list'
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
    _enterDetail(e) {
      const productData = e.currentTarget.dataset.product;
      wx.navigateTo({
        url: '../productDetail/productDetail?id=' + productData._id
      })
    },
  }
})