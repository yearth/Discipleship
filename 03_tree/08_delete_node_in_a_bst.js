/*
 * @Author: Yearth
 * @Date: 2021-11-22 23:26:15
 * @Description: LeetCode 450 删除二叉搜索树中的节点
 * @Link: https://leetcode-cn.com/problems/delete-node-in-a-bst/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function deleteNode(root, key) {
  if (root === null) return null;
  if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else {
    if (!root.left) return root.right;
    if (!root.right) return root.left;

    let node = root.right;
    while (node.left) {
      node = node.left;
    }

    node.left = root.left;
    root = root.right;
  }
  return root;
}
