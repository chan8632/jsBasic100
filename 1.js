"use strict";
const fs = require("fs");
const input = fs.readFileSync("./tc.txt").toString().trim();

const N = parseInt(input, 10);

function handShake(N) {
  let 사람수 = 0;
  let 총악수 = 0;
  let temp = 0;
  while (true) {
    총악수 = parseInt((사람수 * (사람수 - 1)) / 2, 10);
    if (N < 총악수) {
      break;
    }
    사람수++;
    temp = 총악수;
  }
  return [N - temp, 사람수];
}

console.log(handShake(N));
