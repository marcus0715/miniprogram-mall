// pages/category/index.ts
import {getCategories,getClassifications} from './service'
Page({

  /**
   * Page initial data
   */
  data: {
    activeFirstCategory: null,
    activeSecondCategory: null,
    activeThirdCategory: null,
    leftMenuActiveKey:0,
    categoryScrollTop:0,
    categories:[],
    classification: []
  },
  onSearch(event) {
    console.log('searchValue', event.detail)
  },
  onTabChange(event) {
    console.log('event', event)
    const activeFirstCategoryName = event.currentTarget.dataset.name
    const activeFirstCategory = this.data.classification.find(category => category.key === activeFirstCategoryName)
    const activeSecondCategory = activeFirstCategory.children[0]
    const activeThirdCategory = activeSecondCategory.children[0]
    this.setData({
      activeFirstCategory,
      activeSecondCategory,
      activeThirdCategory
    })
  },
  onSecondCategoryChange(event) {
    const activeSecondCategory = this.data.activeFirstCategory.children.find(category => category.key === event.detail.name)
    const activeThirdCategory = activeSecondCategory.children[0]
    this.setData({
      activeSecondCategory,
      activeThirdCategory
    })
  },
  onThirdCategoryChange(event){
    console.log('event',event.detail)
    const leftMenuActiveKey = event.detail
    const activeThirdCategory = this.data.activeSecondCategory.children[leftMenuActiveKey]
    this.setData({
      leftMenuActiveKey,
      activeThirdCategory,
      categories:[]
    })
    this.loadCategories(leftMenuActiveKey)
  },

  loadCategories(activeThirdCategoryId){
    getCategories({},true).then((categories)=>{
      this.setData({
        categories:this.data.categories.concat(categories)
      })
    })
  },


  loadClassifications(){
    getClassifications({}, true).then((classification)=>{
      const activeThirdCategory = classification[0].children[0].children[0]
      this.setData({
        classification,
        activeFirstCategory: classification[0],
        activeSecondCategory: classification[0].children[0],
        activeThirdCategory:activeThirdCategory
      })
      this.loadCategories(activeThirdCategory.id)
    })
  },
  loadMoreCategories(event){
    console.log('event',event)
    this.loadCategories()
  },
  enterDetail(e) {
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

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(){
    this.loadClassifications()
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {
    console.log(this.data)
  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {

  }
})