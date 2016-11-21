class Person {
  constructor(name) {
    this.name = name;
  }

  // インスタンスメソッド
  greet() {
    console.log("Hello, I'm " + this.name);
  }

  // クラスメソッド
  static create(name) {
      return new Person(name);
  }
}

// インスタンスの生成
var bob = new Person("Bob");
bob.greet();

var john = Person.create("John");
john.greet();
