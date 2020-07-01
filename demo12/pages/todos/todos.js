// pages/todos/todos.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    input: '',
    todos: [
      { name: 'HTML', completed: true },
      { name: 'CSS', completed: false },
      { name: 'JS', completed: false },
    ],
    leftCount: 2
  },
  addHandle: function () {
    if (!this.data.input) return
    var todos = this.data.todos
    todos.push({ name: this.data.input, completed: false })
    this.setData({
      todos: todos,
      input: '',
      leftCount: this.data.leftCount + 1
    })
  },
  inputChangeHandle: function (e) {
    this.setData({
      input: e.detail.value
    })
  },
  toggleTodoHandle: function (e) {
    // console.log(e.currentTarget)
    // this.data.todos[e.currentTarget.dataset.index].completed = !this.data.todos[e.currentTarget.dataset.index].completed
    var item = this.data.todos[e.currentTarget.dataset.index]
    item.completed = !item.completed
    var leftCount = this.data.leftCount + (item.completed ? -1 : 1)
    this.setData({
      todos: this.data.todos,
      leftCount: leftCount
    })
  },
  removeTodoHandle(e) {
    var todos = this.data.todos
    todos.splice(e.currentTarget.dataset.index, 1)
    this.setData({
      todos: todos
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})