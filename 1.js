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
      student_score.push(Math.floor(Math.random() * 100) + 1);
    }
    class_score.push(student_score);
  }
  total_score.push(class_score);
}


let student_sum = 0;
let studentAvg = 0;
let classSum = 0;
let classAvg = 0;
let totalAverage = [];

for (let c of total_score){
  let classTotal = [];
  for (let student of c) {
    student_sum = student.reduce((a, b) => a + b);
    studentAvg = student_sum / 5;
    classTotal.push(studentAvg);
  }
  console.log(`${total_score.indexOf(c) + 1}반 평균 : `);
  console.log(classTotal);
  console.log(`${total_score.indexOf(c) + 1}반 일등 : `);
  console.log(Math.max(...classTotal));
  console.log('=======================================');

  classSum = classTotal.reduce((a, b) => a + b);
  classAvg = classSum / 30;
  totalAverage.push(classAvg);
}
console.log('전체 평균:')
console.log(totalAverage);
// console.log(total_score);