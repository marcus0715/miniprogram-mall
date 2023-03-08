// components/shoppingCartList/index.js.ts
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
    _onClose(event) {
      var that = this
      const {
        position,
        instance
      } = event.detail;
      switch (position) {
        case 'left':
        case 'cell':
          instance.close();
          break;
        case 'right':
          wx.showModal({
            title: '删除',
            content: '是否从购物车中移除当前商品?',
            success(res) {
              if (res.confirm) {
                that.triggerEvent("onDelete", event.currentTarget.dataset.id)
                instance.close();
              } else if (res.cancel) {
                console.log('用户点击取消')
                instance.close();
              }
            }
          })
          break;
      }
    },
    _onNumberChnage(event) {
      this.triggerEvent("onAddShoppingNumber", {
        id: event.currentTarget.dataset.id,
        "number": event.detail
      })
    },
    _onClickRadio(event) {
      this.triggerEvent("onTriggerItem", event.currentTarget.dataset.item)
    },
  }
})