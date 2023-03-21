// pages/category/index.ts
import {getImageUrl} from '../../utils/tools'
import {getCategoryLevel, getCategory} from '../../api/category'
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
    this.loadCategories(this.data.activeThirdCategory._id, event.detail)
  },
  onTabChange(event) {
    const activeFirstCategoryName = event.currentTarget.dataset.name
    const activeFirstCategory = this.data.classification.find(category => category._id === activeFirstCategoryName)
    const activeSecondCategory = activeFirstCategory.kinds[0]
    const activeThirdCategory = activeSecondCategory.kinds[0]
    this.setData({
      activeFirstCategory,
      activeSecondCategory,
      activeThirdCategory
    })
    this.loadCategories(activeThirdCategory ?  activeThirdCategory._id : '')
  },
  onSecondCategoryChange(event) {
    const activeSecondCategory = this.data.activeFirstCategory.kinds.find(category => category._id === event.detail.name)
    const activeThirdCategory = activeSecondCategory.kinds[0]
    this.setData({
      activeSecondCategory,
      activeThirdCategory
    })

    this.loadCategories(activeThirdCategory ?  activeThirdCategory._id : '')
  },
  onThirdCategoryChange(event){
    const leftMenuActiveKey = event.detail
    const activeThirdCategory = this.data.activeSecondCategory.kinds[leftMenuActiveKey]
    this.setData({
      leftMenuActiveKey,
      activeThirdCategory,
      categories:[]
    })
    this.loadCategories(activeThirdCategory._id)
  },

  async loadCategories(activeThirdCategoryId, searchVal=''){
    let newCategories = []
    if(activeThirdCategoryId){
      const list = await getCategory({pid: activeThirdCategoryId, searchVal})
      newCategories = list.result.map(item => {return {...item, imgSrc: getImageUrl(300, 300)}})
    }
    this.setData({
      categories:newCategories
    })
  },


  async loadClassifications(){
    const classification = await (await getCategoryLevel()).result
    const activeThirdCategory = classification[0].kinds[0].kinds [0]
    this.setData({
        classification,
        activeFirstCategory: classification[0],
        activeSecondCategory: classification[0].kinds[0],
        activeThirdCategory:activeThirdCategory
      })
      this.loadCategories(activeThirdCategory._id)
  },
  loadMoreCategories(event){
    console.log('event',event)
    //this.loadCategories()
  },
  enterProducts(event) {
    console.log(event.currentTarget.dataset.product._id)
    wx.navigateTo({
      url: '../categoryList/index'
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