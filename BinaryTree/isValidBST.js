var isValidBST = function (root) {
  return helper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};

var helper = function (root, min, max) {
  if (!root) return true;
  if (root.val <= min || root.val >= max) return false;
  return helper(root.left, min, root.val) && helper(root.right, root.val, max);
};
