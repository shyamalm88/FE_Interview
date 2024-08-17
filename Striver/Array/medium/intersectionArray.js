let intersectionArray = (nums1, nums2) => {
  let ans = [];
  let i = 0;
  let j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      i++;
    } else if (nums2[j] < nums1[i]) {
      j++;
    }
    // nums1[i] == nums2[j]
    else {
      ans.push(nums1[i]);
      i++;
      j++;
    }
  }
  return ans;
};

console.log(intersectionArray([1, 2, 3, 3, 4, 5, 6, 7], [3, 3, 4, 4, 5, 8]));
