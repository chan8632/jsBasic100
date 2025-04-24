"use strict";
const fs = require("fs");
const input = fs.readFileSync("./tc.txt").toString().trim().split(" ");

let 입력 = "1번: 4,2,3 2번: 3 3번: 2,3,4,1 4번: 2,3";
let 옷정보만모은것 = [];
let 띄워쓰기기준으로나눠보기 = 입력.split(" ");
for (let i = 0; i < 띄워쓰기기준으로나눠보기.length; i++) {
  if (i % 2 !== 0) {
    옷정보만모은것.push(띄워쓰기기준으로나눠보기[i]);
  }
}

let uniqueList = [];
function uniqueItem(inputAllItems) {
  for (let inputItems of inputAllItems) {
    let items = inputItems.split(",").map((x) => Number(x));
    for (let item of items) {
      if (!uniqueList.includes(item)) {
        uniqueList.push(item);
      }
    }
  }
  return uniqueList;
}
console.log(uniqueItem(옷정보만모은것));


