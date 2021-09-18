/*
 * @Author: Yearth
 * @Date: 2021-09-17 21:57:29
 * @Description: LeetCode 206 反转链表
 * @Link: https://leetcode-cn.com/reverse-linked-list/
 */

// const reverseList = head => {
//   if (head === null || head.next === null) return head;
//   let tail = head.next,
//     p = reverseList(head.next);
//   head.next = tail.next;
//   tail.next = head;
//   return p;
// };

// const reverseList = head => {
//   let pre = null,
//     cur = head,
//     nxt = head?.next;

//   while (cur) {
//     cur.next = pre;

//     pre = cur;
//     cur = nxt;
//     nxt = nxt?.next;
//   }
//   return pre;
// };

const reverseList = head => {
  let cur = head,
    pre = null;
  while (cur) [cur.next, pre, cur] = [pre, cur, cur.next];
  return pre;
};
