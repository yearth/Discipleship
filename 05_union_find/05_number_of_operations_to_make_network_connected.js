/*
 * @Author: Yearth
 * @Date: 2021-11-02 22:09:03
 * @Description: LeetCode 1319 连通网络的操作次数
 * @Link: https://leetcode-cn.com/problems/number-of-operations-to-make-network-connected/
 */
import { UnionFind } from "./00.union_find.js";
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function (n, connections) {
  if (n - 1 !== connections.length) return -1;

  const unionFind = new UnionFind(n);
  for (const [x, y] of connections) {
    unionFind.union(x, y);
  }
  let sets = 0;
  for (let i = 0; i < n; i++) {
    if (unionFind.parents[i] === i) sets++;
  }
  return sets - 1;
};
