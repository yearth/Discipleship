/*
 * @Author: Yearth
 * @Date: 2021-09-23 21:47:47
 * @Description: LeetCode 25 K 个一组翻转链表
 * @Link: https://leetcode-cn.com/reverse-nodes-in-k-group/
 */

// 反转 cnt 个节点
const reverse = (head, cnt) => {
  if (cnt === 1) return head;
  let tail = head.next,
    p = reverse(head.next, cnt - 1);
  head.next = tail.next;
  tail.next = head;
  return p;
};

// 如果剩余节点数量不小于 k，则将下 k 个节点进行反转
const reverseK = (head, cnt) => {
  let p = head;
  while (--k && p) p = p.next;
  if (p === null) return head;
  return reverse(head, cnt);
};

const reverseKGroup = (head, k) => {
  const hair = new ListNode(null, head);
  let p = hair,
    q = p.next;
  while ((p.next = reverseK(q, k)) !== q) {
    p = q;
    q = q.next;
  }
  return sentry.next;
};
