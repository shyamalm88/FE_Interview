const maximumPathSum = (node) => {
  let max = [0];
  findSum(node, max);
  return max[0];
};

const findSum = (node, max) => {
  if (node == null) return 0;
  let left = Math.max(0, findSum(node.left, max));
  let right = Math.max(0, findSum(node.right, max));
  max[0] = Math.max(max[0], left + right + node.val);
  return node.val + Math.max(left, right);
};

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.left.right.right = new Node(6);
root.left.right.right.right = new Node(7);

console.log(maximumPathSum(root));
