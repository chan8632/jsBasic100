"use strict";
const fs = require("fs");
const input = fs.readFileSync("./tc.txt").toString().trim();
let obj = {};

for (let i = 0; i <= 1000; i++){
  let tem = i;
  while (tem > 0) {
    let num = tem % 10;
    if (obj[num]) {
      obj[num]++;
    } else {
      obj[num] = 1;
    }
    tem = parseInt(tem / 10, 10);
  }
}

console.log(obj[1]);