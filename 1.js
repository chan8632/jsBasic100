"use strict";
const fs = require("fs");
const input = fs.readFileSync("./tc.txt").toString().trim().split("\r\n");

const inputData = 'ABCDEFGH';
const 입력성분 = inputData.split('');
const 일치갯수 = 4;
const 비교대상약들 = ["EFGHIJKL", "EFGHIJKM", "EFGHIJKZ"];
let 결과리스트 = [];

for (let 비교대상약 of 비교대상약들) {
  let 비교대상약성분 = 비교대상약.split('');
  let 세로 = 입력성분.length;
  let 가로 = 비교대상약성분.length;
  let 비교다이나믹 = Array.from({ length: 세로 + 1 }, () => Array(가로 + 1).fill(0) );
  for (let i = 1; i <= 세로; i++){
    for (let j = 1; j <= 가로; j++){
      if (입력성분[i] === 비교대상약성분[j]) {
        비교다이나믹[i][j] = 비교다이나믹[i-1][j-1] + 1; 
      } else {
        비교다이나믹[i][j] = Math.max(비교다이나믹[i - 1][j], 비교다이나믹[i][j - 1]);
      }
    }
  }
  
  if (비교다이나믹[세로][가로] === 4) {
    결과리스트.push(비교대상약);
  }
}
console.log(결과리스트);