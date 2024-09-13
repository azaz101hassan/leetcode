const buildArray = (nums: number[]): number[] => {
  const permutationNums = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    permutationNums.push(nums[num]);
  }

  return permutationNums;
};

console.log(buildArray([0, 2, 1, 5, 3, 4]));
console.log(buildArray([5, 0, 1, 2, 3, 4]));
