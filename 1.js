"use strict";
const fs = require("fs");
const input = fs.readFileSync("./tc.txt").toString().trim();

const inputNum = parseInt(input, 10);
function era(input) {
  const trueList = Array(input + 1).fill(true);
  //? sqrt는 어떻게 쓰지?
  const minArea = Math.sqrt(input);

  trueList[0] = false;
  trueList[1] = false;

  for (let i = 2; i < trueList.length; i++) {
    if (trueList[i] === true) {
      for (let j = i * i; j < trueList.length; j += i) {
        trueList[j] = false;
      }
    }
  }
  return trueList
    .map((bool, idx) => (bool === true ? idx : null))
    .filter((val) => val !== null);
}

let res = [];
const primeList = era(inputNum);

for (let prime of primeList) {
  if (primeList.includes(inputNum - prime) && prime < inputNum - prime) {
    res.push([prime, inputNum - prime]);
  }
}

const diffPrimeList = res.map((prime) => prime[1] - prime[0]);
const diffPrimeMinIdx = diffPrimeList.indexOf(Math.min(...diffPrimeList));
const diffPrimeMaxIdx = diffPrimeList.indexOf(Math.max(...diffPrimeList));

console.log("전체 : " + JSON.stringify(res));
console.log("차가 가장 작은 두 수 : " + res[diffPrimeMinIdx]);
console.log("차가 가장 큰 두 수 : " + res[diffPrimeMaxIdx]);
