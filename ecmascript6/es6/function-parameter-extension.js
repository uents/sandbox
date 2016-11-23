// デフォルトパラメータ
function add(a = 1, b = 2) {
  return a + b;
}

console.log(add());      //=> 3
console.log(add(0));     //=> 2
console.log(add(0, 0));  //=> 0

// レストパラメータ
function foo(first, second, ...rest) {
  console.log("first:", first);
  console.log("second:", second);
  console.log("rest:", rest);
}

foo(1, 2, 3, 4, 5);
