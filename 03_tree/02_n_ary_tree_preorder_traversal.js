/*
 * @Author: Yearth
 * @Date: 2021-11-03 21:33:44
 * @Description: LeetCode 589 N 叉树的前序遍历
 * @Link: https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/
 */

/**
 * Definition for a Node.
 *
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

const dfs = (root, ans) => {
  if (root === null) return null;
  ans.push(root.val);
  for (let i = 0; i < root.children.length; i++) dfs(root.children[i], ans);
};
/**
 * @param {Node|null} root
 * @return {number[]}
 */
const preorder = root => {
  const ans = [];
  dfs(root, ans);
  return ans;
};
