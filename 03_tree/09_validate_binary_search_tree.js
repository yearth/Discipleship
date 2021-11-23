/*
 * @Author: Yearth
 * @Date: 2021-11-23 21:36:44
 * @Description: LeetCode
 * @Link: https://leetcode-cn.com/problems/validate-binary-search-tree/
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
 * @param {Array} ans
 * @return {boolean}
 */
function dfs(root, ans) {
  if (root === null) return null;

  dfs(root.left, ans);
  ans.push(root.val);
  dfs(root.right, ans);
  return;
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isValidBST(root) {
  const ans = [];
  let isValid = true;
  dfs(root, ans);
  ans.reduce((cur, pre) => {
    if (cur < pre) {
      isValid = false;
    }
    return cur;
  });
  return isValid;
}
