// pages/addressBook/addressBook.ts
import {getAddressBookInfo} from '../../api/addressBook';
import { rpxToPx } from '../../utils/util.js';

Page({

  /**
   * Page initial data
   */
  data: {
    currentTab: 0,
    addressType: "address1",
    tabItem: [],
    showContent: [],
    addressInfo: [],
    height: "100%"
  },
  switchNav: function (e) {
    const {current, type} = e.currentTarget.dataset
    var that = this;

    if (this.data.currentTab === current) {
        return false;
    } else {
        that.setData({
            currentTab: current,
            addressType: type
        });

        this.filterAdreessDate(type);
    }
  },
  swiperChange: function (e) {
    const currentIndex = e.detail.current;
    const currentType = this.data.tabItem[currentIndex].type;

    this.setData({
        currentTab: currentIndex,
        addressType: currentType
    });

    this.filterAdreessDate(currentType);
  },

  filterAdreessDate(type) {
    const {addressInfo} = this.data;
    const addressList = addressInfo.filter(item => item.type === type);

    // console.log('***addressList***', addressList);

    this.setData({
      addressList
    });
  },

  getContentHeight(res){
    const contentHeight = rpxToPx(res.detail.contentHeight);

    this.setData({
      height: contentHeight
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  async onLoad(option) {
    console.log('***received the parameter from the userCenter page****', option);
    const adressBookInfo = await getAddressBookInfo();
    const {addressInfo, item} = adressBookInfo;

    this.setData({
      tabItem: item,
      addressInfo
    });

    const {addressType} = this.data;

    this.filterAdreessDate(addressType);
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {

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