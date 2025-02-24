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
const BFS = (graph, startNode) => {
  let visited = []; // 방문한 노드 기록 목록
  let needVisit = []; // 방문해야 할 노드 목록(큐 역할, 방문대기목록)
  needVisit.push(startNode); // 시작 노드를 방문 대기 목록에 추가
  while (needVisit.length !== 0) { // 방문해야할 노드가 남아있다면 실행
    let node = needVisit.shift(); // 큐에서 맨 앞 노드를 꺼냄
    if (!visited.includes(node)) {
      // 방문한 적이 없다면
      visited.push(node); // 방문 기록 남기기
      needVisit.push(...graph[node]); // 현재 노드는 큐에 추가 되어 있는 상태로 그 뒤에 현재 노드의 이웃 노드를 큐에 추가
    }
  }
  return visited; // 방문 순서 반환
};
console.log(BFS(graph, "E"));