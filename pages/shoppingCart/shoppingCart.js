// pages/shoppingCart/shoppingCart.ts
import {getShoppingCartList, deleteShoppingCartItem, addShoppingNumber} from '../../api/shoppingCartList'
Page({

  /**
   * 页面的初始数据
   */
  data: {
      totalPrcie: 0,
      list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad() {
    const list = await getShoppingCartList()
    const newList = list.map(item=> {return {...item, isSelected: true}})
    let totalPrcie = this.calcTotlaPrice(newList)
    this.setData({
      list: newList,
      totalPrcie
    })
  },
  async deleteItem(event){
    const result = await deleteShoppingCartItem(event.detail)
    if(result){
      const newList = this.data.list.filter(item => item.id !== event.detail)
      this.setData({
        list:newList,
        totalPrcie: this.calcTotlaPrice(newList)
      })
    }
  },
  async addShoppingNumber(event){
    const {id, number} = event.detail
    const result = await addShoppingNumber(id, number)
    if(result){
      const newList = this.data.list.map(item=> {return item.id === id ? {...item, number} : item})
      this.setData({
        list: newList,
        totalPrcie: this.calcTotlaPrice(newList)
      })
    }
  },
  changeShoppingSelect(event){
    const {id} = event.detail
    const newList = this.data.list.map(item=> {return item.id === id ? {...item, isSelected: !item.isSelected} : item})
      this.setData({
        list: newList,
        totalPrcie: this.calcTotlaPrice(newList)
      })
  },
  onSubmit(){
    wx.showToast({
      title: '提交订单, 待开发...',
      icon: 'none',
      duration: 2000
    })    
  },
  calcTotlaPrice(list){
    let totalPrcie = 0
    for(let i = 0; i< list.length; i++){
      if(list[i].isSelected){
        totalPrcie +=list[i].price * list[i].number 
      }
    }
    return totalPrcie * 100
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