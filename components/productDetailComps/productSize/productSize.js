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
          let price, dollar, point;
          const selectedItem = this.data.sizeList[0];
          price = selectedItem.price;
          price = price.split('.');
          dollar = price[0];
          point = price[1];
          selectedItem.dollar = dollar;
          selectedItem.point = point;
          this.setData({
            selectItem: selectedItem
          });
          this.data.sizeList.forEach(element => {
            if (element.catagory == selectedItem.catagory) {
              element.selected = true;
              element.number = this.data.steperNum;
            }
          });
          this.setData({
            sizeList: this.data.sizeList
          });
        }
      }
    },
    addCartCount: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    steperNum: 1,
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
        if (element.catagory == selected.catagory) {
          element.selected = true;
          element.number = this.data.steperNum;
        }
      });
      this.setData({
        sizeList: this.data.sizeList,
        selectItem: selected
      });
    },
    _sizeCount: function (e) {
      const currentSelect = this.data.selectItem;
      currentSelect.number = e.detail;
      this.setData({
        selectItem: currentSelect
      });
    },
    _addToCart: function (e) {
      this.triggerEvent('addcartevent', this.data.selectItem);
    }
  }
})
