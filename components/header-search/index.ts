// components/header-search.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    searchValue:""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event){
      this.setData({
        searchValue:event.detail
      })
    },
    onSearch(event){
      this.triggerEvent('search',event.detail)
    }
  }
})
