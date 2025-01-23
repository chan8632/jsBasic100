"use strict";
const fs = require("fs");
const input = fs.readFileSync("./tc.txt").toString().trim();
const nationWidth = {
  korea: 220877,
  Rusia: 17098242,
  China: 9596961,
  France: 543965,
  Japan: 377915,
  England: 242900,
};

const koreaWidth = nationWidth.korea;
const countrySimilarToKoreaInSize = Object.keys(nationWidth).reduce((a, b) => {
  nationWidth[a] > nationWidth[b] ? a : b;
});

console.log(nationWidth[countrySimilarToKoreaInSize]);