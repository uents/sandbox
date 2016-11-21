var counter = {
  count: 0,
  increment() { // functionキーワードが不要
    this.count++;
    return this.count;
  }
}

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
