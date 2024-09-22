const nextSmallerElement = (nums: number[]): number[] => {
  const result = new Array(nums.length).fill(-1);
  const stack = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] >= nums[i]) stack.pop();
    if (stack.length) result[i] = stack[stack.length - 1];
    stack.push(nums[i]);
  }

  return result;
};

console.log(nextSmallerElement([4, 5, 2, 25])); // [ 2, 2, -1, -1 ]
console.log(nextSmallerElement([13, 7, 6, 12])); // [ 7, 6 -1, -1 ]
