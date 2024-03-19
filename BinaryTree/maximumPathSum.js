const maximumPathSum = (node) => {
  let max = 0;
  findSum(node, max);
  return max;
};

const findSum = (node, max) => {
  if (node == null) return 0;
  let left = Math.max(0, maximumPathSum(node.left, max)); // if path sum is negative considering to omit and replace by 0 because math.max(0,-1)=== 0
  let right = Math.max(0, maximumPathSum(node.right, max)); // if path sum is negative considering to omit and replace by 0 because math.max(0,-1)=== 0
  max = Math.max(max, left + right + node.val);
  return node.val + Math.max(left, right);
};
