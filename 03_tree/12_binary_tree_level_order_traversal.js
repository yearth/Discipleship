/*
 * @Author: Yearth
 * @Date: 2021-11-29 22:42:30
 * @Description: LeetCode 102 二叉树的层序遍历
 * @Link: https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
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
function levelOrder(root) {
  if (!root) return [];
  const ans = [];
  const queue = [];

  // root 先入队，启动循环
  queue.push(root);
  while (queue.length !== 0) {
    // 当前层需要遍历的节点个数
    const size = queue.length;
    // 创建当前层
    ans.push([]);
    for (let i = 1; i <= size; ++i) {
      // 取节点，并且需要进行出队操作，否则遍历不完了
      const node = queue.shift();
      const cur = ans[ans.length - 1];
      cur.push(node.val);
      // 如果有孩子，则入队，方便继续遍历
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return ans;
}
