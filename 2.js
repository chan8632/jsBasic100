"use strict";
const fs = require("fs");
const input = fs.readFileSync("./tc.txt").toString().trim();

// 소수 구하기
let prime = [];
let isPrime = true;

for (let i = 2; i < 100; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    prime.push(i);
  }
  isPrime = true;
}

let val = parseInt(input, 10);

let 골드바흐파티션 = [];

for (let n of prime) {
  if (prime.includes(val - n) && n <= val - n) {
    골드바흐파티션.push([n, val - n]);
  }
}

let 차 = 골드바흐파티션.map((e) => e[1] - e[0]);

let 작은값 = 골드바흐파티션[차.indexOf(Math.min.apply(null, 차))];
let 큰값 = 골드바흐파티션[차.indexOf(Math.max.apply(null, 차))];

console.log(골드바흐파티션);
console.log(작은값);
console.log(큰값);
