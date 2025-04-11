"use strict";
const fs = require("fs");
const input = fs.readFileSync("./tc.txt").toString().trim();

// let alphabetList = [];
// for (let i = 65; i < 91; i++) {
//   let alphabet = String.fromCharCode(i);
//   alphabetList.push(alphabet);
// }

// function generateMedicine() {
//   let medicineList = [];
//   for (let i = 0; i < 100; i++) {
//     let ingredients = [];
//     while (ingredients.length < 8) {
//       let ingredient =
//         alphabetList[Math.floor(Math.random() * alphabetList.length)];
//       if (!ingredients.includes(ingredient)) {
//         ingredients.push(ingredient);
//       }
//     }
//     medicineList.push(ingredients.join(""));
//   }
//   return medicineList;
// }
// function findCommonMedicines(inputIngredients, matchCount) {
//   const medicineList = generateMedicine();
//   const inputSet = new Set(inputIngredients);
//   let result = [];
//   for (let medicine of medicineList) {
//     let medicineSet = new Set(medicine);
//     let commonSet = new Set([...medicineSet].filter((item) => inputSet.has(item)));
//     if (commonSet.size === matchCount) {
//       result.push(medicine);
//     }
//   }
//   return result;
// }

// const inputIngredients = input[0];
// const matchCount = parseInt(input[1], 10);

// console.log(findCommonMedicines(inputIngredients, matchCount));



// 문자열을 문자 배열로 분할
const data = input.split("");

// 괄호 검증을 위한 스택
let stack = [];

function parsing() {
  for (let str of data) {
    if (str === "(") {
      stack.push(str);
    } else if (str === ")") {
      if (stack.length === 0) {
        console.log("False"); // 닫는 괄호가 더 많음
        return;
      }
      stack.pop();
    }
  }

  // 최종적으로 스택이 비어있어야 정상
  if (stack.length === 0) {
    console.log("True"); // 괄호 정상
  } else {
    console.log("False"); // 여는 괄호 남음
  }
}

parsing();
