"use strict";
const fs = require("fs");
const input = fs.readFileSync("./tc.txt").toString().trim().split("\r\n");

const inputTable = input[0].split(" ").map(Number);
const goalDish = parseInt(input[1], 10);
function eatGoalDish(realTable, goalDishIdx) {
  let sortTable = [...realTable].sort((a, b) => a - b);
  goalDishIdx--;
  let moveTableCount = 0;
  while (true) {
    // 우선, 현실 테이블에서 음식을 빼보고 그걸 가지고 판별
    let currentDish = realTable.shift();
    // 현 음식이 먹을 차례인 것
    if (currentDish === sortTable[0]) {
      // 먹을 음식이 목표 음식인 경우
      if (goalDishIdx === 0) {
        break;
      }
      // 먹을 음식이 목표 음식은 아닌 경우
      else {
        sortTable.shift();
        goalDishIdx--;
      }
    }
    // 현 음식이 먹을 차례가 아닌 것
    else {
      // 안 먹기 때문에 일단 다시 음식을 회전테이블에 넣어두기
      realTable.push(currentDish);
      // 먹진 않으나 목표 음식은 맞는 경우
      if (goalDishIdx === 0) {
        goalDishIdx = realTable.length - 1;
      } // 먹지도 않고 목표 음식도 아닌 경우
      else {
        goalDishIdx--;
      }
    }
    console.log(realTable);
    console.log('');
    moveTableCount++;
  }
  return moveTableCount;
}

console.log(eatGoalDish(inputTable, goalDish));

// 5 2 3 1 2 5
// 1

// 목표는 1(첫번째 수)인 5점 접시를 먹는 것.
// 흐름이
// 목표인가? 먹는가? 2가지 경우를 설정해서 결국에 총 4가지의 케이스가 나옴
// realTable이라는 현 회전초밥 상태를 나타내는 배열
// sortTable이라는 숫자 순으로 정렬된 회전초밥을 나타내는 배열
// goalDish라는 목표에 도달 했는지 필요한 인덱스 값
// currentDish 라는 현 접시 인덱스

// 예시 흐름
// '5' 2 3 1 2 5
// 목표 o 먹기 x

// '2' 3 1 2 5 5
// 목표 x 먹기 x

// '3' 1 2 5 5 2
// 목표 x 먹기 x

// '1' 2 5 5 2 3
// 목표 x 먹기 o

// '2' 5 5 2 3
// 목표 x 먹기 o

// '5' 5 2 3
// 목표 x 먹기 x

// '5' 2 3 5
// 목표 o 먹기 x

// '2' 3 5 5
// 목표 x 먹기 o

// '3' 5 5
// 먹기 o 목표 x

// '5' 5
// 먹기 o 목표 x

// '5'
// 먹기 o 목표 o
