"use strict";
const fs = require("fs");
const input = fs.readFileSync("./tc.txt").toString().trim();

const inputData = input.split("\n");
const busScheduleList = JSON.parse(inputData[0]);
const curTimeData = inputData[1].replace(/"/g, " ").split(":").map((n)=>parseInt(n,10));
// const curHour = parseInt(curTimeData[0], 10);
// const curMinute = parseInt(curTimeData[1], 10);
// const curTime = curHour * 60 + curMinute;
// curTimeData[0]는 현재 시, curTimeData[1]는 현재 분
const curTime = curTimeData[0] * 60 + curTimeData[1];
let remainHour = 0;
let remainMinute = 0;
let res = [];
for (let busSchedule of busScheduleList) {
  // 위와 같은 방법으로 처리
  let busScheduleData = busSchedule.split(":").map((n) => parseInt(n, 10));
  // scheduleHour = parseInt(busScheduleData[0], 10);
  // scheduleMinute = parseInt(busScheduleData[1], 10);
  // let scheduleTime = scheduleHour * 60 + scheduleMinute;
  let scheduleTime = busScheduleData[0] * 60 + busScheduleData[1];
  let remainTime = scheduleTime - curTime;
  if (remainTime >= 0) {
    remainHour += parseInt(remainTime / 60, 10);
    remainMinute = parseInt(remainTime % 60, 10);
    res.push(`${String(remainHour).padStart(2,0)}시간 ${String(remainMinute).padStart(2,0)}분`);
  } else {
    res.push("지나갔습니다.");
  }
}

const diffPrimeList = res.map((prime) => prime[1] - prime[0]);

const diffMinIdx = diffPrimeList.indexOf(Math.min(...diffPrimeList));
const diffMaxIdx = diffPrimeList.indexOf(Math.max(...diffPrimeList));



console.log('전체 소수 합 그룹 : ' + JSON.stringify(res));
console.log('차이가 가장 많이 나는 그룹 : ' +  res[diffMinIdx]);
console.log('차이가 가장 적게 나는 그룹 : ' + res[diffMaxIdx]); 
  


