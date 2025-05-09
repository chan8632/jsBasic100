"use strict";
const fs = require("fs");
// const input = fs.readFileSync("./tc.txt").toString().trim().split(" ");

function solution(board, moves) {
  let colunmBoard = [];
  for (let j = 0; j < board[0].length; j++) {
    let columOne = [];
    for (let i = 0; i < board.length; i++) {
      if (board[i][j] > 0) {
        columOne.push(board[i][j]);
      }
    }
    colunmBoard.push(columOne);
  }
  let pickList = [];
  let score = 0;
  for (let mv of moves) {
    mv--;
    let puzzle = colunmBoard[mv].shift();
    if (puzzle === undefined) {
      score--;
    } else {
      pickList.push(puzzle);
    }
  }

  let changed = true;

  while (changed) {
    console.log(`리스트 : ${pickList}`);
    console.log(`점수 : ${score}`);
    let i = 0;
    changed = false;
    while (i < pickList.length) {
      let j = i + 1;
      while (pickList[i] === pickList[j]) j++;
      let count = j - i;
      if (count >= 2) {
        score += count * pickList[i];
        pickList.splice(i, count);
        changed = true;
        break;
      } else {
        i = j
      }
    }
    
  }
  console.log(score);
}

// 예제 입력
const board = [
  [1, 1, 0, 0],
  [3, 1, 0, 3],
  [3, 5, 0, 1],
  [3, 4, 4, 1],
  [1, 1, 1, 1],
];

const moves = [1, 1, 1, 1, 1, 2];

solution(board, moves); // 출력: 2
