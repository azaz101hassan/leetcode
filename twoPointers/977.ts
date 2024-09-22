// 977. Squares of a Sorted Array

const sortedSquares = (nums: number[]): number[] => {
  const result = [];

  let left = 0;
  let right = nums.length - 1;

  let decreasingPointer = nums.length - 1;

  while (left <= right) {
    const leftSquared = nums[left] * nums[left];
    const rightSquared = nums[right] * nums[right];

    if (leftSquared > rightSquared) {
      result[decreasingPointer] = leftSquared;
      left++;
    } else {
      result[decreasingPointer] = rightSquared;
      right--;
    }
    decreasingPointer--;
  }

  return result;
};

console.log(sortedSquares([-4, -1, 0, 3, 10])); // [0,1,9,16,100]
console.log(sortedSquares([-7, -3, 2, 3, 11])); // [4,9,9,49,121]
