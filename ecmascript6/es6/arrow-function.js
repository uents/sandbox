var add1 = (a, b) => {
  return a + b;
};

var add2 = (a, b) => a + b;

// 引数の()も省略可能
var square = n => n * n;

console.log(add1(1, 2));
console.log(add2(3, 4));
console.log(square(9));
