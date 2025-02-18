"use strict";
const fs = require("fs");
const input = fs.readFileSync("./tc.txt").toString().trim();

function solution(a, b) {
  const rowA = a.length;
  const colA = a[0].length;
  const rowB = b.length;
  const colB = b[0].length;

  let c = Array.from({ length: rowA }, () => Array(colB).fill(0));

  for (let i = 0; i < rowA; i++) {
    for (let j = 0; j < colB; j++) {
      for (let k = 0; k < colA; k++) {
        c[i][j] += a[i][k] * b[k][j];
      }
    }
  }

  return c;
}

const a = [
  [1, 2],
  [2, 4],
];

const b = [
  [1, 0],
  [0, 3],
];

console.log(solution(a, b));
// 결과: [[14, 32], [32, 77]]
