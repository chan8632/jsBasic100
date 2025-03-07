"use strict";
const fs = require("fs");
const input = fs.readFileSync("./tc.txt").toString().trim();

// 1부터 주어진 수 까지 하나하나 까보기
// 검사 시 문자로 ...로 펼친다음 문자로 변경
// 모든 문자들이 [3,6,9] 중 하나에 포함되어야만 숫자가 포함되게 할 것.
const inputNum = parseInt(input, 10);

let count = 0;
for (let i = 1; i <= inputNum; i++){
  if ([...String(i)].every(digits => ['3', '6', '9'].includes(digits))) {
    count++;
  }
}

console.log(count);
