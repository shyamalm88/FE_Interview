var findBottomLeftValue = function (root) {
  return dfs(root, 0)[0];
};

var dfs = function (node, depth) {
  var left = node.left ? dfs(node.left, depth + 1) : [node.val, depth];
  var right = node.right ? dfs(node.right, depth + 1) : [node.val, depth];
  return right[1] > left[1] ? right : left;
};

class TreeNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);
console.log("bottomleft", findBottomLeftValue(tree));
