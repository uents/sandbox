"use strict";
"use default";

var _foo = require("./foo");

var _foo2 = _interopRequireDefault(_foo);

var _bar = require("./bar");

var _bar2 = _interopRequireDefault(_bar);

var _baz = require("./baz");

var _baz2 = _interopRequireDefault(_baz);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_foo2.default); //=> "foo!"
(0, _bar2.default)(); //=> "bar!"
new _baz2.default(); //=> "Baz!"