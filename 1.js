"use strict";
const fs = require("fs");
const input = fs.readFileSync("./tc.txt").toString();
function bubble(arr) {
  let result = arr.slice();
  console.log(">> 함수안에 콘솔로그" + result);
  for (let i = 0; i < result.length - 1; i++) {
    if (result[i] > result[i + 1]) {
      [result[i], result[i + 1]] = [result[i + 1], result[i]];
    }
  }
  return result;
}

const items = input.split(" ").map((n) => {
  return parseInt(n, 10);
});

console.log(bubble(items));
