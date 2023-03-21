// components/qrOverlay/index.js.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    base64:{
      type: String,
      value: ''
    },
    fileName:{
      type:String,
      value: ''
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
    _saveImage(){
      const self = this
      const fileManage = wx.getFileSystemManager()
      const filePath = wx.env.USER_DATA_PATH + '/qrcode_' + self.properties.fileName + '.png'
      fileManage.writeFile({
        filePath,
        data: self.properties.base64.slice(22),
        encoding: 'base64',
        success: res => {
          wx.saveImageToPhotosAlbum({
            filePath: filePath,
            success: function(res) {
              wx.showToast({
                title: '保存成功',
              })
            },
            fail: function(err) {
              wx.showToast({
                title: "保存失败",
                icon: "error"
              })
            }
          })
        },
        fail: err => {
          console.log(err)
        }
      })
    },
    _clickHide(){
      this.triggerEvent('closeModal')
    }
  }
})
