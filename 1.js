"use strict";
const fs = require("fs");
// const input = fs.readFileSync("./tc.txt").toString().trim();

// const list = input.split("");
const testCases = [
  { input: "{}{{[()()]}}", expected: "YES" },
  { input: "[{()}]", expected: "YES" },
  { input: "[{(})]", expected: "NO" },
  { input: "(()[{}])", expected: "YES" },
  { input: "({[)]}", expected: "NO" },
  { input: "(((", expected: "NO" },
  { input: "))}", expected: "NO" },
];

function checkParentheses(bracketList) {
  let bracketCheck = [];

  const pairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  for (let i = 0; i < bracketList.length; i++) {
    let char = bracketList[i];
    console.log(`Step ${i}:`, { char, bracketCheck }); // 디버깅 로그
    if (char === "(" || char === "{" || char === "[") {
      bracketCheck.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      if (bracketCheck.length === 0 || bracketCheck.pop() !== pairs[char]) {
        console.log("Mismatch or empty stack detected");
        return false;
      }
    }
  }
  console.log("Final Stack:", bracketCheck); // 최종 스택 상태 확인
  return bracketCheck.length === 0;
}

// if (checkParentheses(list)) {
//   console.log('YES');
// } else {
//   console.log('NO');
// }

testCases.forEach(({ input, expected }, index) => {
  const list = input.split("");
  const result = checkParentheses(list) ? "YES" : "NO";
  console.log(`Test Case ${index + 1}:`, {
    input,
    result,
    expected,
    pass: result === expected,
  });
});
