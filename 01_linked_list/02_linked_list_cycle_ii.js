/*
 * @Author: Yearth
 * @Date: 2021-09-16 01:01:55
 * @Description: LeetCode 142 环形链表 II
 * @Link: https://leetcode-cn.com/problems/linked-list-cycle-ii/
 */

const doDetectCycle = (p, q) => {
  while (p && q) {
    if (p === q) return p;
    p = p.next;
    q = q.next;
  }
};

const detectCycle = head => {
  let slow = head,
    fast = head,
    detect = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return doDetectCycle(detect, slow);
  }
  return null;
};
