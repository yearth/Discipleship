/*
 * @Author: Yearth
 * @Date: 2021-11-12 22:33:58
 * @Description: LeetCode 538 把二叉搜索树转换为累加树
 * @Link: https://leetcode-cn.com/problems/convert-bst-to-greater-tree/
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
 * @return {TreeNode}
 */
function convertBST(root) {
  let sum = 0;

  function dfs(root) {
    if (root === null) return null;

    dfs(root.right);

    sum += root.val;
    root.val = sum;

    dfs(root.left);

    return root;
  }

  return dfs(root);
}
