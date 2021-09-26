/*
 * @Author: Yearth
 * @Date: 2021-09-19 00:21:49
 * @Description: LeetCode 92 反转链表 II
 * @Link: https://leetcode-cn.com/problems/reverse-linked-list-ii/
 */

const reverseList = (head, cnt) => {
  if (cnt === 1) return head;
  let tail = head.next,
    p = reverseList(head.next, cnt - 1);
  head.next = tail.next;
  tail.next = head;
  return p;
};

const reverseBetween = (head, left, right) => {
  const hair = {
    val: null,
    next: head
  };
  let p = hair;
  const cnt = right - left + 1;
  while (--left) p = p.next;
  p.next = reverseList(p.next, cnt);
  return sentry.next;
};
