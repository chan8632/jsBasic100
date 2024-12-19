"use strict";
const fs = require("fs");
const input = fs.readFileSync("./tc.txt").toString();
const n = parseInt(input, 10);

for (let i = 0; i <= n; i++) {
  let star = "";
  for (let j = 1; j <= n - j; j++) {
    star += " ";
  }
  for (let k = 1; k <= 2 * n - 1; k++) {
    star += "*";
  }
  console.log(star);
}
