//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
console.log('==================================================================')
console.log('==================================================================')
    console.log(getCurrentPages())
    console.log(getCurrentPages()[0] === this)
console.log('==================================================================')
console.log('==================================================================')
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
