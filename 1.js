"use strict";
const fs = require("fs");
const input = fs.readFileSync("./tc.txt").toString();

const scoreList = input.split(" ").map(Number);
const sortScoreList = scoreList.sort((a, b) => a - b);
let top3List = [];
let count = 0;
console.log(sortScoreList);
while (top3List.length <= 3) {
  let curScore = sortScoreList.pop();
  if (!top3List.includes(curScore)) {
    top3List.push(curScore);
  }
  count += 1;
  console.log("top3List : " + top3List);
  console.log("curScore : " + curScore);
  console.log("count : " + count);
}
console.log(count);
