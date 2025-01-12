"use strict";
const fs = require("fs");
const input = fs.readFileSync("./tc.txt").toString();

const scoreList = input.split(" ").map(Number);
const sortScoreList = scoreList.sort((a, b) => a - b);


let count = 0;
let arr = [];

while (arr.length < 3) {
  let n = sortScoreList.pop();
  if (!arr.includes(n)) {
    arr.push(n);
  }
  count += 1;
  console.log('카운트 : ' + count);
  console.log('값 : ' + n);
  console.log('arr의 길이 : ' + arr.length);
  console.log("-----------------------");
}

console.log(count);