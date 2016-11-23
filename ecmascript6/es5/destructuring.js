"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// 配列の分割代入
var year = 2016,
    month = 12,
    day = 31;

console.log(year, month, day);

// さらに2番目の値だけを代入
var _ref = [2015, 1, 1],
    month = _ref[1];

console.log(year, month, day);

// レストパラメータの活用
var year = 2014,
    monthDay = [4, 1];

console.log(year, monthDay);

// 値の交換に便利
var x = 1,
    y = 2;
var _ref2 = [y, x];
x = _ref2[0];
y = _ref2[1];

console.log(x, y);

// オブジェクトの分割代入
var _name$age = { name: "Bob", age: 20 },
    a = _name$age.name,
    b = _name$age.age;

console.log(a, b);

// プロパティ省略記法を使った分割代入
var _name$age2 = { name: "John", age: 20 },
    name = _name$age2.name,
    age = _name$age2.age;

console.log(name, age);

// デフォルト値の設定
var _name = { name: "Tom" },
    name = _name.name,
    _name$age3 = _name.age,
    age = _name$age3 === undefined ? 18 : _name$age3;

console.log(name, age);

// ネストしたオブジェクトからの抽出

var _foo = { foo: { bar: [1, 2, 3] } },
    _foo$foo$bar = _slicedToArray(_foo.foo.bar, 2),
    x = _foo$foo$bar[1];

console.log(x);

// 変数への分割代入
var regex = /(\d{4})(\d{2})(\d{2})/;
var date = regex.exec("20161122");
console.log(date[1], date[2], date[3]);

// 関数引数での分割代入
function foo(_ref3) {
  var a = _ref3.a,
      b = _ref3.b;

  console.log(a, b);
}
foo({ a: 1, b: 2 });