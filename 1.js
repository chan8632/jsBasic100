"use strict";
const fs = require("fs");
const input = fs.readFileSync("./tc.txt").toString().trim();
// 1. 반 점수 모두가 담긴 전교 점수 다중 리스트를 만들어주세요. ok
// return를 두 개를 해야 할 때
// 2. 반 평균을 구하세요.
// 3. 반 1등 점수를 구하세요.
// 4. 전교 평균을 구하세요.
//한 반에 30명인 학생, 총 7개의 반
let student_score = [];
let class_score = [];
let total_score = [];

function generate_student_score() {
  student_score = [];
  for (let i = 0; i < 5; i++) {
    student_score.push(Math.floor(Math.random() * 100) + 1);
  }
  return student_score;
}

function generate_class_score() {
  class_score = [];
  for (let i = 0; i < 30; i++) {
    class_score.push(generate_student_score());
  }
  return class_score;
}

function generate_total_score() {
  total_score = [];
  for (let i = 0; i < 7; i++) {
    total_score.push(generate_class_score());
  }
  return total_score;
}

class ClassInfo {
  constructor() {
    this.school = generate_class_score();
  }
  findClassAvg() {
    let avg_score = this.school;
    for (let i = 0; i < 7; i++) {
      let classTotal = 0;
      for (let j = 0; j < 30; j++) {
        let studentTotal = 0;
        for (let k = 0; k < 5; k++) {
          studentTotal += avg_score[i][j][k];
        }
        avg_score[i][j] = studentTotal;
        classTotal += avg_score[i][j];
      }
      avg_score[i] = Math.floor(classTotal / 150);
    }
    return avg_score;
  }  
}
const school = new ClassInfo();
console.log(school.findClassAvg());
