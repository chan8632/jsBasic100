"use strict";
const fs = require("fs");
const input = fs.readFileSync("./tc.txt").toString().trim();

const inputCount = parseInt(input, 10);

function generateSequence(step) {
    let currentDigit = "1";
    for (let i = 1; i < step; i++){
        currentDigit = nextTermForm(currentDigit);
    }
    return currentDigit;
}

function nextTermForm(term) {
    let nextTerm = "";
    for (let i = 1; i < 10; i++) {
        let count = [...term].filter(x => x === String(i)).length;
        if (count >= 1) {
            nextTerm += String(i) + String(count);
        }
    }
    return nextTerm;
}

console.log(generateSequence(inputCount));