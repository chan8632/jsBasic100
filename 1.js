"use strict";
const fs = require("fs");
const input = fs.readFileSync("./tc.txt").toString();
function bubble(arr) {
  let result = arr.slice(); // 원본 배열 복사

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - i; j++) {
      if (result[j] > result[j + 1]) {
          [result[j], result[j + 1]] = [result[j + 1], result[j]];
      }
    }
  }
  return result;
}

const items = input.split(" ").map((n) => {
  return parseInt(n, 10);
});

console.log(bubble(items));
