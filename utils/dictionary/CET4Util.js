
/**
 * 词汇数据工具类
 */
export class CET4Util {
  /**
   * 词汇数据
   */
  data = {};

  static getInstance() {
    if (!CET4Util.instance) {
      CET4Util.instance = new CET4Util();
    }
    return CET4Util.instance;
  }

  constructor() {
    this.init();
  }

  /**
   * 初始化词汇数据
   */
  init() {
    var charCode = 'a'.charCodeAt(0);
    var chatList = [];
    for(let index = 0; index< 26; index++) {
      var key = String.fromCharCode(charCode + index);
      chatList.push(key);
    }

    chatList.forEach(element => {
      this.data[element] = require("../../resource/cet4/" + element + ".js").data;
    });
  }

  /**
   * 获取随机数据
   */
  randomWord(callback) {
    var charCode = parseInt(Math.random() * 100 % 26) + 'a'.charCodeAt(0);
    var list = this.data[String.fromCharCode(charCode)];
    var length = list.length - 1;
    var sub = 0;
    if (length > 0) {
      //总共4000多个单词，这里用10000求模
      sub = parseInt(Math.random() * 10000 % length);
    }
    console.log(String.fromCharCode(charCode), sub);
    callback(list[sub]);
  }

  static getRandomWord(callback) {
    CET4Util.getInstance().randomWord(callback);
  }
}

