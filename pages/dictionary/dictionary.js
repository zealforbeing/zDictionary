// pages/dictionary/dictionary.js

var dictionaryJSON = require("../../resource/dictionaryJSON.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    word : null,
    wordLength: 6,    //输入框个数
    inputValue: "",   //输入的内容
    isFocus: true,    //聚焦
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("dictionary.js onLoad");
    this.onChange();
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

  },

  onChange: function() {
    var cet4 = dictionaryJSON.data.cet4;
    var obj = cet4[parseInt(Math.random() * 100000 % cet4.length)];
    console.log(obj);
    this.setData({
      word: obj,
      wordLength : obj.word.length,
      inputValue : '',
    });
  },

  onFocus: function(e) {
    var that = this;
    console.log(e.detail.value);
    var inputValue = e.detail.value;

    that.setData({
      inputValue : inputValue,
    });
    if (inputValue.length === this.data.wordLength) {
      if (inputValue === this.data.word.word) {
        wx.showToast({
          title: "恭喜答对了",
        });
        this.onChange();
      }
      else {
        wx.showToast({
          title: '没对喔，再仔细想想',
          icon: 'none',
        });
      }
    }
  },

  onTap: function() {
    var that = this;
    that.setData({
      isFocus: true,
    });
  },
})