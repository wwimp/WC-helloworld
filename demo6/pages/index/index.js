Page({
  data: {
    show: false
  },
  btn: function () {
    // this.data.show = !this.data.show 这种方法无法通知页面
    this.setData({show:!this.data.show})
    // console.log(this.data.show)
  }
})
