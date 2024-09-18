const modifiedBinarySearch = (
  nums: number[],
  target: number,
  isFindingLeft: boolean
): number => {
  let result = -1;
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const middle = Math.floor(start + (end - start) / 2);

    if (nums[middle] === target) {
      result = middle;
      if (isFindingLeft) end = middle - 1;
      else start = middle + 1;
    } else if (nums[middle] > target) end = middle - 1;
    else start = middle + 1;
  }

  return result;
};

const searchRange = (nums: number[], target: number): number[] => {
  const result = [];
  result[0] = modifiedBinarySearch(nums, target, true);
  result[1] = modifiedBinarySearch(nums, target, false);
  return result;
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // [3, 4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // [-1, -1]
console.log(searchRange([], 0)); // [-1, -1]
