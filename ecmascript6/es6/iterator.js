// IterableとIterator
var arr = ["foo", "bar"];
var iterator = arr[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log("---");

// for/of文
var iter = [1, 2, 3];
for (let i of iter) {
  console.log(i);
}
console.log("---");

// スプレッドオペレータ
var arr = [..."foo"];
console.log(arr);

// 分割代入
var [c1, c2, ...rest] = "ecma";
console.log(c1, c2, rest);
