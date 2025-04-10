"use strict";
const fs = require("fs");
const input = fs.readFileSync("./tc.txt").toString().trim().split(" ");

let alphabetList = [];
for (let i = 65; i < 91; i++) {
  let alphabet = String.fromCharCode(i);
  alphabetList.push(alphabet);
}

function generateRandomMedicines() {
  let medicineList = [];
  for (let i = 0; i < 100; i++) {
    let ingredients = [];
    while (ingredients.length < 8) {
      let ingredient =
        alphabetList[Math.floor(Math.random() * alphabetList.length)];
      if (!ingredients.includes(ingredient)) {
        ingredients.push(ingredient);
      }
    }
    medicineList.push(ingredients.join(""));
  }
  return medicineList;
}

function findSimilarMedicines(inputIngredients, matchCount) {
  let medicineList = generateRandomMedicines();
  let inputSet = new Set(inputIngredients);
  let resultList = [];

  for (let medicine of medicineList) {
    let medicineSet = new Set(medicine);
    let commonSet = new Set(
      [...medicineSet].filter((item) => inputSet.has(item))
    );

    if (commonSet.size === matchCount) {
      resultList.push(medicine);
    }
  }
  return resultList;
}

const inputIngredients = input[0];
const matchCount = parseInt(input[1], 10);

console.log(findSimilarMedicines(inputIngredients, matchCount));
