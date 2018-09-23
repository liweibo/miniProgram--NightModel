App({
  onLaunch: function () {
    console.log('App Launch')
    this.getSkin()
    this.getReals()
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
  globalData: {
   
    skin: '', //默认是白天模式
    reals: false,
  },

  getSkin: function () {
    // console.log('App getSkin------------------------')
    // console.log('App getSkin------------------------')
    // console.log('App getSkin------------------------')
    var that = this
    wx.getStorage({
      key: 'skin',
      success: function (res) {
        that.globalData.skin = res.data
      }
    })
  },

  getReals: function () {
    // console.log('App getSkin------------------------')
    // console.log('App getSkin------------------------')
    // console.log('App getSkin------------------------')
    var that = this
    wx.getStorage({
      key: 'reals',
      success: function (res) {
        that.globalData.reals = res.data
      }
    })
  },

});