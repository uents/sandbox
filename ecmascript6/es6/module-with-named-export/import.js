"use strict";

// メンバごとにインポート
import {foo, bar, Baz} from "./module";

console.log(foo);
console.log(bar());
var baz = new Baz();
console.log(baz);

console.log("---");

// インポートする変数名を指定
import {foo as poo} from "./module";
console.log(poo);

console.log("---");

// モジュールをまとめてインポート
import * as module from "./module";
console.log(module.foo);
console.log(module.bar());
var baz = new module.Baz();
console.log(baz);
