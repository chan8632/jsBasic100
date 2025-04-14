"use strict";
const fs = require("fs");
const input = fs.readFileSync("./tc.txt").toString().trim();
// 1. 반 점수 모두가 담긴 전교 점수 다중 리스트를 만들어주세요. ok
// return를 두 개를 해야 할 때
// 2. 반 평균을 구하세요.
// 3. 반 1등 점수를 구하세요.
// 4. 전교 평균을 구하세요.
//한 반에 30명인 학생, 총 7개의 반
//아래 코드는 힌트입니다.

let student_score = [];
let class_score = [];
let total_score = [];
for (let i = 0; i < 7; i++) {
  class_score = [];
  for (let j = 0; j < 30; j++) {
    student_score = [];
    for (let k = 0; k < 5; k++) {
      student_score.push(Math.floor(Math.random() * 101));
    }
    class_score.push(student_score);
  }
  total_score.push(class_score);
}

// console.log("반 점수 모두가 담긴 전교 점수 다중 리스트");
// console.log(total_score);

// 2. 반 평균을 구하세요. ok

// 3. 반 1등 점수를 구하세요. ok

// 4. 전교 평균을 구하세요.

let studentSum = 0;
let classSum = 0;
let classAvgList = [];
let classFirstList = [];
let totalAvg = [];
for (let eathClass of total_score) {
  let eachClassEachScoreSumList = [];
  for (let eathStudent of eathClass) {
    studentSum = eathStudent.reduce((a, b) => a + b);
    eachClassEachScoreSumList.push(studentSum);
  }
  let eachClassSum = eachClassEachScoreSumList.reduce((a, b) => a + b);
  let eachClassAvg = Math.floor(eachClassSum / 150);
  let eachClassFirst = Math.floor(Math.max(...eachClassEachScoreSumList) / 5);
  classAvgList.push(eachClassAvg);
  classFirstList.push(eachClassFirst);
  totalAvg.push(eachClassSum);
}
console.log("반 평균");
console.log(classAvgList);

console.log("반 일등들");
console.log(classFirstList);

console.log("전교 평균");
console.log(Math.floor(totalAvg.reduce((a,b)=> a + b) / (5* 30 * 7)));
