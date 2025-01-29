"use strict";
const fs = require("fs");
// const input = fs.readFileSync("./tc.txt").toString().trim();

const input = "aaaaabbbbcdddd";
let res = "";
let count = 1;
for (let i = 1; i < input.length; i++) {
  if (input[i - 1] === input[i]) {
    count++;
  } else {
    res += input[i -1] + count;
    count = 1;
  }
}

console.log(res);
