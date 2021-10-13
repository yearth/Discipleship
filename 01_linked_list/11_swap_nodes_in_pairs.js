/*
 * @Author: Yearth
 * @Date: 2021-10-12 22:45:29
 * @Description: LeetCode 24 两两交换链表中的节点
 * @Link: https://leetcode-cn.com/problems/swap-nodes-in-pairs/
 */

const reverseNode = (head, count) => {
  if (count === 1) return head;
  let tail = head.next,
    p = reverseNode(head.next, count - 1);
  head.next = tail.next;
  tail.next = head;
  return p;
};

const reverseKNode = (head, k) => {
  let p = head,
    count = k;
  while (--k && p) p = p.next;
  if (p === null) return head;
  return reverseNode(head, count);
};

const swapPairs = head => {
  const hair = new ListNode(null, head);
  let p = hair,
    q = hair.next;
  while ((p.next = reverseKNode(q, 2)) !== q) {
    p = q;
    q = q.next;
  }
  return hair.next;
};
