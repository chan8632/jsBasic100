"use strict";
const fs = require("fs");
const input = fs.readFileSync("./tc.txt").toString().trim();

let limit = (50 - input.length) / 2;
let res = "";
for (let i = 0; i < limit; i++) {
  res += "=";
}
res += input;
for (let j = 0; j < limit; j++){
  res += "=";
}

console.log(res.length);
