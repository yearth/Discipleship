/*
 * @Author: Yearth
 * @Date: 2021-11-24 23:39:51
 * @Description: LeetCode 17 BiNode
 * @Link: https://leetcode-cn.com/problems/binode-lcci/
 */

/**
 * @param {TreeNode} root
 * @param {Array} ans
 * @return {TreeNode}
 */
function dfs(root, ans) {
  if (root === null) return null;

  dfs(root.left, ans);
  ans.push(root);
  dfs(root.right, ans);
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function convertBiNode(root) {
  if (root === null) return null;

  const ans = [];
  dfs(root, ans);

  ans.reduce((pre, cur) => {
    pre.left = null;
    cur.left = null;
    pre.right = cur;
    return cur;
  });

  return ans[0];
}
