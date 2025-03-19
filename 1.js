"use strict";
const fs = require("fs");
const input = fs.readFileSync("./tc.txt").toString().trim();

// 예를 들어 2번 순회했을 때 변하기 전의 리스트와 변한 후의 리스트의 값은 아래와 같습니다.

// 순회전_리스트 = [10, 20, 25, 27, 34, 35, 39]
// 순회후_리스트 = [35, 39, 10, 20, 25, 27, 34]

// 2번
// 왼 = 배열길이에서 - 2(입력한 수), 2(입력한 수) , 오 = 0(처음), 배열길이에서 - 2(입력한 수)

const l = [10, 20, 25, 27, 34, 35, 39]; //기존 입력 값
const n = parseInt(input, 10);
let diffList = [];
function rotate(inL, inN) {
    let leftArr = [...inL].splice(inL.length - inN, inN);
    let rightArr = [...inL].splice(0, inL.length - inN);
    const rotArr = [...leftArr, ...rightArr];
    for (let i = 0; i < inL.length; i++){
        diffList.push(Math.abs(inL[i] - rotArr[i]));
    }
    const diffSortList = [...diffList].sort((a, b) => a - b);
    const minIdx = diffList.indexOf(diffSortList[0]);
    console.log('index: ' + minIdx);
    console.log('value: ' + inL[minIdx] + ',' + rotArr[minIdx]);
}

rotate(l, n);