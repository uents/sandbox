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
var map2 = new Map([["k1", "v1"],
                    ["k2", "v2"]]);
console.log(map2.size);
map2.clear();
console.log(map2.size);

console.log("---");

// MapはIterable
var m = new Map([["k1", "v1"],
                 ["k2", "v2"]]);
for (let [k, v] of m) {
  console.log(k, v);
}


/* Set */
console.log("--- Set ---");

var s = new Set(["v1", "v2"]);
for (let v of s) {
  console.log(v);
}

/* WeakMap & WeakSet */
console.log("--- WeekMap & WeekSet ---");

// WeakMapやWeakSetはオブジェクトに対して弱参照を持つ
// (ガベージコレクションを妨げないため)
// MapやSetと使い方はほぼ同じだが、
// イテレータを伴うメソッドやclearメソッドが存在しない。

// イテレータがない = キーを知らないと値にアクセスできないので、
// WeakMapをキャッシュに利用したり、
// 次のようにプライベートプロパティを実現できる。
const privateNames = new WeakMap();

class Foo {
  constructor(name) {
    privateNames.set(this, name);
  }
  getName() {
    return privateNames.get(this);
  }
}

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
var u8 = new Uint8Array(u16.buffer)
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
  get(target, key, receiver) {
    console.log("Proxy GET:", key);
    return Reflect.get(target, key, receiver); // target[key]と書いてもよい
  }
}

var obj = {foo: 1};
var proxy = new Proxy(obj, handler);
console.log(proxy.foo);
console.log(proxy.bar);

console.log("---");

// Proxyによる実行時の型チェック
function createTypeSafeObject(obj) {
  return new Proxy(obj, {
    set(target, key, value, receiver) {
      var currentType = typeof target[key];
      var newType = typeof value;

      if (key in target && currentType !== newType) {
        throw new Error(`${key} requires a ${currentType}!`);
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
var s = [..."あいうえお"]; // スプレッドオペレータで展開
console.log(s[0], s[s.length-1], s.length);

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
console.log(0b10);   //=> 2
console.log(0b100);  //=> 4
console.log(0o10);   //=> 8
console.log(0o100);  //=> 64
console.log(parseInt("0b10", 2))  //=> パースできないので0
console.log(parseInt("0x0f", 16)) //=> これは従来通りパースできる

console.log("---");

// isNaNとisFiniteの改善
console.log(isNaN("foo"));         //=> true
console.log(Number.isNaN("foo"));  //=> false

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
console.log(/おいしい.です/u.test("おいしい𩸽です"));

// 文字列のマッチング位置を制御するyフラグ、
// RegExpオブジェクトに設定されたフラグを取得するflagsプロパティなども
// ES6より追加されているらしい。
