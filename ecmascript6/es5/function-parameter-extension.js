"use strict";

// デフォルトパラメータ
function add() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

  return a + b;
}

console.log(add()); //=> 3
console.log(add(0)); //=> 2
console.log(add(0, 0)); //=> 0

// レストパラメータ
function foo(first, second) {
  console.log("first:", first);
  console.log("second:", second);

  for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    rest[_key - 2] = arguments[_key];
  }

  console.log("rest:", rest);
}

foo(1, 2, 3, 4, 5);