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
  for (cost[hd] of map.entries().sort()) {
    res.push(map.get(hd));
  }
  return res;
};
