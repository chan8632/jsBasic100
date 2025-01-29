"use strict";
const fs = require("fs");
// const input = fs.readFileSync("./tc.txt").toString().trim();

const input = "aaaaabbbbcdddd";
let result = "";
let count = 1;
for (let i = 1; i < input.length; i++) {
  if (input[i - 1] === input[i]) {
    count++;
  } else {
    result += input[i -1] + count;
    count = 1;
  }
}

console.log(result);
