/*
 * @Author: Yearth
 * @Date: 2021-10-11 23:02:27
 * @Description: LeetCode 82 删除排序链表中的重复元素 II
 * @Link: https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/
 */

const deleteDuplicates = head => {
  const hair = new ListNode(null, head);

  let p = hair,
    q = null;

  while (p.next) {
    if (p.next.next && p.next.val === p.next.next.val) {
      q = p.next.next;

      while (q && q.val === p.next.val) {
        q = q.next;
      }

      p.next = q;
    } else {
      p = p.next;
    }
  }

  return hair.next;
};
