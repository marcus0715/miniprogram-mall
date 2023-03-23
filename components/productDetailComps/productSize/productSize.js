// components/productDetailComps/productSize/productSize.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    sizeList: {
      type: Array,
      value: [],
      observer: function (newVal, oldVal) {
        if (newVal.length > 0) {
          const selectedItem = this.data.sizeList[0];
          this.data.sizeList.forEach(element => {
            if (element.category == selectedItem.category) {
              element.selected = true;
            }
          });
          this.setData({
            sizeList: this.data.sizeList,
            selectItem: selectedItem
          });
        }
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    sizeList: [],
    selectItem: {}
  },

  /**
   * 组件的方法列表
   */
  lifetimes: {
    created: function (e) {
      
    }
  },
  methods: {
    _selectCurrent: function (e) {
      const selected = e.currentTarget.dataset.select;
      this.data.sizeList.forEach(element => {
        element.selected = false;
        if (element.category == selected.category) {
          element.selected = true;
          selected.selected = true;
        }
      });
      this.setData({
        sizeList: this.data.sizeList,
        selectItem: selected
      });
    },
    _addToCart: function (e) {
      this.triggerEvent('addcartevent', this.data.selectItem);
    }
  }
})
