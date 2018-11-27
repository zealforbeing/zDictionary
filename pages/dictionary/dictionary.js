// pages/dictionary/dictionary.js

import { CET4Util } from '../../utils/dictionary/CET4Util'

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
    // cet4Util.init();
    this.onChange();
  },

  /**
   * 更新单词
   */
  onChange: function() {
    var that = this;
    CET4Util.getRandomWord(function(obj) {
      console.log(obj);
      that.setData({
        word: obj,
        wordLength: obj.word.length,
        inputValue: '',
      });
    });
    
  },

  /**
   * 监听输入框文字变化
   */
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

  /**
   * 单击输入框
   */
  onTap: function() {
    var that = this;
    that.setData({
      isFocus: true,
    });
  },

  /**
   * 偷看答案
   */
  onPeep: function() {
    var that = this;
    wx.showModal({
      title: that.data.word.word + " [" + that.data.word.phonetic + "]",
      content:  that.data.word.definition,
      showCancel: false,
      success: function (res) {
      }
    })
  },
})