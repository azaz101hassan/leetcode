const twoSum = (nums: number[], target: number): number[] => {
  const objectifiedNums = {};
  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];
    const complement = target - num;

    if (objectifiedNums.hasOwnProperty(complement))
      return [objectifiedNums[complement], index];

    objectifiedNums[num] = index;
  }
  return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
// [0, 1]

console.log(twoSum([3, 2, 4], 6));
// [1, 2]

console.log(twoSum([3, 3], 6));
//[0, 1]
