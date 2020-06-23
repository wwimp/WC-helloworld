/* 
  1.设计数据结构
  2.将数据绑定到特定元素上
  3.登陆按钮的点击事件（具体的登录逻辑）
*/
// Page({
//   data: {
//     username: 'admin',
//     password: '123',
//   },
//   usernameChangeHandle: function (e) {
//     // console.log(e)
//     // this.data.username = e.detail.value 不要用这种方法，因为界面层无法得知
//     this.setData({
//       username:e.detail.value
//     })
//   },
//   passwordChangeHandle: function (e) {
//     // console.log(e)
//     // this.data.password = e.detail.value 不要用这种方法，因为界面层无法得知
//     this.setData({
//       password:e.detail.value
//     })
//   },
//   // 用于处理登录按钮的点击事件
//   loginHandle: function () {
//     // console.log(123)
//     console.log(this.data)
//     // TODO：完成逻辑
//     // 1.获取输入框输入的内容

//     // 2.根据输入的值进行判断

//     // 3.根据判断结果做出响应

//   }
// })

// Page({
//   data: {
//     username: 'admin',
//     password: '123',
//   },
//   inputChangeHandle: function (e) {
//     var prop = e.target.dataset['prop']
//     console.log(prop)
//     var changed = {}
//     console.log(changed)
//     changed[prop] = e.detail.value
//     console.log(changed)
//     this.setData(changed)
//   },
//   loginHandle: function () {
//     console.log(this.data)
//   }
// })


Page({
  data: {
    username: 'admin',
    password: '123',
  },
  loginHandle: function (e) {
    console.log(e)
  }
})
