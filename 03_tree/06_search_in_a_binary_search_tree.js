/*
 * @Author: Yearth
 * @Date: 2021-11-15 21:56:25
 * @Description: LeetCode 700 二叉搜索树中的搜索
 * @Link: https://leetcode-cn.com/problems/search-in-a-binary-search-tree/
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
function searchBST(root, val) {
  function dfs(root, val) {
    if (root === null) return root;
    if (root.val === val) return root;
    return root.val > val ? dfs(root.left, val) : dfs(root.right, val);
  }
  return dfs(root, val);
}
