/*
 * @Author: Yearth
 * @Date: 2021-12-20 22:00:55
 * @Description: LeetCode 103 二叉树的锯齿形层序遍历
 * @Link: https://leetcode-cn.com/problems/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function zigzagLevelOrder(root) {
  if (!root) return [];
  const ans = [];
  const queue = [];
  let isForward = true;

  queue.push(root);

  while (queue.length !== 0) {
    const cur = [];
    const size = queue.length;

    for (let i = 1; i <= size; i++) {
      const node = queue.shift();

      isForward ? cur.push(node.val) : cur.unshift(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    ans.push(cur);
    isForward = !isForward;
  }

  return ans;
}
