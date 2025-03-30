"use strict";
const fs = require("fs");
const input = fs.readFileSync("./tc.txt").toString().trim().split("\r\n");

// digits	숫자의 각 자리 → 숫자 배열을 명확하게 표현
// selectCount	몇 개 고를지 의미 명확하게
// selectedDigits	현재 선택한 숫자 조합
// usedIndices	어떤 인덱스를 썼는지 명확히
// candidates	만들어진 숫자 후보 리스트
// combinedNumber	선택된 숫자들을 합쳐 만든 최종 숫자

const digits = input[0].split("").map(Number);
const selectCount = parseInt(input[1], 10);

let candidates = [];

function findMaxNumberByPermutation(digits, selectCount) {
  function generatePermutations(selectedDigits, usedIndices) {
    if (selectedDigits.length === selectCount) {
      const combinedNumber = parseInt(selectedDigits.join(""), 10);
      candidates.push(combinedNumber);
      return;
    }

    for (let i = 0; i < digits.length; i++) {
      if (usedIndices[i]) continue;
      usedIndices[i] = true;
      generatePermutations([...selectedDigits, digits[i]], usedIndices);
      usedIndices[i] = false; // 백트래킹
    }
  }

  generatePermutations([], Array(digits.length).fill(false));
  return Math.max(...candidates);
}

console.log("답 :", findMaxNumberByPermutation(digits, selectCount));
