// components/sortColumns/index.ts

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    sortItems:{
      type: Array,
      value: [
        {
          label: '名称',
          field: 'name',
          sort: '', // sort: "ASE" | "DESC" | ""
        },
        {
          label: '价格',
          field: 'price',
          sort: '',
        }
      ]
    },
    displayMode: 'list', // mode: 'list' | 'grid'
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentSortItems:[],
    currentDisplayMode: ''
  },

  observers: {
    sortItems(sortItems){
      this.setData({
        currentSortItems: [...sortItems]
      })
    },
    displayMode(displayMode){
      this.setData({
        currentDisplayMode: displayMode
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    sort(event){
      const { dataset } = event.currentTarget
      if(dataset && dataset.item){
        const newSortItems = this.data.currentSortItems.map(item=> item.field === dataset.item.field ? {...item, sort: item.sort === 'ASE' ? 'DESC' : 'ASE'} : {...item, sort: ''})
        this.setData({
          currentSortItems: newSortItems
        })
        this.triggerEvent("onSort", newSortItems.find(item => item.field === dataset.item.field))
      }
    },
    changeMode(){
      const currentMode = this.data.currentDisplayMode === 'list' ? 'grid' : 'list'
      this.setData({
        currentDisplayMode: currentMode
      })
      this.triggerEvent("onModeChange", currentMode)
    }
  }
});
