// components/orderDetail/index.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    merchDetail: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    _showMerchDetail: function(e) {
      const currentMerchId = e.currentTarget.dataset.merchid;
      const merchDetail = this.data.merchDetail;
      for (let i = 0; i < merchDetail.length; i++) {
        const checkId = merchDetail[i].merchId;
        if (currentMerchId == checkId) {
          merchDetail[i].showDetail = !merchDetail[i].showDetail;
        }
      }
      this.setData({
        merchDetail: merchDetail
      });
      this.data.merchDetail = merchDetail;
    }
  }
})
