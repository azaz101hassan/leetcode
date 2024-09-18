const singleNonDuplicate = (nums: number[]): number => {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const middle = Math.floor(start + (end - start) / 2);
    const current = nums[middle];

    if (current === nums[middle - 1]) {
      if (middle % 2 === 0) end = middle - 2;
      else start = middle + 1;
    } else if (current === nums[middle + 1]) {
      if (middle % 2 === 1) end = middle - 1;
      else start = middle + 2;
    } else return current;
  }

  return null;
};

console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8])); // 2
console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11])); // 10
console.log(singleNonDuplicate([3, 3, 10, 7, 7, 11, 11])); // 10
