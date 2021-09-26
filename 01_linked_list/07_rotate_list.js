/*
 * @Author: Yearth
 * @Date: 2021-09-26 22:51:54
 * @Description: LeetCode 61 旋转链表
 * @Link: https://leetcode-cn.com/problems/rotate-list/
 */
const rotateRight = (head, k) => {
  if (head === null || head.next === null) return head;

  let p = head,
    len = 1;
  // 获取链表长度
  while (p.next) {
    p = p.next;
    len++;
  }

  // 计算需要移动的长度并移动
  p.next = head;
  k %= len;
  k = len - k;
  while (k--) p = p.next;

  head = p.next;
  p.next = null;
  return head;
};
