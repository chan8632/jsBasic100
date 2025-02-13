"use strict";
const fs = require("fs");
const input = fs.readFileSync("./tc.txt").toString().trim();

const inputNum = parseInt(input, 10);
function era(input) {
  // 주어진 수가 2 미만이면 소수가 없음.
  if (input < 2) return [];
  // Array를 쓰려면 new를 써야 하나봄.
  const trueList = new Array(input + 1).fill(true);
  // 배열의 두 요소를 한꺼번에 할당
  trueList[0] = trueList[1] = false;
  
  // sqrt를 쓰면 sqrt(input)이상의 합성수들은 알아서 걸러진다.
  // 대신 밑에 for에서 범위를 input으로 해야 한다.
  const minArea = Math.sqrt(input);
  for (let i = 2; i < minArea; i++) {
    if (trueList[i] === true) {
      for (let j = i * i; j < input; j += i) {
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
  if (primeList.includes(inputNum - prime) && (prime < inputNum - prime)) {
    res.push([prime, inputNum - prime]);
  }
}

const diffPrimeList = res.map((prime) => prime[1] - prime[0]);
const diffPrimeMinIdx = diffPrimeList.indexOf(Math.min(...diffPrimeList));
const diffPrimeMaxIdx = diffPrimeList.indexOf(Math.max(...diffPrimeList));

console.log('전체 : ' + JSON.stringify(res));
console.log('차가 가장 작은 두 수 : ' + res[diffPrimeMinIdx]);
console.log("차가 가장 큰 두 수 : " + res[diffPrimeMaxIdx]);
