// pages/category/index.js
const interfaces = require("../../utils/urlconfig.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navLeftItems:[],
    navRightItems:[],
    curIndex:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const self = this;
    wx.showLoading({
      title: '加载中...',
    })
    wx.request({
      url: interfaces.productions,
      header:{
        "content-type":"application/json"
      },
      success(res){
        // console.log(res.data);
        self.setData({
          navLeftItems:res.data.navLeftItems,
          navRightItems:res.data.navRightItems
        })
        wx.hideLoading();
      }
      
    })
  },

  switchRightTab(e) {
    console.log(e);
    let index = parseInt(e.currentTarget.dataset.index);

    this.setData({
      curIndex: index
    })
 },

  showListView(e) {
    console.log(e);
    let txt = e.currentTarget.dataset.txt;
    console.log(txt);
    wx.navigateTo({
      url: '/pages/list/index?title=' + txt,
    })
  }


})