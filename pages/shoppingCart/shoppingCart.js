// pages/shoppingCart/shoppingCart.ts
import { getImageUrl } from '../../utils/tools';
import { formatTime } from '../../utils/util.js';
import { getShoppingCartList, changeShoppingNumber, removeShoppingCartItem } from '../../api/shoppingCartList';
import { addToOrderList } from '../../api/orderList';


Page({

  /**
   * 页面的初始数据
   */
  data: {
    totalPrice: 0,
      list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad() {
    this.getShoppingCartList();
  },
  async deleteItem(event){
    const { id } = event.detail;
    const result = await removeShoppingCartItem(id);
    if(result){
      this.getShoppingCartList();
      const newList = this.data.list.filter(item => item.id !== event.detail)
      this.setData({
        list:newList,
        totalPrice: this.calcTotalPrice(newList)
      })
    }
  },
  async changeShoppingNumber(event){
    const {id, number} = event.detail
    const result = await changeShoppingNumber(id, number);

    if(result){
      this.getShoppingCartList();
      const newList = this.data.list.map(item=> {return item.id === id ? {...item, number} : item})
      this.setData({
        list: newList,
        totalPrice: this.calcTotalPrice(newList)
      })
    }
  },
  changeShoppingSelect(event){
    const {_id: id} = event.detail;
    const newList = this.data.list.map(item=> {return item._id === id ? {...item, isSelected: !item.isSelected} : item})
      this.setData({
        list: newList,
        totalPrice: this.calcTotalPrice(newList)
      })
  },
  async onSubmit(){
    const { list, totalPrice } = this.data
    const getPurchasedGoods = list && list.filter(item => item.isSelected);

    if (getPurchasedGoods.length  === 0) {
      wx.showToast({
        title: '您还没有选择商品哦！',
        icon: 'none',
        duration: 2000
      })
    } else {
      // console.log('***list***', list);
      const orderDate = formatTime(new Date()).replace(/\//g, '-').split(" ")[0];
      const orderCount = getPurchasedGoods && getPurchasedGoods.reduce((total, cur) => total + cur.number, 0);
      const ordersIdArray = getPurchasedGoods && getPurchasedGoods.map(item => item._id);
      let merchDetail = [];

      getPurchasedGoods.map(item => {
        const carrier = ["京东", "淘宝", "唯品会", "天猫", "拼多多"];
        const randomGenerateCarrier = carrier[Math.floor(Math.random() * carrier.length)];
        const obj = {
          id: item._id,
          carrier: randomGenerateCarrier,
          deliverCount: 0, // 已发货的数量
          merchCategory: "控制器",
          merchName: item.name,
          noDeliverCount: item.number, // 未发货的数量
          orderCount: item.number, // 订购的数量
          predictDate: orderDate,
          waybillNumber: Math.floor(Math.random() * 1000000000000),
          merchStatus: "待处理"
        }
        merchDetail.push(obj);
      });

      const orderInfo = {
        openId: wx.getStorageSync('userInfo').openId,
        orderNumber: Math.floor(Math.random() * 10000000000),
        PONumber: `Q-${Math.floor(Math.random() * 10000)}`,
        deliveryAddress: "中国四川成都市金牛区金府路669号20栋2层1号",
        discount: "20%",
        merchDetail,
        orderCompany: "成都恒昕源节能科技有限公司",
        orderCount,
        orderDate,
        totalPrice
      }

      addToOrderList(orderInfo).then((resp) => {
        wx.showToast({
          title: '购买成功！',
          icon: 'success'
        }, 1500);
        removeShoppingCartItem(ordersIdArray).then(res => {
          this.getShoppingCartList();
        });
      }, (error)=>{
        if(error.errCode === -1){
          wx.showToast({
            title: '网络不稳定，请稍后再试',
            icon: 'error'
          },1500);
        }
      });
    }
  },
  calcTotalPrice(list){
    let totalPrice = 0;
    for(let i = 0; i < list.length; i++){
      if(list[i].isSelected){
        totalPrice +=list[i].price * list[i].number;
      }
    }

    return totalPrice;
  },

  async getShoppingCartList() {
    const getOpenId = wx.getStorageSync('userInfo')?.openId;
    const list = await getShoppingCartList(getOpenId).catch(res => {
      if(res.errCode === 1001){
        wx.showModal({
          title: '请求失败',
          content: '用户未登录，请前往登录!',
          showCancel: false,
          complete: (res) => {
            if (res.confirm) { 
              wx.switchTab({
                url: '../userCenter/index',
              })
            }
          }
        })
      }
    });

    const hasList = list && list.result;
    if (hasList) {
      const newList = list && list.result.map(item=> {return {...item, isSelected: true}});
      let totalPrice = this.calcTotalPrice(newList);

      this.setData({
        list: newList,
        totalPrice
      })
    }
  },
  onTabItemTap() {
    this.getShoppingCartList();
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    // console.log('***进入到了购物车页面***')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})