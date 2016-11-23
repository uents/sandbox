// 配列の分割代入
var [year, month, day] = [2016, 12, 31];
console.log(year, month, day);

// さらに2番目の値だけを代入
var [, month] = [2015, 1, 1];
console.log(year, month, day);

// レストパラメータの活用
var [year, ...monthDay] = [2014, 4, 1];
console.log(year, monthDay);

// 値の交換に便利
var x = 1,
    y = 2;
[x, y] = [y, x];
console.log(x, y);

// オブジェクトの分割代入
var {name: a, age: b} = {name: "Bob", age: 20};
console.log(a, b);

// プロパティ省略記法を使った分割代入
var {name, age} = {name: "John", age: 20};
console.log(name, age);

// デフォルト値の設定
var {name, age = 18} = {name: "Tom"};
console.log(name, age);

// ネストしたオブジェクトからの抽出
var {foo: {bar: [, x]}} = {foo: {bar: [1, 2, 3]}}
console.log(x);

// 変数への分割代入
var regex = /(\d{4})(\d{2})(\d{2})/;
var date = regex.exec("20161122");
console.log(date[1], date[2], date[3]);

// 関数引数での分割代入
function foo({a, b}) {
  console.log(a, b);
}
foo({a: 1, b: 2});
