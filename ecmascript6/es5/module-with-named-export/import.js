"use strict";

// メンバごとにインポート

var _module2 = require("./module");

var _module = _interopRequireWildcard(_module2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

console.log(_module2.foo);
console.log((0, _module2.bar)());
var baz = new _module2.Baz();
console.log(baz);

console.log("---");

// インポートする変数名を指定

console.log(_module2.foo);

console.log("---");

// モジュールをまとめてインポート

console.log(_module.foo);
console.log(_module.bar());
var baz = new _module.Baz();
console.log(baz);