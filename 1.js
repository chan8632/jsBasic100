"use strict";
const fs = require("fs");
const input = fs.readFileSync("./tc.txt").toString().trim();

const inputData = input.split("\n");
const busScheduleList = JSON.parse(inputData[0]);
const curTimeData = inputData[1].replace(/"/g, " ").split(":");
const curHour = parseInt(curTimeData[0], 10);
const curMinute = parseInt(curTimeData[1], 10);
const curTime = curHour * 60 + curMinute;
let scheduleHour = 0;
let scheduleMinute = 0;
let remainHour = '0';
let remainMinute = 0;
console.log(`curTime: ${curTime}`);
let res = [];
for (let busSchedule of busScheduleList) {
  let busScheduleData = busSchedule.split(":");
  scheduleHour = parseInt(busScheduleData[0], 10);
  scheduleMinute = parseInt(busScheduleData[1], 10);
  let scheduleTime = scheduleHour * 60 + scheduleMinute;
  let remainTime = scheduleTime - curTime;
  if (remainTime >= 0) {
    remainHour += parseInt(remainTime / 60, 10);
    remainMinute = parseInt(remainTime % 60, 10);
    res.push(`${remainHour}시간 ${remainMinute}분`);
  } else {
    res.push("지나갔습니다.");
  }
}

console.log(res);
