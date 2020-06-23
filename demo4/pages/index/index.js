Page({
  data:{
    msg:'ahahaha!'
  },
  inputHandle:function(e){
    // console.log(e)
    // console.log(e.target)
    // console.log(e.detail)
    // console.log(e.detail.value)
    // this.data.msg = e.detail.value
    // console.log(this.data.msg)
    this.setData({
      msg:e.detail.value
    })
    // this.setData({
    //   msg1:e.detail.value
    // })
    // console.log(this.data)
    // this.setData() 是用来改变data中的数据（如果没有，则会添加）
    // 它与直接赋值区别在于setData可以通知页面做出变化
    // 直接赋值没有办法实现这一点（早期的JS没办法，现在可以了）
  }
})
