"use strict";
const fs = require("fs");
const input = fs.readFileSync("./tc.txt").toString().trim();
const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};

function shortDis(graph, start, end) {
  let visited = new Set();
  let queue = [[start, 0]];
  while (queue.length !== 0) {
    // 이렇게 변수를 세팅하는게 핵심 포인트 였음.
    let [curNode, distance] = queue.shift();
    // 일단 인접노드를 다 꺼내고 방문 검사를 하는 것.
    for (let neighbor of graph[curNode]) {
      if (neighbor === end) {
        return distance + 1;
      }
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, distance + 1]);
      }
    }
  }
  return -1;
}

console.log(shortDis(graph, "A", "F"));
