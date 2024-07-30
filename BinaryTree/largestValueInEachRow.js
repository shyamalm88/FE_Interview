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
var largestValues = function (root) {
  var res = [];
  dfs(root, 0, res);
  return res;
};

var dfs = function (root, row, res) {
  if (!root) return;
  res[row] = Math.max(
    res[row] === undefined ? Number.MIN_SAFE_INTEGER : res[row],
    root.val
  );
  dfs(root.left, row + 1, res);
  dfs(root.right, row + 1, res);
};

class Node {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.val = data;
  }
}

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(7);
root.left.right = new Node(6);
root.right.left = new Node(5);
root.right.right = new Node(4);

console.log(largestValues(root));
