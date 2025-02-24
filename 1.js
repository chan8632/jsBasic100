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
  if (start === end) return 0; // 시작 노드와 목표노드가 같다면 바로 0 리턴
  let visited = new Set();
  let queue = [[start, 0]];

  while (queue.length > 0) { 
    let [node, distance] = queue.shift(); // 큐에서 맨 앞 요소를 꺼냄
    for (let neighbor of graph[node]) { // '최단 거리'가 중요하니 일단 인접노드부터 살펴보기
      if (neighbor === end) {
        return distance + 1; // 도착 노드 발견 시(제일 먼저 도착 노드를 검사), 현재 거리 + 1 반환
      }
      // 현재 노드의 인접 노드를 순회
      if (!visited.has(node)) { // 중복 방지
        visited.add(node); // 방문 기록
        queue.push([neighbor, distance + 1]); // 인접 노드들을 큐에 추가하면서 거리 + 1
      }
    }
  }
  return -1; // 경로가 없음
}

console.log(shortDis(graph, "F", "D"));
