"use strict";
const fs = require("fs");
const input = fs.readFileSync("./tc.txt").toString().trim();

const a = [1, 2, 3, 4];
const b = ["a", "b", "c", "d"];
let c = [];

// a.forEach((val, idx) => {
//   if (idx % 2 === 0) {
//     c.push([val, b[idx]]);
//   } else {
//     c.push([b[idx], val]);
//   }
// })
// console.log(c);

let res = a.map((val, idx) => {
  if (idx % 2 === 0) {
    return [val, b[idx]];
  } else {
    return [b[idx], val];
  }
});

console.log(res);
// let res = [];
// for (let i = 0; i < a.length; i++) {
//   if (i % 2 === 0) {
//     res.push([a[i], b[i]]);
//   } else {
//     res.push([b[i], a[i]]);
//   }
// }
// console.log(res);
