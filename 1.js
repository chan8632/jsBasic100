"use strict";
const fs = require("fs");
// const input = fs.readFileSync("./tc.txt").toString().trim();

const input = 24;
let N = parseInt(input, 10);
let count = 0;
while (N > 0) {
  if (N >= 7) {
    N -= 7;
    count++;
  } else if (N >= 3) {
    N -= 3;
    count++;
  } else {
    if (N === 0) {
      break;
    } else {
      count = -1;
      break;
    }
  }
}
console.log(count);