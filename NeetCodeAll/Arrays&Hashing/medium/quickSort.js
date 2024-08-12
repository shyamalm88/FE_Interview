var quickSort = function (nums) {
  return quickSortAlgo(nums, 0, nums.length - 1);
};

const quickSortAlgo = (nums, left, right) => {
  if (nums.length < 2) return nums;
  if (left < right) {
    let j = partition(nums, left, right);
    quickSortAlgo(nums, left, j - 1);
    quickSortAlgo(nums, j + 1, right);
  }
  return nums;
};

const partition = (nums, left, right) => {
  let pivot = nums[right];
  let p = left - 1;
  for (let i = left; i <= right - 1; i++) {
    if (nums[i] <= pivot) {
      p++;
      swap(nums, i, p);
    }
  }
  swap(nums, p + 1, right);
  return p + 1;
};

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

console.log(quickSort([5, 2, 3, 1]));
