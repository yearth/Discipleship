/*
 * @Author: Yearth
 * @Date: 2021-11-02 22:09:03
 * @Description: LeetCode 144 二叉树的前序遍历
 * @Link: https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
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
 * @return {number[]}
 */

const dfs = (root, ans) => {
  if (root === null) return null;

  ans.push(root.val);
  dfs(root.left, ans);
  dfs(root.right, ans);
  return;
};

const preorderTraversal = root => {
  const ans = [];
  dfs(root, ans);
  return ans;
};
