"use strict";
const fs = require("fs");
const input = fs.readFileSync("./tc.txt").toString().trim();

const list = input.split("");

function checkParentheses(bracketList) {
  const bracketOrder = []; // 스택
  const pairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let i = 0; i < bracketList.length; i++) {
    const char = bracketList[i];

    // 열린 괄호를 스택에 추가
    if (char === "(" || char === "[" || char === "{") {
      bracketOrder.push(char);
    }
    // 닫힌 괄호일 경우
    else if (char === ")" || char === "]" || char === "}") {
      // 스택이 비어있거나, 가장 최근 열린 괄호와 짝이 맞지 않으면 false
      if (bracketOrder.length === 0 || bracketOrder.pop() !== pairs[char]) {
        return false;
      }
    }
  }

  // 모든 처리가 끝난 후 스택이 비어있어야 유효
  return bracketOrder.length === 0;
}

if (checkParentheses(list)) {
  console.log("YES");
} else {
  console.log("NO");
}
