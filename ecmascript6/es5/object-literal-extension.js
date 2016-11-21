"use strict";

var _obj;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// プロパティ省略記法
var foo = 0,
    bar = 1;

var obj1 = { foo: foo, bar: bar };
console.log(obj1);

// コンピューティッドプロパティ
var key = "foo";

var obj2 = (_obj = {}, _defineProperty(_obj, key, 0), _defineProperty(_obj, key + "_bar", 1), _obj);
console.log(obj2);