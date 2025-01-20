"use strict";
const fs = require("fs");
const input = fs.readFileSync("./tc.txt").toString().trim();

const list = input.split("");

function checkParentheses(list) {
    let countParentheses = 0;
    let countSquare = 0;
    let countCurly = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] === ")" && countParentheses === 0) {
      console.log("NO");
      return false;
    } else if (list[i] === ")" && countParentheses > 0) {
      countParentheses--;
    } else if (list[i] === "(") {
      countParentheses++;
    } else if (list[i] === "}" && countCurly === 0) {
      console.log("NO");
      return false;
    } else if (list[i] === "}" && countCurly > 0) {
      countCurly--;
    } else if (list[i] === "{") {
      countCurly++;
    } else if (list[i] === "]" && countSquare === 0) {
      console.log("NO");
      return false;
    } else if (list[i] === "]" && countSquare > 0) {
      countSquare--;
    } else if (list[i] === "[") {
      countSquare++;
    }
  }
  if (countParentheses === 0 && countCurly === 0 && countSquare === 0) {
    console.log("YES");
    return true;
  } else {
    console.log("NO");
    return false;
  }
}

checkParentheses(list);
