"use strict";
const fs = require("fs");
const input = fs.readFileSync("./tc.txt").toString().trim();

const arr = input.split('');
let obj = {};
let res = '';
for (let i = 0; i < arr.length; i++){
  if (obj[arr[i]] === undefined) {
    obj[arr[i]] = 1;
  } else {
    obj[arr[i]] += 1;
  }
}
for (let idx in obj) {
  res += idx;
  res += obj[idx];
}
console.log(res);