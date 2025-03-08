"use strict";
const fs = require("fs");
const input = fs.readFileSync("./tc.txt").toString().trim();
const enter = input.split('\n').map(str=>str.trim());
const testCase = parseInt(enter[0], 10);
const info = enter[1].split(' ');
const citySize = parseInt(info[0], 10);
const searchSize = parseInt(info[1],10);
// 주어진 배열 2차원으로 만들기
let matrix = [];
for (let i = 2; i < citySize + 2; i++){
    matrix.push(enter[i].split(' ').map(str=>parseInt(str,10)));
}

let mineCount = 0;
let mineCountList = [];
// 삼중for문으로 지뢰 갯수 카운트
for (let k = searchSize - 1; k < citySize; k++){
    for (let l = searchSize - 1; l < citySize; l++){
        mineCount = 0;
        for (let i = k + 1 - searchSize; i <= k; i++) {
          for (let j = l + 1 - searchSize; j <= l; j++) {
            if (matrix[i][j] === 1) {
              mineCount++;
            }
          }
        }
    }
    mineCountList.push(mineCount);
}

// 카운트한 지뢰들 중 가장 큰 거 도출
console.log(Math.max(...mineCountList));

// 입력
// 1
// 5 3
// 1 0 0 1 0
// 0 1 0 0 1
// 0 0 0 1 0
// 0 0 0 0 0
// 0 0 1 0 0

// 출력
// 3







