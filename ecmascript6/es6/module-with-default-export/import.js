"use default"

import foo from "./foo";
import bar from "./bar";
import Baz from "./baz";

console.log(foo); //=> "foo!"
bar();            //=> "bar!"
new Baz();        //=> "Baz!"
