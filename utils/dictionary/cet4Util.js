
var data = {};

function init(){
  var charCode = 'a'.charCodeAt(0);
  var chatList = [];
  for (let index = 0; index < 26; index++) {
    var key = String.fromCharCode(charCode + index);
    chatList.push(key);
  }

  chatList.forEach(element => {
    data[element] = require("../../resource/cet4/" + element + ".js").data;
  });
}

function randomWord(callback) {
  var charCode = parseInt(Math.random() * 100 % 26) + 'a'.charCodeAt(0);
  var list = data[ String.fromCharCode(charCode) ];
  var length = list.length;
  var sub = parseInt(Math.random() * Math.pow(10, length) % length);
  callback(list[sub]);
}

module.exports = {
  data: data,
  init: init,
  randomWord: randomWord,
}


