"use strict";
const fs = require("fs");
const input = fs.readFileSync("./tc.txt").toString().trim();

const inputData = input.split("\r\n");

function combination(arr) {
  const combi = [];

  const f = (prefix, chars) => {
    for (let i = 0; i < chars.length; i++) {
      combi.push(prefix + chars[i]);
      // slice와 재귀 함수를 통해 combination를 구할 수 있다.
      f(prefix + chars[i], chars.slice(i + 1));
    }
  };
  f("", arr);
  const result = combi.filter((arr) => arr.length === n);
  console.log(result);
  return result.length;
}

const arr = inputData[0].split(",");
const n = parseInt(inputData[1], 10);
console.log(combination(arr));
