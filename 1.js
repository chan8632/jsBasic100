"use strict";
const fs = require("fs");
const input = fs.readFileSync("./tc.txt").toString().trim();

// countFood라는 걸 어떤 변수로 만들면 더 좋을까?
const [allFood, countFood] = input.split(" ").map(Number);
let circleTable = Array(allFood).fill(0).map((val, idx) => idx + 1);
let eatIndex = 0;
while (circleTable.length >= 3) {
    if (eatIndex >= circleTable.length) {
        // 배열을 초과한 경우, 실제로는 배열 길이만큼 앞으로 돌아와야 한다.
        // 즉, 배열의 길이를 한 바퀴 돌았다고 가정하고, 초과한 만큼만 남긴다.
        // 원래는 -로 구현했는데 그러면 숫자가 커질수록 여러번 빼야함
        // 그러나 %로 구현하면 한 번에 뺄 수 있음
        // % 는 -를 여러 번 구현한 것임.    
        eatIndex %= circleTable.length;
    }
    circleTable.splice(eatIndex, 1);
    // [2,3,4,5,6]
    // [2,3,5,6]
    // [3,5,6]
    // [3,5]
    console.log('남아있는 음식:' + circleTable);
    // 자기자신을 빼고 순서를 세야하기에 -1를 해줘야 한다.
    eatIndex += (countFood - 1);
    // 2
    // 4
    // 0
    // 2
    console.log('없앨 음식 인덱스:' + eatIndex);
}

console.log(circleTable);