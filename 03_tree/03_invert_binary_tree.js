/*
 * @Author: Yearth
 * @Date: 2021-11-04 20:47:55
 * @Description: LeetCode 226 翻转二叉树
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
const dfs = root => {
  if (root === null) return null;

  const l = dfs(root.left);
  const r = dfs(root.right);
  root.left = r;
  root.right = l;

  return root;
};

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = root => {
  return dfs(root);
};
