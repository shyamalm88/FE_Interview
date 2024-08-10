var canFinish = function (numCourses, prerequisites) {
  var edges = Array(numCourses)
    .fill(0)
    .map((_) => Array(numCourses).fill(0));
  var incoming = Array(numCourses).fill(0);
  var len = prerequisites.length;
  var post = 0;
  var prev = 0;
  var queue = [];
  var num = 0;
  var count = 0;

  for (var i = 0; i < len; i++) {
    prev = prerequisites[i][1];
    post = prerequisites[i][0];
    if (edges[prev][post] === 0) {
      incoming[post]++;
      edges[prev][post] = 1;
    }
  }

  for (var j = 0; j < numCourses; j++) {
    if (incoming[j] === 0) queue.push(j);
  }

  while (queue.length) {
    count++;
    num = queue.pop();
    for (var k = 0; k < numCourses; k++) {
      if (edges[num][k] === 1 && --incoming[k] === 0) queue.push(k);
    }
  }

  return count === numCourses;
};
