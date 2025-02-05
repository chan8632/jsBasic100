"use strict";
const fs = require("fs");
const input = fs.readFileSync("./tc.txt").toString().trim();

const N = parseInt(input, 10);
let k = 0;

function handShake(N) {
  for (let i = 0; ; i++) {
    if (N * 2 < i * (i + 1)) {
      return i;
    } 
  }
}

k = handShake(N);
let minsuHandShake = N - k * (k - 1) / 2;
let peopleCount = k + 1;
let res = [];
res.push(minsuHandShake, peopleCount);
console.log(res);
