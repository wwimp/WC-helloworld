// -----------------button---------------------
// const types = ['default', 'primary', 'warn']
// const pageObject = {
//   data: {
//     defaultSize: 'default',
//     primarySize: 'default',
//     warnSize: 'default',
//     disabled: false,
//     plain: false,
//     loading: false
//   },

//   onShareAppMessage() {
//     return {
//       title: 'button',
//       path: 'page/component/pages/button/button'
//     }
//   },

//   setDisabled() {
//     this.setData({
//       disabled: !this.data.disabled
//     })
//   },

//   setPlain() {
//     this.setData({
//       plain: !this.data.plain
//     })
//   },

//   setLoading() {
//     this.setData({
//       loading: !this.data.loading
//     })
//   },
  
//   handleContact(e) {
//     console.log(e.detail)
//   },

//   handleGetPhoneNumber(e) {
//     console.log(e.detail)
//   },

//   handleGetUserInfo(e) {
//     console.log(e.detail)
//   },

//   handleOpenSetting(e) {
//     console.log(e.detail.authSetting)
//   },

//   handleGetUserInfo(e) {
//     console.log(e.detail.userInfo)
//   }
// }

// for (let i = 0; i < types.length; ++i) {
//   (function (type) {
//     pageObject[type] = function () {
//       const key = type + 'Size'
//       const changedData = {}
//       changedData[key] =
//         this.data[key] === 'default' ? 'mini' : 'default'
//       this.setData(changedData)
//     }
//   }(types[i]))
// }

// Page(pageObject)

// -----------------checkbox---------------------
// Page({
//   onShareAppMessage() {
//     return {
//       title: 'checkbox',
//       path: 'page/component/pages/checkbox/checkbox'
//     }
//   },

//   data: {
//     items: [
//       {value: 'USA', name: '美国'},
//       {value: 'CHN', name: '中国', checked: 'true'},
//       {value: 'BRA', name: '巴西'},
//       {value: 'JPN', name: '日本'},
//       {value: 'ENG', name: '英国'},
//       {value: 'FRA', name: '法国'}
//     ]
//   },

//   checkboxChange(e) {
//     console.log('checkbox发生change事件，携带value值为：', e.detail.value)

//     const items = this.data.items
//     const values = e.detail.value
//     for (let i = 0, lenI = items.length; i < lenI; ++i) {
//       items[i].checked = false

//       for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
//         if (items[i].value === values[j]) {
//           items[i].checked = true
//           break
//         }
//       }
//     }

//     this.setData({
//       items
//     })
//   }
// })


// -----------------form---------------------
Page({
  onShareAppMessage() {
    return {
      title: 'form',
      path: 'page/component/pages/form/form'
    }
  },

  data: {
    pickerHidden: true,
    chosen: ''
  },

  pickerConfirm(e) {
    this.setData({
      pickerHidden: true
    })
    this.setData({
      chosen: e.detail.value
    })
  },

  pickerCancel() {
    this.setData({
      pickerHidden: true
    })
  },

  pickerShow() {
    this.setData({
      pickerHidden: false
    })
  },

  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },

  formReset(e) {
    console.log('form发生了reset事件，携带数据为：', e.detail.value)
    this.setData({
      chosen: ''
    })
  }
})