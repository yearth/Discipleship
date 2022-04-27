/*
 * @Author: Yearth
 * @Description: LeetCode 128 最长连续序列
 * @Link: https://leetcode-cn.com/problems/longest-consecutive-sequence/
 */
import { UnionFind } from "./00.union_find.js";

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const u = new UnionFind(nums.length);
  const hash = new Map();

  for (const [i, n] of [...new Set(nums)].entries()) {
    if (!hash.has(n)) hash.set(n, i);
    if (hash.has(n - 1)) u.union(i, hash.get(n - 1));
    if (hash.has(n + 1)) u.union(i, hash.get(n + 1));
  }

  let ans = 0;
  for (const i of nums.keys()) {
    if (u.find(i) === i) ans = Math.max(ans, u.size[i]);
  }
  return ans;
};

longestConsecutive([1, 2, 0, 1]);
