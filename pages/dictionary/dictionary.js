// pages/dictionary/dictionary.js
var cet4Util = require("../../utils/dictionary/cet4Util.js");

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
    cet4Util.init();
    this.onChange();
  },

  onChange: function() {
    var that = this;
    cet4Util.randomWord(function(obj) {
      console.log(obj);
      that.setData({
        word: obj,
        wordLength: obj.word.length,
        inputValue: '',
      });
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