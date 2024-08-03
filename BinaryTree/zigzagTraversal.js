const zigZagTraversal = (root) => {
  if (!root) return [];
  return helper([[root]], 0);
};

var helper = function (res, level) {
  var now = res[level];
  var next = [];

  for (var i = now.length - 1; i >= 0; i--) {
    if (level % 2) {
      if (now[i].left) next.push(now[i].left);
      if (now[i].right) next.push(now[i].right);
    } else {
      if (now[i].right) next.push(now[i].right);
      if (now[i].left) next.push(now[i].left);
    }

    now[i] = now[i].val;
  }

  if (next.length) {
    res.push(next);
    helper(res, level + 1);
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

console.log(zigZagTraversal(root));
