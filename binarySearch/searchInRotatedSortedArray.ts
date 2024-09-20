const search = (nums: number[], target: number): number => {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const middle = Math.floor(start + (end - start) / 2);

    if (nums[middle] === target) return middle;

    // left sorted array
    if (nums[start] <= nums[middle]) {
      if (target >= nums[start] && target < nums[middle]) end = middle - 1;
      else start = middle + 1;
    } else {
      // right sorted array
      if (target <= nums[end] && target > nums[middle]) start = middle + 1;
      else end = middle - 1;
    }
  }
  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // -1
console.log(search([1], 0)); // -1
