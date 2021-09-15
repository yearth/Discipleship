/*
 * @Author: Yearth
 * @Date: 2021-09-15 00:40:47
 * @Description: LeetCode 141 环形链表
 * @Link: https://leetcode-cn.com/problems/linked-list-cycle/
 */

// 常规思路：cache，空间复杂度 O(n)
const hasCycle = head => {
  const cache = new Map();
  let p = head,
    cnt = 0;
  while (p && p.next) {
    if (cache.has(p)) return true;
    cache.set(p, cnt);
    p = p.next;
    cnt++;
  }
  return false;
};

// O(1)思路：快慢指针
const hasCycle = head => {
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
};
