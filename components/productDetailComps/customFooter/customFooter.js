// components/customFooter/index.ts
import {addProductsToCart, changeShoppingNumber} from '../../../api/shoppingCartList';
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    productInfo: {
      type: {},
      value: {}
    },
    addCartCount: {
      type: Number,
      value: 0,
      observer: function (newVal, oldVal) {
        const cartNum = newVal;
        this.setData({
          cartCount: this.data.cartCount + cartNum
        });
        this.setData({
          addCartCount: 0
        });
      }
    },
    selectCount: {
      type: Number,
      value: 1,
    },
    selectcategory: {
      type: Object,
      value: {},
    },
    shoppingCartList: {
      type: [],
      value: []
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    cartCount: 0,
    addCartCount: 0
  },
  /**
   * 组件的方法列表
   */
  methods: {
    _addToShoppingCart: function() {
      const currentPro = this.data.productInfo;
      const requestData = {
        _id: this.data.selectcategory.sizeId,
        productId: currentPro._id,
        description: currentPro.description,
        openId: wx.getStorageSync('userInfo').openId,
        name: currentPro.productName,
        number: this.data.selectCount,
        price: this.data.selectcategory.price,
        originPrice: currentPro.originPrice ? currentPro.originPrice : '',
        tag: currentPro.tag ? currentPro.tag : '',
        thumbnailUrl: this.data.selectcategory.photo ? this.data.selectcategory.photo : '',
        size: this.data.selectcategory.category ? this.data.selectcategory.category : '',
      };
      let isAdded = false;
      let addNumber, addToShoppingCartCall;
      if (this.data.shoppingCartList.length > 0) {
        this.data.shoppingCartList.forEach(element => {
          if (element._id === requestData._id) {
            isAdded = true;
            addNumber= element.number;
          }
        });
      }
      if (isAdded) {
        const _id = requestData._id;
        addNumber = addNumber + requestData.number;
        addToShoppingCartCall = changeShoppingNumber(_id, addNumber);
      } else {
        addToShoppingCartCall = addProductsToCart(requestData);
      }
      addToShoppingCartCall.then((resp) => {
        wx.showToast({
          title: '已添加至购物车！',
          icon: 'success'
        },1500);
        if (!isAdded) {
          this.setData({
            cartCount: this.data.cartCount + 1
          });
        }
      }, (error)=>{
        if(error.errCode === -1){
          wx.showToast({
            title: '加入购物车失败！',
            icon: 'error'
          },1500);
        }
      });
    },
    _addToCart: function (e) {
      this._addToShoppingCart();
    },
    _enterCart: function (e) {
      wx.reLaunch({
        url: './../shoppingCart/shoppingCart',
      })
    }
  }
})
