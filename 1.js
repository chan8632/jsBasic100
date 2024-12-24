"use strict";
const fs = require("fs");
const input = fs.readFileSync("./tc.txt").toString();

const word = input.split("");
let result = '';
for (let i = 0; i < word.length; i++) {
  if (i === word.length - 1) {
    continue;
  }
  result += word[i] + " " + word[i + 1] + "\n";
}
console.log(result);



