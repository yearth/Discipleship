/*
 * @Author: Yearth
 * @Date: 2021-11-16 22:42:15
 * @Description: LeetCode 701 二叉搜索树中的插入操作
 * @Link: https://leetcode-cn.com/problems/insert-into-a-binary-search-tree/
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
 * @param {number} val
 * @return {TreeNode}
 */
function insertIntoBST(root, val) {
  function dfs(root, val) {
    if (root === null) return new TreeNode(val);

    if (val > root.val) root.left = dfs(root.left, val);
    if (val < root.val) root.right = dfs(root.right, val);
  }

  return dfs(root, val);
}
