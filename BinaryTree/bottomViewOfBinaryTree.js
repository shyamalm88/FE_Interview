const bottomViewOfBinaryTree = (root) => {
  const map = new Map();
  const queue = [];
  if (!root) return [];

  queue.push({ node: root, hd: 0 });

  while (queue.length) {
    const { node, hd } = queue.shift();
    map.set(hd, node.val);
    if (node.left) {
      queue.push({ node: node.left, hd: hd - 1 });
    }
    if (node.right) {
      queue.push({ node: node.right, hd: hd + 1 });
    }
  }
  let res = [];
  for (const [key, value] of map) {
    res.push(value);
  }
  return res;
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
console.log("bottom view", bottomViewOfBinaryTree(tree));
