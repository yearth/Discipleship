/*
 * @Author: Yearth
 * @Date: 2021-11-10 21:38:33
 * @Description: LeetCode 230 二叉搜索树中第K小的元素
 * @Link: https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/
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
 * @param {number} k
 * @return {number}
 */
const kthSmallest = function (root, k) {
  const ans = [];
  function dfs(root) {
    if (root === null) return null;

    dfs(root.left);
    ans.push(root.val);
    dfs(root.right);

    return root;
  }
  dfs(root);

  return ans[k - 1];
};
