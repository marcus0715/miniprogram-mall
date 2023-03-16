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
        url: '../productDetail/productDetail',
        events: {
          productDataForDetail: function(data) {
            console.log(data)
          }
        },
        success: (res) => {
          res.eventChannel.emit('productDataForDetail', productData);
        }
      })
    },
  }
})