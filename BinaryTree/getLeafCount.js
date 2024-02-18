const getLeafCount = (root) => {
  if (root === null) {
    return 0;
  }
  if (root.left === null && root.right === null) {
    return 1;
  }
  return getLeafCount(root.left) + getLeafCount(root.right);
};

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("leaf count is : " + getLeafCount(root));
