/*
 * @Author: Yearth
 * @Date: 2021-10-13 22:40:10
 * @Description: LeetCode 138 复制带随机指针的链表
 * @Link: https://leetcode-cn.com/problems/copy-list-with-random-pointer/
 */

const copyRandomList = head => {
  if (head === null) return null;

  let p = head,
    q = null;

  // 第一次遍历完成节点的复制
  while (p) {
    q = new Node(p.val, p.next, p.random);
    p.next = q;
    p = q.next;
  }

  // 第二次遍历让 random 指向对的位置
  p = head.next;
  while (p) {
    if (p.random !== null) p.random = p.random.next;
    // 步进两次，只操作复制的节点
    p = p.next;
    if (p) p = p.next;
  }

  // 第三次遍历将两支链表断开
  const newHead = head.next;
  p = head;
  while (p) {
    q = p.next;
    p.next = q.next;
    if (p.next) q.next = p.next.next;
    p = p.next;
  }

  return newHead;
};
