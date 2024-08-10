var flatten = function (root) {
  helper(root);
};

var helper = function (root) {
  if (!root) return null;

  var leftLast = helper(root.left);
  var rightLast = helper(root.right);

  if (root.left) {
    leftLast.right = root.right;
    root.right = root.left;
  }

  root.left = null;

  return rightLast || leftLast || root;
};
