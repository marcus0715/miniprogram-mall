// pages/categoryList/index.ts
import {
  getImageUrl
} from '../../utils/tools'
import {getCategoryList} from '../../api/categoryList'
// import { categoryList } from '../../mockData/categoryList';


let app = getApp(),
  pageStart = 0;
let mockData = [];

Page({
  data: {
    isIphoneX: app.globalData.isIphoneX,
    requesting: false,
    end: false,
    emptyShow: false,
    page: pageStart,
    listData: [],
    enableBackToTop: false,
    refreshSize: 150,
    topSize: 200,
    bottomSize: 30,
    color: "#3F82FD",
    items: [{
        name: '蓝',
        value: '#3F82FD',
        checked: 'true'
      },
      {
        name: '红',
        value: '#ff4158'
      },
    ],
    empty: false,
    sortData: [{
        label: '名称',
        field: 'name',
        sort: '', // sort: "ASE" | "DESC" | ""
      },
      {
        label: '价格',
        field: 'price',
        sort: '',
      }
    ],
    displayMode: 'list',

    navHeight: '',
    menuButtonInfo: {},
    searchMarginTop: 0, // 搜索框上边距
    searchWidth: 0, // 搜索框宽度
    searchHeight: 0, // 搜索框高度,
    tapText: ''
  },
  goBack() {
    wx.navigateBack({
      delta: 1, // 回退前 delta(默认为1) 页面
    })
  },
  onLoad: function (options) {
    
  },
  itemClick(e) {
    console.log(e);
  },
  enableBackToTopChange(e) {
    this.setData({
      enableBackToTop: e.detail.value
    });
  },
  refreshChange(e) {
    this.setData({
      refreshSize: e.detail.value
    });
  },
  topChange(e) {
    this.setData({
      topSize: e.detail.value
    });
  },
  bottomChange(e) {
    this.setData({
      bottomSize: e.detail.value
    });
  },
  radioChange: function (e) {
    this.setData({
      color: e.detail.value
    });
  },
  emptyChange(e) {
    if (e.detail.value) {
      this.setData({
        listData: [],
        emptyShow: true,
        end: true
      });
    } else {
      this.setData({
        listData: mockData,
        emptyShow: false,
        end: false
      });
    }
  },
  getList(type, currentPage) {
    this.setData({
      requesting: true
    });

    wx.showNavigationBarLoading();

    // 模拟异步获取数据场景
    setTimeout(() => {
      this.setData({
        requesting: false
      });

      wx.hideNavigationBarLoading();

      if (type === 'refresh') {
        this.setData({
          listData: mockData,
          page: currentPage + 1
        });
      } else {
        this.setData({
          listData: this.data.listData.concat(mockData),
          page: currentPage + 1,
          end: false
        });
      }

    }, 1000);
  },
  // 刷新数据
  refresh() {
    this.getList('refresh', pageStart);
    this.setData({
      empty: false
    });
  },
  // 加载更多
  more() {
    this.getList('more', this.data.page);
  },
  onLoad() {
    this.setData({
      menuButtonInfo: wx.getMenuButtonBoundingClientRect()
    })
    //   console.log(this.data.menuButtonInfo)
    const {
      top,
      width,
      height,
      right
    } = this.data.menuButtonInfo
    wx.getSystemInfo({
      success: (res) => {
        const {
          statusBarHeight
        } = res
        const margin = top - statusBarHeight
        this.setData({
          navHeight: (height + statusBarHeight + (margin * 2)),
          searchMarginTop: statusBarHeight + margin, // 状态栏 + 胶囊按钮边距
          searchHeight: height, // 与胶囊按钮同高
          searchWidth: right - width // 胶囊按钮右边坐标 - 胶囊按钮宽度 = 按钮左边可使用宽度
        })
      },
    })
    getCategoryList().then(resp => {
      mockData = resp.result ? resp.result : resp;
      mockData.forEach(element => {
        element.url = getImageUrl(300, 300);
      });
      this.getList('refresh', pageStart);
    })
  },
  onSort(option) {
    const tempData = mockData.reverse();
    this.setData({
      listData: tempData,
      page: pageStart + 1
    });
  },
  onModeChange(e) {
    wx.pageScrollTo({
      scrollTop: 0
    })
    this.setData({
      displayMode: e.detail
    });
  },
  changeValue(e){
    const detail = e.detail
    let results = []
    for (let v = 0; v < mockData.length; v++) {
      const element = mockData[v];
      const temp = element.title + element.description + element.price
      if (temp.indexOf(detail) > -1) {
        results.push(element)
      }
    }
    this.setData({
      tapText: e.detail,
      listData: results
    });
  }
});