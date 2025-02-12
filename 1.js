"use strict";
const fs = require("fs");
const input = fs.readFileSync("./tc.txt").toString().trim();


function prime_list(input) {
  let n = parseInt(input, 10);
  if (n < 2) return []; // 2 미만의 숫자는 소수 없음

  let sieve = new Array(n + 1).fill(true);
  sieve[0] = sieve[1] = false; // 0과 1은 소수가 아님

  let m = Math.sqrt(n);
  for (let i = 2; i <= m; i++) {
    if (sieve[i]) {
      //n은 n까지의 소수들을 구하는 과정
      // j의 배수를 하나씩 없애가는 과정
      // i * i부터 시작하는 이유는 i * i보다 작은 수들은 이미 다 소거가 돼서
      for (let j = i * i; j <= n; j += i) {
        sieve[j] = false;
      }
    }
  }
  return sieve
    .map((value, idx) => (value ? idx : null))
    .filter((value) => value !== null);
}

const inputNum = parseInt(input, 10);
let arr = prime_list(inputNum);
let res = [];

for (let prime of arr) {
  if (arr.includes(inputNum - prime) && prime < inputNum - prime) {
    res.push([prime, inputNum - prime]);
  }
}

const diffPrimeList = res.map((prime) => prime[1] - prime[0]);

const diffMinIdx = diffPrimeList.indexOf(Math.min(...diffPrimeList));
const diffMaxIdx = diffPrimeList.indexOf(Math.max(...diffPrimeList));



console.log('전체 소수 합 그룹 : ' + JSON.stringify(res));
console.log('차이가 가장 많이 나는 그룹 : ' +  res[diffMinIdx]);
console.log('차이가 가장 적게 나는 그룹 : ' + res[diffMaxIdx]); 
  


