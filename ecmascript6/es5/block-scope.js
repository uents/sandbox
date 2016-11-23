"use strict";

var _loop = function _loop(i) {
  setTimeout(function () {
    console.log(i);
  }, i * 100);
};

// let
for (var i = 0; i < 5; i++) {
  _loop(i);
}

// const
var foo = 1;
console.log(foo);
//foo = 100; // エラー
//console.log(foo);
//const foo = 0; // エラー
//console.log(foo);