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

class Author extends Person {
  constructor(name, book) {
    super(name);
    this.book = book;
  }

  greet() {
    super.greet();
    console.log("I wrote " + this.book);
  }

  static create(name, book) {
    return new Author(name, book);
  }
}

var author = new Author("Gillian Flynn", "Gone Girl");
author.greet();
