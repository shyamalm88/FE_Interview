let unionArray = (nums1, nums2) => {
  let union = [];
  let i = 0,
    j = 0;
  let n = nums1.length;
  let m = nums2.length;

  while (i < n && j < m) {
    // Case 1 and 2
    if (nums1[i] <= nums2[j]) {
      if (union.length === 0 || union[union.length - 1] !== nums1[i]) {
        union.push(nums1[i]);
      }
      i++;
      // Case 3
    } else {
      if (union.length === 0 || union[union.length - 1] !== nums2[j]) {
        union.push(nums2[j]);
      }
      j++;
    }
  }

  // Add remaining elements of nums1, if any
  while (i < n) {
    if (union.length === 0 || union[union.length - 1] !== nums1[i]) {
      union.push(nums1[i]);
    }
    i++;
  }

  // Add remaining elements of nums2, if any
  while (j < m) {
    if (union.length === 0 || union[union.length - 1] !== nums2[j]) {
      union.push(nums2[j]);
    }
    j++;
  }

  return union;
};

const nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const nums2 = [2, 3, 4, 4, 5, 11, 12];

console.log(unionArray(nums1, nums2));
