"use strict";
const fs = require("fs");
const input = fs.readFileSync("./tc.txt").toString().trim().split(" ");

const 텃밭 = [
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0]
];;
const 텃밭너비 = 텃밭.length;
const 텃밭높이 = 텃밭[0].length;

let dp = Array.from({ length: 텃밭너비 }, () => Array(0).fill(텃밭높이));

let max = 0;
let maxRow = 0;
let maxCol = 0;
for (let i = 0; i < 텃밭너비; i++) {
  for (let j = 0; j < 텃밭높이; j++) {
    if (텃밭[i][j] === 0) {
      if (i === 0 || j === 0) {
        dp[i][j] = 1;
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1], dp[i][j - 1]) + 1;
      }
    } else {
      dp[i][j] = 0;
    }
    if (max < dp[i][j]) {
      max = dp[i][j];
      maxRow = i;
      maxCol = j;
    }
  }
}

console.log(max, maxRow, maxCol);

for (let i = maxRow - max + 1; i < maxRow + 1; i++) {
  for (let j = maxCol - max + 1; j < maxCol + 1; j++) {
    dp[i][j] = "#";
  }
}

for (let i = 0; i < dp.length; i++){
  for (let j = 0; j < dp[0].length; j++){
    if (dp[i][j] === 0) {
      dp[i][j] = 1;
    } else if (dp[i][j] > 0) {
      dp[i][j] = 0;
    }
  }
}
for (let row of dp) {
  console.log(row.join(' '));
}