// プロパティ省略記法
var foo = 0,
    bar = 1;

var obj1 = {foo, bar};
console.log(obj1);

// コンピューティッドプロパティ
var key = "foo";

var obj2 = {
  [key]: 0,
  [key + "_bar"]: 1
};
console.log(obj2);
