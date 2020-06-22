Page({
  funtap: function (e) {
    console.log(12321)
    console.dir(e)
  },
  funin: function () {
    console.log('in')
  },
  funout: function () {
    console.log('out')
  },
  funtap1:function(e){
    console.log(e.target.dataset)
  },
  funtap2:function(e){
    console.log(e.target.dataset)
    // 这里的 e.target 拿到的就是点击的元素的集合
    // dataset指的是元素上所有以data-开头的属性
    // console.log(this)
    // 事件处理函数中的this指向的是当前页面对象！！！！跟HTML中的不一样！！！！！！！！
  }
})