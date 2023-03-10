
Component({
  data: {
    array: [{
      "id": 1,
      "icon": "location-o",
      "text": "通讯簿"
    }, {
      "id": 2,
      "icon": "underway-o",
      "text": "客户仪表板"
    }]
  },
  methods: {
    onTap: (event) => {
      const { item } = event.currentTarget.dataset;
      console.log('onTap: ', item);
      if (!item) {
        return;
      }
      switch(item) {
        case 1:
          // wx.showToast({
          //   title: '通讯簿, 在开发中...',
          //   icon: 'none',
          //   duration: 2000
          // });
          wx.navigateTo({
            url: `/pages/addressBook/addressBook?userId=${item}`
          });
          break;
        case 2:
          wx.showToast({
            title: '客户仪表盘, 正在开发中...',
            icon: 'none',
            duration: 2000
          });
          break;
        default:
          return;
      }
    }
  }
})