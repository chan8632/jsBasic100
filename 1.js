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
let countrySimilarToKoreaInSize = Number.POSITIVE_INFINITY;
let similarCountry = "";

for (let country in nationWidth) {
  if (Math.abs(koreaWidth - nationWidth[country]) === 0) {
    continue;
  } else if (
    Math.abs(koreaWidth - nationWidth[country]) < countrySimilarToKoreaInSize
  ) {
    similarCountry = country;
    countrySimilarToKoreaInSize = Math.abs(koreaWidth - nationWidth[country]);
  }
}

console.log(`${similarCountry}, ${countrySimilarToKoreaInSize}`);
