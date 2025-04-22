"use strict";
const fs = require("fs");
const input = fs.readFileSync("./tc.txt").toString().trim().split(" ");

function solution(사람수, 배달거리) {
  let 배달상황 = 배달거리.slice(0, 사람수);
  let time = 0;

  while (배달상황.some((x) => x !== 0)) {
    console.log(배달상황);
    for (let i = 0; i < 사람수; i++){
      배달상황[i]--;
    }
      for (let i = 0; i < 사람수; i++) {
        배달상황[i]--;
        if (배달거리.length !== 0) {
          if (배달상황[i] === 0) {
            배달상황[i] = 배달거리.pop();
          }
        } else {
          if (배달상황[i] === 0) {
            배달상황.splice(i, 1);
          }
        }
      }
      time++;
    }
    return time;
  }
}

const 배달원 = 3;
const 배달시간 = [1, 2, 1, 3, 3, 3];

console.log(solution(배달원, 배달시간));
// 출력값 = 5
