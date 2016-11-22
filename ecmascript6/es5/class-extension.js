"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* Map */
console.log("--- Map ---");

// コンストラクタ
var map = new Map();
map.set("key1", "value1");
console.log(map.get("key1"));
console.log(map.has("key1"));

map.delete("key1");
console.log(map.has("key1"));

console.log("---");

// 一括設定
var map2 = new Map([["k1", "v1"], ["k2", "v2"]]);
console.log(map2.size);
map2.clear();
console.log(map2.size);

console.log("---");

// MapはIterable
var m = new Map([["k1", "v1"], ["k2", "v2"]]);
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = m[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var _step$value = _slicedToArray(_step.value, 2),
        k = _step$value[0],
        _v = _step$value[1];

    console.log(k, _v);
  }

  /* Set */
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

console.log("--- Set ---");

var s = new Set(["v1", "v2"]);
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = s[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var _v2 = _step2.value;

    console.log(_v2);
  }

  /* WeakMap & WeakSet */
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2.return) {
      _iterator2.return();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

console.log("--- WeekMap & WeekSet ---");

// WeakMapやWeakSetはオブジェクトに対して弱参照を持つ
// (ガベージコレクションを妨げないため)
// MapやSetと使い方はほぼ同じだが、
// イテレータを伴うメソッドやclearメソッドが存在しない。

// イテレータがない = キーを知らないと値にアクセスできないので、
// WeakMapをキャッシュに利用したり、
// 次のようにプライベートプロパティを実現できる。
var privateNames = new WeakMap();

var Foo = function () {
  function Foo(name) {
    _classCallCheck(this, Foo);

    privateNames.set(this, name);
  }

  _createClass(Foo, [{
    key: "getName",
    value: function getName() {
      return privateNames.get(this);
    }
  }]);

  return Foo;
}();

// もしクラスFooだけを外部に公開すれば、
// privateNamesにはインスタンスオブジェクト自身しかアクセスできない。


var foo = new Foo("hooray!");
console.log(foo.getName());

/* Typed Array */
console.log("--- Typed Array ---");

var u16 = new Uint16Array(2);
u16[0] = 0x00ff;
u16[1] = 0xffff;
console.log(u16, u16.byteLength);

// 符号なし8ビット整数配列のビューに変換
var u8 = new Uint8Array(u16.buffer);
console.log(u8, u8.byteLength);

// DataViewに変換
var v = new DataView(u8.buffer);
v.setUint8(0, 0x0f); // 先頭8ビットを0x0fに設定
console.log(u8);

/* Symbol */
console.log("--- Symbol ---");

// 省略

/* Proxy */
console.log("--- Proxy ---");

var handler = {
  get: function get(target, key, receiver) {
    console.log("Proxy GET:", key);
    return Reflect.get(target, key, receiver); // target[key]と書いてもよい
  }
};

var obj = { foo: 1 };
var proxy = new Proxy(obj, handler);
console.log(proxy.foo);
console.log(proxy.bar);

console.log("---");

// Proxyによる実行時の型チェック
function createTypeSafeObject(obj) {
  return new Proxy(obj, {
    set: function set(target, key, value, receiver) {
      var currentType = _typeof(target[key]);
      var newType = typeof value === "undefined" ? "undefined" : _typeof(value);

      if (key in target && currentType !== newType) {
        throw new Error(key + " requires a " + currentType + "!");
      } else {
        return Reflect.set(target, key, value, receiver);
      }
    }
  });
}

var person = {
  name: "Bob",
  age: 20
};

var p = createTypeSafeObject(person);
p.name = "John";
console.log(p.name);
try {
  p.age = true; // 例外が発生
} catch (e) {
  console.log(e);
}
console.log(p.age);

/* String */
console.log("--- String ---");

// Unicode対応の拡充
var s = [].concat(_toConsumableArray("あいうえお")); // スプレッドオペレータで展開
console.log(s[0], s[s.length - 1], s.length);

// Unicodeのコードポイントの取得や復元
var p = "あ".codePointAt(0).toString(16);
console.log(p);
var s = String.fromCodePoint("0x" + p);
console.log(s);

// 便利なメソッドの追加
console.log("abcde".startsWith("ab"));
console.log("abcde".endsWith("de"));
console.log("abcde".includes("bcd"));
console.log("abcde".repeat(3));

/* Array */
console.log("--- Array ---");

// Array.fromやArray.of
var arr1 = Array.from(arguments);
console.log(arr1);

var arr2 = Array.from("foo");
console.log(arr2);

var arr3 = Array.of(1, 2, 3);
console.log(arr3);

/* Object */
console.log("--- Object ---");

// 省略

/* Math & Number */
console.log("--- Math & Number ---");

// 2進数と8進数のリテラル
console.log(2); //=> 2
console.log(4); //=> 4
console.log(8); //=> 8
console.log(64); //=> 64
console.log(parseInt("0b10", 2)); //=> パースできないので0
console.log(parseInt("0x0f", 16)); //=> これは従来通りパースできる

console.log("---");

// isNaNとisFiniteの改善
console.log(isNaN("foo")); //=> true
console.log(Number.isNaN("foo")); //=> false

// isFinitもNumber.isFinitメソッドとして改善

console.log("---");

// 多数の算術関数の追加
console.log(Math.log10(2));
console.log(Math.tanh(1));
console.log(Math.imul(0xffffffff, 5));

/* RegExp */
console.log("--- RegExp ---");

// uフラグをつけるとサロゲートペア文字にもマッチする
console.log(/おいしい.です/.test("おいしい𩸽です"));
console.log(/\u304A\u3044\u3057\u3044(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])\u3067\u3059/.test("おいしい𩸽です"));

// 文字列のマッチング位置を制御するyフラグ、
// RegExpオブジェクトに設定されたフラグを取得するflagsプロパティなども
// ES6より追加されているらしい。