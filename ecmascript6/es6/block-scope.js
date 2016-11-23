// let
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, i * 100);
}

// const
const foo = 1;
console.log(foo);
//foo = 100; // エラー
//console.log(foo);
//const foo = 0; // エラー
//console.log(foo);
