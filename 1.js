"use strict";
const fs = require("fs");
const input = fs.readFileSync("./tc.txt").toString().trim();
let count = 0;

for (let i = 0; i <= 1000; i++) {
  // let numberList = getDigits(i);
  let numberList = String(i).split('').map(Number);
  for (let j = 0; j < numberList.length; j++) {
    if (numberList[j] === 1) {
      count++;
    }
  }
}

console.log(count);