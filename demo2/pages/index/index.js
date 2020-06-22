//index.js
//获取应用实例
Page({
  // data:为页面提供数据
  // data就是界面和逻辑之间的桥梁
  data: {
    msg:'Hello world!',
    person:{
      name:'zs',
      age:18
    },
    viewClassName:'hello',
    todos:[
      {name:'JS',completed:false},
      {name:'HTML',completed:true},
      {name:'CSS',completed:false}
    ],
    item:'我是item'
  },
  funtap:function(e){
    console.log(12321)
    console.dir(12321)
    console.dir(e)
  }
})