export const binarySearch = (nums: number[], target: number): number => {
  let start = 0;
  let end = nums.length;

  while (start <= end) {
    const middle = Math.floor(start + (end - start) / 2);
    if (nums[middle] === target) return middle;
    else if (nums[middle] > target) end = middle - 1;
    else start = middle + 1;
  }

  return -1;
};

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9)); // 4
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 2)); // -1
