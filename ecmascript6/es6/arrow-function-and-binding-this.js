var john = {
  name: "John",
  helloLater: function() {
    setTimeout(() => {
      // アロー関数を使うとここでのthisはjohnに束縛される
      console.log("Hello, I'm " + this.name);
    }, 1000);
  }
}

john.helloLater();
