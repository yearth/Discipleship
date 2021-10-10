/*
 * @Author: Yearth
 * @Date: 2021-10-10 22:15:00
 * @Description: LeetCode 83 删除排序链表中的重复元素
 * @Link: https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/
 */

const deleteDuplicates = head => {
  if (head === null) return head;

  let p = head;
  while (p.next) {
    if (p.val === p.next.val) {
      p.next = p.next.next;
    } else {
      p = p.next;
    }
  }
  return head;
};
