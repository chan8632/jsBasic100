"use strict";
const fs = require("fs");
const input = fs.readFileSync("./tc.txt").toString().trim();

const user_input = input.split(" ");
const start = parseInt(user_input[0], 10);
const end = parseInt(user_input[1], 10);

const graph = {
  1: [2, 3, 4],
  2: [1, 3, 4, 5, 6],
  3: [1, 2, 7],
  4: [1, 2, 5, 6],
  5: [2, 4, 6, 7],
  6: [2, 4, 5, 7],
  7: [3, 5, 6],
};


function findMaxDistance(graph, start, end) {
  let maxDistance = 0;
  // dfs 노드, 방문한 노드, 거리 로 구분
  function dfs(node, visited, distance) {
    if (node === end) {
      // 목표 노드에 달성시 가장 큰 거리 최신화
      maxDistance = Math.max(maxDistance, distance);
      // 가장 최근에 호출한 dfs로 가기
      return;
    }
    
    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        dfs(neighbor, visited, distance + 1);
        visited.delete(neighbor); // 백트래킹
      }
    }
  }
  // 처음 시작를 넣고 방문 노드는 Set에 추가
  dfs(start, new Set([start]), 0);
  // 마지막에 가장 큰 거리 배출
  return maxDistance;
}

// 결과 출력
console.log(findMaxDistance(graph, start, end)); // 6
