"use strict";
const fs = require("fs");
const input = fs.readFileSync("./tc.txt").toString().trim();

let s = '';
for (let i = 0; i <= 1000; i++){
  s += i;
}
console.log(s);
console.log(s.match(/1/g).length);
