/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function (graph) {
  return clone(graph, {});
};

var clone = function (node, map) {
  if (!node) return null;
  if (map[node.label]) return map[node.label];

  var cloneNode = new UndirectedGraphNode(node.label);

  map[node.label] = cloneNode;

  for (var i = 0; i < node.neighbors.length; i++) {
    cloneNode.neighbors.push(clone(node.neighbors[i], map));
  }

  return cloneNode;
};
