"use strict";
const fs = require("fs");
const input = fs.readFileSync("./tc.txt").toString().trim().split("\r\n");

// 1. 맵을 2로 통일 ok
// 2. 가로 세로 안쪽을 0으로 통일
// 3. 캐릭터 위치를 1로 만들기
// 4. 방애물 위치를 2로 통일
const 가로 = 4;
const 세로 = 5;
const 캐릭터초기위치 = [0, 0];
const 장애물 = [
  [0, 1],
  [1, 1],
  [2, 3],
  [1, 3],
];
console.log("이동 전 지도:");

// const 캐릭터움직임원칙 = { 상: 1, 하: 2, 좌: 3, 우: 4 };
const 움직임 = [2, 2, 2, 4, 4, 4];
// 움직임에서 하나씩 이동경로 추출

// 움직임에서 어디로 가는건지 숫자로 표현
// 만약, 움직임이 추가한 위치가 2라면 continue

function make_map(가로, 세로, 캐릭터위치, 장애물) {
  let map = Array.from({ length: 세로 + 2 }, () => Array(가로 + 2).fill(2));
  for (let i = 1; i <= 세로; i++) {
    for (let j = 1; j <= 가로; j++) {
      map[i][j] = 0;
    }
  }
  const [캐릭터x좌표, 캐릭터y좌표] = [캐릭터위치[0] + 1, 캐릭터위치[1] + 1];
  map[캐릭터x좌표][캐릭터y좌표] = 1;
  for (let 장애물좌표 of 장애물) {
    let 장애물x좌표 = 장애물좌표[0] + 1;
    let 장애물y좌표 = 장애물좌표[1] + 1;
    map[장애물x좌표][장애물y좌표] = 2;
  }
  [...map].forEach((row) => {
    console.log(`[${row.join(", ")}]`);
  });
  return map;
}
const 지도 = make_map(가로, 세로, 캐릭터초기위치, 장애물);
console.log("이동 후 지도");

function move(지도, 움직임) {
  let map = 지도;
  let 캐릭터x좌표 = 0;
  let 캐릭터y좌표 = 0;
  for (let rowIdx = 0; rowIdx < map.length; rowIdx++) {
    let row = map[rowIdx];
    let colIdx = row.indexOf(1);
    if (colIdx !== -1) {
      캐릭터x좌표 = rowIdx;
      캐릭터y좌표 = colIdx;
    }
  }
  map[캐릭터y좌표][캐릭터x좌표] = 0;
  for (let move of 움직임) {
    if (move === 1 && map[캐릭터y좌표 - 1][캐릭터x좌표] !== 2) {
      캐릭터y좌표--;
    }
    if (move === 2 && map[캐릭터y좌표 + 1][캐릭터x좌표] !== 2) {
      캐릭터y좌표++;
    }if (move === 3 && map[캐릭터y좌표][캐릭터x좌표 - 1] !== 2) {
      캐릭터x좌표--;
    }if (move === 4 && map[캐릭터y좌표][캐릭터x좌표 + 1] !== 2) {
      캐릭터x좌표++;
    }
  }
  map[캐릭터y좌표][캐릭터x좌표] = 1;

  // for (let i = 0; i < 움직임.length; i++) {
  //   let 이동경로 = 움직임[i];
  //   if (이동경로 === 1) {
  //     let 원본y좌표 = 캐릭터y좌표;
  //     캐릭터y좌표--;
  //     if (map[캐릭터y좌표][캐릭터x좌표] !== 2) {
  //       map[캐릭터y좌표][캐릭터x좌표] = 1;
  //       map[원본y좌표][캐릭터x좌표] = 0;
  //     } else {
  //       캐릭터y좌표 = 원본y좌표;
  //     }
  //   }
  //   if (이동경로 === 2) {
  //     let 원본y좌표 = 캐릭터y좌표;
  //     캐릭터y좌표++;
  //     if (map[캐릭터y좌표][캐릭터x좌표] !== 2) {
  //       map[캐릭터y좌표][캐릭터x좌표] = 1;
  //       map[원본y좌표][캐릭터x좌표] = 0;
  //     } else {
  //       캐릭터y좌표 = 원본y좌표;
  //     }
  //   }
  //   if (이동경로 === 3) {
  //     let 원본x좌표 = 캐릭터x좌표;
  //     캐릭터x좌표--;
  //     if (map[캐릭터y좌표][캐릭터x좌표] !== 2) {
  //       map[캐릭터y좌표][캐릭터x좌표] = 1;
  //       map[캐릭터y좌표][원본x좌표] = 0;
  //     } else {
  //       캐릭터x좌표 = 원본x좌표;
  //     }
  //   }
  //   if (이동경로 === 4) {
  //     let 원본x좌표 = 캐릭터x좌표;
  //     캐릭터x좌표++;
  //     if (map[캐릭터y좌표][캐릭터x좌표] !== 2) {
  //       map[캐릭터y좌표][캐릭터x좌표] = 1;
  //       map[캐릭터y좌표][원본x좌표] = 0;
  //     } else {
  //       캐릭터x좌표 = 원본x좌표;
  //     }
  //   }
  // }
  console.log(map);
  console.log("캐릭터위치: ", [캐릭터x좌표, 캐릭터y좌표]);
}
const 캐릭터위치 = move(지도, 움직임);
