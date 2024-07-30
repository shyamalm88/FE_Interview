const levelOrderTraversal = (root) => {
  return helper([], root, 0);
};

var helper = function (res, root, level) {
  if (root) {
    if (!res[level]) res[level] = [];
    res[level].push(root.val);
    helper(res, root.left, level + 1);
    helper(res, root.right, level + 1);
  }
  return res;
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

console.log(levelOrderTraversal(root));
