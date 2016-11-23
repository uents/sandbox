"use strict";

var john = {
  name: "John",
  helloLater: function helloLater() {
    var _this = this;

    setTimeout(function () {
      // アロー関数を使うとここでのthisはjohnに束縛される
      console.log("Hello, I'm " + _this.name);
    }, 1000);
  }
};

john.helloLater();