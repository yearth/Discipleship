/*
 * @Author: Yearth
 * @Date: 2021-11-25 20:58:30
 * @Description: LeetCode 1373 二叉搜索子树的最大键值和
 * @Link: https://leetcode-cn.com/problems/maximum-sum-bst-in-binary-tree/
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function currentIsBST(left, root, right) {
  return left.isBST && right.isBST && root.val > left.max && root.val < right.min;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
function maxSumBST(root) {
  let maxSum = 0;

  function dfs(root) {
    // 每一个单独节点都可以当成是一个 BST
    if (root === null)
      return {
        isBST: true,
        min: Infinity,
        max: -Infinity,
        total: 0
      };

    const left = dfs(root.left);
    const right = dfs(root.right);

    let result = {};

    // 左子树 + 自己 + 右子树是一个 BST，才做后序操作
    if (currentIsBST(left, root, right)) {
      result.isBST = true;
      result.min = Math.min(left.min, root.val);
      result.max = Math.max(right.max, root.val);
      result.total = left.total + right.total + root.val;
      maxSum = Math.max(maxSum, result.total);
    }
    // 不是一个 BST，那就没有操作的意义了
    else {
      result.isBST = false;
    }

    return result;
  }

  dfs(root);

  return maxSum;
}
