function getElementsByClassName(className) {
  let body = document.body;

  function searchNode(node) {
    let result = [];
    if (node.classList.contains(className)) {
      result.push(node);
    }
    for (const elem of node.children) {
      const res = searchNode(elem);
      result = result.concat(res);
    }

    return result;
  }
  return searchNode(body);
}
