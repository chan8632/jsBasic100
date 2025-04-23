"use strict";
const fs = require("fs");
const input = fs.readFileSync("./tc.txt").toString().trim().split(" ");

const readline = require("readline");


let uniqueList = [];
function uniqueItem(inputItems) {
  let items = inputItems.split(',').map(x => Number(x));
  for (let item of items) {
    if (!uniqueList.includes(item)) {
      uniqueList.push(item);
    }
  }
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(query) {
  return new Promise((res) => {
    rl.question(query, (answer) => {
      res(answer);
    })
  });
}
// 입력 대기 함수
async function getInput() {
  for (let i = 1; i < 5; i++) {
    const items = await askQuestion(`${i}번`);
    uniqueItem(items);
  }
  console.log("출력값" + uniqueList);
  rl.close();
}
getInput();
