"use strict";

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// IterableとIterator
var arr = ["foo", "bar"];
var iterator = arr[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log("---");

// for/of文
var iter = [1, 2, 3];
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = iter[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var i = _step.value;

    console.log(i);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

console.log("---");

// スプレッドオペレータ
var arr = [].concat(_toConsumableArray("foo"));
console.log(arr);

// 分割代入

var _ecma = "ecma",
    _ecma2 = _toArray(_ecma),
    c1 = _ecma2[0],
    c2 = _ecma2[1],
    rest = _ecma2.slice(2);

console.log(c1, c2, rest);