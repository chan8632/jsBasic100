"use strict";
const fs = require("fs");
const input = fs.readFileSync("./tc.txt").toString().trim().split("\r\n");

function math(e) {
  let chars = e.split("");
  let stack = [];
  for (let i = 0; i < chars.length; i++){
    let char = chars[i];
    if (char === '(') {
      stack.push(char);
    } else if (char === ')') {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 입력 대기 함수
function getInput() {
  rl.question("데이터 입력(1), 프로그램 종료(2): ", (order) => {
    if (order.trim() === "1") {
      rl.question("데이터를 입력하세요: ", (ex) => {
        console.log(math(ex));
        getInput(); // 재귀 호출하여 계속 입력 받기
      });
    } else if (order.trim() === "2") {
      console.log("프로그램을 종료합니다.");
      rl.close();
    } else {
      console.log("잘못된 입력입니다. 다시 입력해주세요.");
      getInput(); // 다시 입력받기
    }
  });
}

// 실행
getInput();
