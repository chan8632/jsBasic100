"use strict";
const fs = require("fs");
const input = fs.readFileSync("./tc.txt").toString().trim();
const graph = {
  A: ["E", "C", "B"],
  B: ["A"],
  C: ["A"],
  D: ["E", "F"],
  E: ["D", "A"],
  F: ["D"],
};

// graph 자료구조와 startNode를 입력
const DFS = (graph, startNode) => {
  let visited = [];
  let needVisit = [startNode];
  while (needVisit.length !== 0) {
    let node = needVisit.shift();
    if (!visited.includes(node)) {
      visited.push(node);
      needVisit = [...graph[node], ...needVisit];
    }
  }
  return visited;
};
console.log(DFS(graph, "E"));