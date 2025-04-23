"use strict";
const fs = require("fs");
const input = fs.readFileSync("./tc.txt").toString().trim().split(" ");

function solution(배달원수, 송장목록) {
  //상차목록 생성
  let 상차목록 = Array(배달원수).fill(0);
  //초기상차
  for (let i = 0; i < 배달원수; i++) {
    상차목록[i] = 송장목록.shift();
  }
  let time = 0;
  while (상차목록.some((x) => x > 0) || 송장목록.length > 0) {
    time++;
    for (let i = 0; i < 상차목록.length; i++) {
      if (상차목록[i] > 0) {
        상차목록[i]--;
      }
    }
    for (let i = 0; i < 상차목록.length; i++){
      if (상차목록[i] === 0 && 송장목록.length > 0) {
        상차목록[i] = 송장목록.shift();
      }
    }
  }
  return time;
}

const 배달원 = 3;
const 배달시간 = [1, 2, 1, 3, 3, 3];

console.log(solution(배달원, 배달시간));
// 출력값 = 5
