/*
 * @Author: Yearth
 * @Date: 2021-09-27 23:28:36
 * @Description: LeetCode 19 删除链表的倒数第 N 个节点
 * @Link: https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
 */

// const removeNthFromEnd = (head, n) => {
//   if (head === null || head.next === null) return null;
//   const hair = new ListNode(null, head);
//   let p = head,
//     len = 1,
//     k = 0;
//   while (p.next) {
//     p = p.next;
//     len++;
//   }

//   p = hair;
//   k = len - n;
//   while (k--) p = p.next;

//   p.next = p.next.next;
//   return hair.next;
// };

const removeNthFromEnd = (head, n) => {
  if (head === null || head.next === null) return null;
  const hair = new ListNode(null, head);
  let p = hair,
    q = head;

  while (n--) q = q.next;

  while (q) {
    p = p.next;
    q = q.next;
  }

  p.next = p.next.next;
  return hair.next;
};
