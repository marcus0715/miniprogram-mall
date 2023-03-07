// components/searchBar/index.ts
Component({
  /**
   * Component properties
   */
  properties: {
    navHeight: {
      type: String,
      value: ''
    },
    searchMarginTop: {
      type: Number,
      value: 0
    },
    searchHeight: {
      type: Number,
      value: 0
    },
    searchWidth: {
      type: Number,
      value: 0
    },
    menuButtonInfo:{
      type: Object,
      value: {}
    },
    tapText:{
      type: String,
      value: ''
    }
  },

  /**
   * Component initial data
   */
  data: {
    tapText: ''
  },
  /**
   * Component methods
   */
  methods: {
    changeValue(e){
      this.setData({
        tapText:e.detail
      });
      this.triggerEvent('changeValue', this.data.tapText)
    }
  }
})