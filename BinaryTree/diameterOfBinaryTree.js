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
 * @return {number}
 */
var diameterOfBinaryTree = function (node) {
  const res = [0];
  helper(node, res);
  return res[0];
};

const helper = (node, res) => {
  if (!node) return 0;
  const left = helper(node.left, res);
  const right = helper(node.right, res);
  res[0] = Math.max(res[0], left + right);
  return Math.max(left, right) + 1;
};
