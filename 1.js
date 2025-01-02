"use strict";
const fs = require("fs");
const input = fs.readFileSync("./tc.txt").toString();

const date = input.split(" ").map((date) => parseInt(date));
const month = date[0];
const day = date[1];

function solution(month, day) {
  let dayNum = 0;
  switch (month) {
    case 2:
      dayNum = day + 31;
      break;
    case 3:
      dayNum = day + 31 + 29;
      break;
    case 4:
      dayNum = day + 31 + 29 + 31;
      break;
    case 5:
      dayNum = day + 31 + 29 + 31 + 30;
      break;
    case 6:
      dayNum = day + 31 + 29 + 31 + 30 + 31;
      break;
      88887;
    case 7:
      dayNum = day + 31 + 29 + 31 + 30 + 31 + 30;
      break;
    case 8:
      dayNum = day + 31 + 29 + 31 + 30 + 31 + 30 + 31;
      break;
    case 9:
      dayNum = day + 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31;
      break;
    case 10:
      dayNum = day + 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30;
      break;
    case 11:
      dayNum = day + 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31;
      break;
    case 12:
      dayNum = day + 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30;
      break;
    default:
      break;
  }
  switch (dayNum % 7) {
    case 1:
      console.log("WED");
      break;
    case 2:
      console.log("THU");
      break;
    case 3:
      console.log("FRI");
      break;
    case 4:
      console.log("SAT");
      break;
    case 5:
      console.log("SUN");
      break;
    case 6:
      console.log("MON");
      break;
    case 7:
      console.log("TUE");
      break;
  }
}
solution(month, day);
