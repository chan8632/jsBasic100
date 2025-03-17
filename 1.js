"use strict";
const fs = require("fs");
const input = fs.readFileSync("./tc.txt").toString().trim();

const [inputOne, inputTwo] = input.split("\r\n");
// THISISSTRINGS;
// TATHISISKKQQAEW;

// 어떻게 나눌 것인가?
// 방법 1
// 두 문자열을 하나씩 나누기
// includes를 활용하나?

// 동적 계획법을 이용해서 해결
function longestCommonSubstring(str1, str2) {
  // dp 테이블을 str1과 str2보다 하나 더 큰 크기도 만든다음 0으로 초기화한다.
  // 그래야 일치하는 게 없을 때를 대비할 수 있다.
  let dp = Array.from({ length: str1.length + 1 }, () => 
    Array(str2.length + 1).fill(0)
  );
  let maxLength = 0;
  // i와 j는 1부터 순회하는데 그래야 
  for (let i = 1; i <= str1.length; i++){
    for (let j = 1; j <= str2.length; j++){
      if (str1[i - 1] === str2[j - 1]) {
        // 같은 부분이 있을 때 대각선 왼쪽, 즉 자기보다 바로 전의 경우에서 + 1를 해준다.
        // *** dp[i][j]는 str1의 i번째, str2의 j번째 문자열이 그 동안 얼마나 같은가를 말해주는 것.
        dp[i][j] = dp[i - 1][j - 1] + 1;
        // 최대 크기 비교
        maxLength = Math.max(dp[i][j], maxLength);
      }
      else {
        // 연속해서 같은 문자가 없다면 0으로 초기화
        dp[i][j] = 0;
      }
    }
  }
  return maxLength;
}

console.log(longestCommonSubstring(inputOne, inputTwo));