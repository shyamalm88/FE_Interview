var findBottomLeftValue = function (root) {
  return dfs(root, 0)[0];
};

var dfs = function (node, depth) {
  var left = node.left ? dfs(node.left, depth + 1) : [node.val, depth];
  var right = node.right ? dfs(node.right, depth + 1) : [node.val, depth];
  return right[1] > left[1] ? right : left;
};
